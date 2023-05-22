const initialData={
  dataList:[]
}

function ToDoReducer(state=initialData,action) {
  switch (action.type) {

    case "ADD_TODO":
      const{id,data}=action.payload;
      let createNewDate=new Date();
      return {
        
        dataList:[
          ...state.dataList,
          {
            id:id,
            data:data,
            status:false,
            createDate:`${createNewDate.getFullYear()}:${createNewDate.getMonth()+1}:${createNewDate.getDate()}
            <=>${createNewDate.getHours()}:
            ${createNewDate.getMinutes()}:${createNewDate.getSeconds()}:${createNewDate.getMilliseconds()}`,
            titleStatus:'Created:: '
        }]
      }

    case "DELETE_TODO":
      const newList=state.dataList.filter((value)=>value.id !== action.payload.id)
      return {
        
       dataList:newList
      }

    case "RESET_TODO":
      return {
        
       dataList:[]
      }

    case "UPDATE_TODO":
      let UpdateDate=new Date()
      let newArray=[...state.dataList]
      newArray[action.payload.position].data=action.payload.data;
      newArray[action.payload.position].status=action.payload.status;
      newArray[action.payload.position].createDate=
        `${UpdateDate.getFullYear()}:${UpdateDate.getMonth()+1}:
        ${UpdateDate.getDate()}<=>${UpdateDate.getHours()}:
        ${UpdateDate.getMinutes()}:${UpdateDate.getSeconds()}:
        ${UpdateDate.getMilliseconds()}`;
        newArray[action.payload.position].titleStatus='Last Update:: ';
      return {
       dataList:newArray
      }

    case "MARK_COMPLETED_TODO":
      let updatedList=[...state.dataList];
        const Length=updatedList.length
        if(action.payload.toggle){
            updatedList.push(updatedList.splice(action.payload.position, 1)[0])
            updatedList[Length-1].status=true
            return {
              dataList:updatedList
             }

        }else{
            updatedList[action.payload.position].status=false
            updatedList.unshift(updatedList.splice(action.payload.position, 1)[0])            
            return {
              dataList:updatedList
             }
        }      
    
    default: return state 
  }
}

export default ToDoReducer
