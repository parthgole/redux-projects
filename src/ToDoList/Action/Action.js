//new Date().getTime().toString()
export const addToDo=(data)=>{
    return{
    type:'ADD_TODO',
    payload:{
        id:new Date().getTime().toString(),
        data:data,
        status:false,
        createDate:'',
        titleStatus:'Created:: '    
    }
    }
};
export const deleteToDo=(id)=>{
    return{
    type:'DELETE_TODO',
    payload:{id:id}
    }
};
export const resetToDo=()=>{
    return{
    type:'RESET_TODO'
    }
};

export const updateToDo=(rep,inputData)=>{
    return{
    type:'UPDATE_TODO',
    payload:{
        position:rep.position,
        id:rep.id,
        data:inputData,
        status:rep.status,
        createDate:null,
        titleStatus:'Last Updated:: ',
        toggle:rep.toggle    
    }
    }
};
export const markCompletedToDo=(toggle,placement)=>{
    return{
    type:'MARK_COMPLETED_TODO',
    payload:{
        position:placement,
        toggle:toggle    
    }
    }
};