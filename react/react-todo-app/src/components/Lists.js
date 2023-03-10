import React, { useState } from 'react'

const Lists = React.memo((
    {handleClick,id,title,completed,todoData,setTodoData,provided,snapshot}
) => {

    const [isEditing, setisEditing] = useState(false);
    const [editedTitel, seteditedTitel] = useState(title);

    const  handleCompleChange = (id) =>{
        let newTodoData = todoData.map(data =>{
          if(data.id === id){
            data.completed = !data.completed;
          }
          return data;
        })
        setTodoData(newTodoData);
        localStorage.setItem('todoData',JSON.stringify([newTodoData]));
 
      };

      const handleEditChange =(e) =>{
        seteditedTitel(e.target.value)
      }

      const handleSubmit = (e) =>{
        e.preventDefault();

        let newTodoData = todoData.map(data =>{
            if(data.id === id){
              data.title = editedTitel;
            }
            return data;
          });
         setTodoData(newTodoData);
         localStorage.setItem('todoData',JSON.stringify([newTodoData]));
 
         setisEditing(false);
      }
       //   const handleClick = (id) =>{
    //     let newTodoData = todoData.filter(data => data.id !== id);
    //     setTodoData(newTodoData)
    //   };


      if(isEditing){
        return(
            <div className={`flex bg-gray-100 items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
                         <div className='items-center'>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    value={editedTitel}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                                 />
                             </form>
                         </div>
                         <div>
                             <button className='px-4 py-2 float-right'
                              onClick={() => setisEditing(false)}>
                             X
                             </button>
                             <button className='px-4 py-2 float-right' 
                                type='submit'
                                onClick={handleSubmit}
                           >
                              save
                             </button>
                         </div>
                     </div>
        )
      }else{
  return (
    <div key={id} 
                   {...provided.draggableProps}
                    ref={provided.innerRef} 
                    {...provided.dragHandleProps}
                    className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                    >
                         <div className='items-center'>
                             <input 
                                 type="checkbox" 
                                 onChange={ () => handleCompleChange(id)}
                                 defaultChecked={completed} />
                             <span 
                             className={completed ? 'line-through' : undefined}
                             > 
                             {title}
                             </span>
                         </div>
                         <div>
                             <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>
                             X
                             </button>
                             <button className='px-4 py-2 float-right' 
                             onClick={() => setisEditing(true)}>
                              edit
                             </button>
                         </div>
                     </div>
  );
}
});
export default Lists;