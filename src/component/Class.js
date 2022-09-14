import React, { Component } from 'react'
import axios from 'axios'

 class Class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
   
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
          (response)=>
          {
              // console.log(response)
              this.setState({posts:response.data})
              console.log(this.state.posts)
          }
      
        ).catch(err=>
            {console.log(err)
             
            })
        
    }
  render() {
    const {posts}=this.state
    return (
        <>
        List of Posts
        {(posts.length)?(
            posts.map(e=> <h4 key={e.id}>{e.title}</h4>)
        ):(null)}
        
    
        {/* {data.map(item=>{<h6 key={item.id} >{item.title}</h6>})} */}
    
        
        </>
    )
  }
}

export default Class