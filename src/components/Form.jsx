import React, { useState } from 'react'

export default function Form() {
    // variable that manage a task. 
    const [tasks , setTasks] = useState([]);
    // function that handle form submission . 
    
     function handleSubmit(e) {
        e.preventDefault();
         const form = document.getElementById('task');
        // const {form} = e.target;
        const formData = new FormData(form);
        const task ={};
        formData.forEach((value,key)=>{
            task[key]= value;

        });
        setTasks([...tasks,task]);
        form.reset();
    }
    function handleDelete(index){
         setTasks(tasks.filter((task,i)=>i!==index));
    }

  return (
    <>
    
    <div>
        
     <form id='task' onSubmit={handleSubmit}>
        <label htmlFor="what"></label>
        <input type="text" id="what" name="what" placeholder='What to Do' className='frm' required />
        
        <label htmlFor="where"></label>
              <input type="text" id="where" name="where" placeholder='Where to Do' className='frm' required /><br></br>
        
        <label htmlFor="why"></label>
              <input type="text" id="why" name="why" placeholder='Why to Do ' className='frm' required />
        
        <label htmlFor="date"></label>
        <input type="date" id="date" name="date" className='frm' required />
        
        <button type="submit" className='btn'>Save</button>
      </form>

          {tasks.length > 0 ? (
              <ul className='task-container'>
                  {tasks.map((task, index) => (
                      <li key={index} className='task'>
                          <p><strong>What:</strong> {task.what} </p>
                          <p><strong>Where:</strong> {task.where}</p>
                          <p><strong>Why:</strong> {task.why}</p>
                          <p><strong>Date:</strong> {task.date}</p>
                          <button onClick={()=> handleDelete(index)} className='delete-btn'>Delete</button>
                      </li>
                  ))}
              </ul>
          ) : (
              <h1 className='text'>You have no tasks</h1>
          )}
    </div>
    </>
  )
}
