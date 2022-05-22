import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todolist = ({data,savedata,setSaveData,delete}) => {
    const [isCompleted, setIsComppleted]=React.useState(data.isCompleted);
  return (
    <div>Todolist
        {
            data.map(e=>
                <div>
                    <input type="checkbox" checked={isCompleted} onChange={()=>{
                        setSaveData([...savedata,{
                            id:uuidv4(),
                           data:e.value,
                        }])
                    }} />
                    <div key={e.id}>{e.value}</div>
                    <button onClick={delete(e.id)}>delete</button>
                
                </div>
            )
        }
    </div>
  )
}

export default Todolist