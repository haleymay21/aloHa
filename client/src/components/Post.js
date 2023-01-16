import React, { useState } from 'react'
import { Form, Button, Dropdown, Alert, Container } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { ADD_FEED } from '../utils/mutations';

function Post() {

  const [problem, setProblem] = useState(false)

  const [urgency, setUrgency] = useState('Not-Urgent - Blue')

  const [feedStatus, setFeedStatus] = useState({
    status: '',
    resolved: false,
  })

  const [addPost, { error }] = useMutation(ADD_FEED)


  const postOnSubmit = async (e) => {
    e.preventDefault();

    console.log(feedStatus, problem, urgency)

    try {
      const { data } = await addPost({
        variables: { ...feedStatus },
      })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  console.log(feedStatus, problem, urgency)

  return (
    <>
      <form onSubmit={postOnSubmit}>

        {/* <h1>feed Status is {feedStatus.status}</h1> */}

        <input type="text" name="status" className='feedBox' value={feedStatus.status} onChange={(e) => { setFeedStatus({ [e.target.name]: e.target.value }) }} placeholder="Inform your community" />

        <div>
          <label className='boxLabel'>
            <input type="checkbox" className='checkBox' value={problem} onChange={(e) => { setProblem({ "problem": e.target.value }) }} />
            Problem? check here.
          </label>
        </div>

        {problem === 'false' ?
          <div>
            {/* <h1>{urgency}</h1> */}
            <select className='dropdownContent' value={urgency} onChange={(e) => { setUrgency(e.target.value) }}>
              <option>Not-Urgent - Blue</option>
              <option>Standard - Green</option>
              <option>Urgent - Yellow</option>
              <option>Very Urgent - Orange</option>
              <option>Immediate - Red</option>
            </select> </div>
          : <div></div>
        }

        <button className='button' type='submit'>Click Here</button>
      </form>
    </>
  )
}

export default Post;