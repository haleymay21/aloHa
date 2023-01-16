import React, { useState, useEffect } from 'react'
import { Form, Button, Dropdown, Alert, Container } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { ADD_FEED } from '../utils/mutations';

function Post() {

  const [feedStatus, setFeedStatus] = useState({
    status: '',
  })



  const [problem, setProblem] = useState(false)
  const checkboxHandler = () => {
    setProblem(current => !current)
  }

  useEffect(() => {
    console.log(problem)
  }, [problem])

  const [addPost, { error }] = useMutation(ADD_FEED)


  const postOnSubmit = async (e) => {
    e.preventDefault();

    console.log(feedStatus, problem)

    const feedToSave = { status: feedStatus, problem: problem }

    try {
      const { data } = await addPost({
        variables: { feedData: { feedToSave } },
      })
      console.log(data)

    } catch (e) {
      console.error(e)
    }
  }

  console.log(feedStatus, problem)

  return (
    <>
      <form onSubmit={postOnSubmit}>

        <input type="text" name="status" className='feedBox' value={feedStatus.status} onChange={(e) => { setFeedStatus({ [e.target.name]: e.target.value }) }} placeholder="Inform your community" />

        <div>
          <label className='boxLabel'>
            <input type="checkbox" className='checkBox' value={problem} onChange={checkboxHandler} />
            Problem? check here.
          </label>
        </div>

        <button className='button' type='submit'>Click Here</button>
      </form>
    </>
  )
}

export default Post;