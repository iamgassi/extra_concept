import React,{useReducer} from 'react'

const UseReducer = () => {
    const initial=0
    const reducer=(state,action)=>{
        switch(action){
            case 'increment':
                return state+1;
                case 'decrement':
                    return state-1;
                    case 'reset':
                        return initial;
                      default:
                        return state
        }
    }
  
        const [count, dispatch] = useReducer(reducer,initial)
    
        
  return (
    <>
        <h1>Count - {count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>

    </>  )
}

export default UseReducer