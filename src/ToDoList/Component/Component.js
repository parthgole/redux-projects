import {  useState } from "react"
// import UIComponent from "./UIComponent"
import { useSelector,useDispatch } from "react-redux"
import {addToDo,deleteToDo,resetToDo,updateToDo,markCompletedToDo} from "../Action/Action"

function Component() {
    const[inputData,setInputData]=useState('')
    const[replace,setReplace]=useState({id:null,data:'',
    status:null,toggle:true,createDate:null,titleStatus:null})
    const list=useSelector((state)=>state.ToDoReducer.dataList)
    
    const dispatch = useDispatch();
    const addItem=()=>{
        if(!inputData){

        }else{    
            dispatch(addToDo(inputData))
            setInputData('')
        }  
    }
    const deleteItem=(e)=>{
        dispatch(deleteToDo(e))

    }
    const reset=()=>{
        dispatch(resetToDo())

    }
    const editItem=(u)=>{
        const updatedList=[...list];
        const repl={position:u,id:updatedList[u].id,
            data:updatedList[u].data,toggle:false,
            status:updatedList[u].status,createDate:null,
            titleStatus:'Last Update:: '}
            setInputData(updatedList[u].data); 
            console.log(updatedList,u)
        setReplace(repl)
    }
    const updateItem=()=>{
        dispatch(updateToDo(replace,inputData))
        setInputData(''); 
        let rep={id:null,data:'',
        status:null,toggle:true,createDate:null,titleStatus:null};
        setReplace(rep)
        console.log(list)

    }
    const change=(e)=>{
        dispatch(markCompletedToDo(e.target.checked,e.target.id))
    }
    document.title=(replace.data)===''?'ToDOList':replace.titleStatus;
  return (
    <>
        <input type='text' value={inputData} 
        onChange={(e)=>setInputData(e.target.value)} 
        placeholder={'Create New ToDo Task..........'} 
        style={{margin:'5% 0px 0px 0px' ,height:'30px'}}/>
        <br/><br/>
        {replace.toggle?<button onClick={addItem}>AddItem</button>:
        <button onClick={updateItem}>updateItem</button>}
        <button onClick={reset}>Reset</button>

        <div style={{width:'40%',height:'auto',margin:'30px auto 10px'}}>
            {
            list.map((value,id)=>{
                return (
                <div key={id}>
                <div style={{width:'100%',height:'auto',backgroundColor:
                value.id===replace.id?'orange':'green',
                border:'1px solid black',borderRadius:'40px',margin:'10px auto 10px'        
                }}>
                        <div>
                        {id+1}..   
                        <span style={{textDecoration:value.status?'line-through':'',
                        color:value.status?'blue':'black'           
                        }} >{value.data} 
                        </span>
                        </div><br/>
                        <div style={{justifyItems:'center'}}>
                        <i className="fa-solid fa-trash"  
                        onClick={()=>deleteItem(value.id)} title="Delete"></i>

                        <input type="checkbox" id={id} 
                        onChange={(e)=>change(e)} 
                        checked={value.status} title="Set Priority"/>

                        <i className="fas fa-edit" onClick={()=>editItem(id)} 
                        title={`UpdateList:: ${value.data}`}></i>

                        </div>

                        <div style={{margin:'10px',
                        color:value.id===replace.id?'black':'white'
                        }}>{value.titleStatus}{value.createDate}</div>
                </div>
                </div>                   
                
                )
            })
            }
        </div>
        
    </>
  )
}

export default Component
