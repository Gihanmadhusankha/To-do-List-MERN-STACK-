import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const[todos,setTodos]=useState([])
    useEffect(()=>{
       axios.get('htttp://localhost:5000/get')
       .then(result=>setTodos(result.data))
       .catch(err =>console.log(err))

    },[])

    const handleEdit=(id)=>{
        axios.put('htttp://localhost:5000/update/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err =>console.log(err))
    }
    const  handleDelete =(id) =>{
        axios.delete('htttp://localhost:5000/delete/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err =>console.log(err))
    }

  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {   
             todos.length ===0?
             <div><h2>No record</h2></div>
             :
            todos.map(todo =>(
                <div className='task'>
                    <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                        {todo.done ?
                        <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                        :<BsCircleFill className='icon'/>}
                        <p className={todo.done ? "line_through":""}>{todo.task}</p>
                    </div>
                <div>
                    <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
                    </div>
                    </div>

            ))
        }
    </div>
  )
}

export default Home
