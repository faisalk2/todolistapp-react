import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todo = ({query,setQuery,data,setData}) => {
  return (
    <div >
        <button onClick={()=>{
            setData([...data,{
                id:uuidv4(),
                value:query,
                isCompleted:false
            }]);
        }}>+</button>
        <input type="text"  placeholder='Add a to-do' value={query} onChange={(e)=>setQuery(e.target.value)} />
        
    </div>
  )
}

export default Todo