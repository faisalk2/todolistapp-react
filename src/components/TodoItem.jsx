import React from 'react'

const TodoItem = ({savedata}) => {
  return (
    <>TodoItem
        {
            savedata.map((e)=><div key={e.id}>{e.data}</div>)
        }
    </>
  )
}

export default TodoItem