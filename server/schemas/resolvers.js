const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    findAll: async (parent, args) => {
      const allUser = await User.find()
      return allUser;
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // add other queries here
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addFeed: async (parent, { feedData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: conext.user._id },
          { $push: { savedFeed: { feedData } } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteFeed: async (parent, { feedId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedFeed: { feedId } } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { commentData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: conext.user._id },
          { $push: { savedFeed: { commentData } } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedFeed: { commentId } } },
          { new: true }
        )
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
