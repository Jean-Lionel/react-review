import React, {useState } from 'react'
import "./assets/styles.css";
function TodoComponent() {
    const [name, setName] = useState()
     const [tasks, setTasks] = useState([]); // Alternative 
    function submitValue() { 
        const task = {
            name: name,
            id: tasks.length +1,
            date: new Date(),
            status: 'pending',
            motant : 500 * tasks.length,
            completed: false,
        };
        setTasks( [...tasks, task] );
    }
    function cleanValue() { 
        setTasks( [] );
    }
    function deleteItem(e) {
        setTasks(tasks.filter(x => e.id != x.id));
        // map , filter , reduce 
    }
    function handleCompleted(task) {
        const resp = tasks.map(x => {
            if (x.id === task.id) {
                x.completed = !x.completed;
            }
            return x;
        })
        setTasks(resp);
    }
    const TotalMontant = tasks.
        filter((task) => !task.completed).
        reduce((acc, task) => acc + task.motant, 0);
    return (        
      <div>
          <h1>TO DO APP</h1>
          <div>
              <input type="text" onChange={(e) => setName(e.target.value)} className='task' />
              <button onClick={submitValue} className='addTaskBtn'>OK</button>
              <button onClick={cleanValue} className='deleteTaskBtn'>X</button>
          </div>
          <hr />
          <div>
              <table>
                  <thead>
                  <tr>
                          <th>ID</th>
                          <th>Task</th>
                    
                          <th>Montant</th>
                         
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                  {tasks.map((task) => (
                      <tr key={task.id} className={task.completed ? "completedTask" : "" }>
                          <td>{task.id}</td>
                          <td>{task.name}</td>
                          
                          <td>{task.motant}</td>
                       
                          <td><input type="checkbox" onChange={(_) => handleCompleted(task)} />
                          <button onClick={() => deleteItem(task)} className='deleteTaskBtn'>Delete</button>
                          </td>
                         
                    </tr>
                  ))}
                        <tr>
                            <td colSpan="2">Total Montant : </td>
                            <td>{TotalMontant}</td>
                        </tr>
                  </tbody>
              </table>
              
            
          </div>
      </div>
  )
}

export default TodoComponent