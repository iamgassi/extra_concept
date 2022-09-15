import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchOnlyOne = () => {
  const [id,setId]=useState(1)
  const [btn,setBtn]=useState(1)
  const [post,setPost]=useState({})
  const [err,setErr]=useState('')
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
    .then(res=>{
        setPost(res.data)
    })
    .catch(err=>setErr(err))
},[btn])
   
const handleClick=()=>{
    console.log("in handler",{id})
    setBtn(id)
    setErr('')
    setId('')
}
  return (
    <>
        <input value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Data</button>

       { !err?
        (post.title):
        (err.message)}
    </>
  )
}

export default FetchOnlyOne