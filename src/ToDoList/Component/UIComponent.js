function UIComponent(key,value,replace,status,data,titleStatus,createDate,deleteItem,change,editItem) {
  return (
    <>
      <div >
                <div style={{width:'100%',height:'auto',backgroundColor:
                value===replace?'orange':'green',
                border:'1px solid black',borderRadius:'40px',margin:'10px auto 10px'        
                }}>
                        <div>
                        {key+1}..   
                        <span style={{textDecoration:status?'line-through':'',
                        color:status?'blue':'black'           
                        }} >{data} 
                        </span>
                        </div><br/>
                        <div style={{justifyItems:'center'}}>
                        <i className="fa-solid fa-trash"  
                        onClick={()=>deleteItem(value)} title="Delete"></i>

                        <input type="checkbox" id={key} 
                        onChange={(e)=>change(e)} 
                        checked={status} title="Set Priority"/>

                        <i className="fas fa-edit" onClick={()=>editItem(key)} 
                        title={`UpdateList:: ${data}`}></i>

                        </div>

                        <div style={{margin:'10px',
                        color:value===replace?'black':'white'
                        }}>{titleStatus}{createDate}</div>
                </div>
                </div>
    </>
  )
}

export default UIComponent
