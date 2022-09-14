import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Axios = () => {
const [data,setData]=useState([])
const [error,getError]=useState('')
const API=`https://jsonplaceholder.typicode.com/posts`
useEffect(() => {
  axios.get(API)
  .then(
    (response)=>
    {
        // console.log(response)
        setData(response.data)
    }

  ).catch(
    err=>{
        console.log(err)
         getError(err.message)
         })
  
}, [API])

console.log(data)
console.log("eror",error)

 

  return (
    <>
   <h1> List of Posts</h1> 
    {(data.length)?(
        data.map((e)=>{
       return  <div key={e.id}>  {e.title} <h6>{e.body}</h6>   </div>

    })
    ):(null)}
    
     {error?(<h1>Error in retriving data ,{error}</h1>):null}
    {/* {data.map(item=>{<h6 key={item.id} >{item.title}</h6>})} */}

    
    </>
  )
}

export default Axios