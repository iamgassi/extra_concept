import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OnlyOnce = () => {
    const [posts,setPosts]=useState([])
    const [err,setErr]=useState(null)
        useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                setPosts(res.data)
            })
            .catch(err=>setErr(err))
        },[])

  return (
    <>
     <h4>Data in H4</h4>
      <div>
        {!err?(posts.map(e=><h1 key={e.id}>{e.title}</h1>)):(<h1>{err.message}</h1>)}
      </div>
    </>
  )
}

export default OnlyOnce