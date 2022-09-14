import React, { Component } from 'react'
import axios from 'axios'

export class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         body:'',
         title:''
      }
    }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state)
        axios.
        post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(res=>console.log(res)
        )
        .catch(err=>console.log(err))
        this.setState({
            username:'',
            body:'',
            title:''
         })
    }
  render() {
    const {username,body,title}=this.state
    return (
      <>
        <h1>Axios Post</h1>
        <form onSubmit={this.handleSubmit}>
           <label>UserName</label> <input name="username"  value={username} onChange={this.handleChange}/>
           <label>Body</label> <input name="body" value={body} onChange={this.handleChange}/>
           <label>title</label> <input name="title" value={title} onChange={this.handleChange}/>
           <button className='App-link' type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default AxiosPost