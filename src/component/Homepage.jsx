import axios from "axios"
import { useEffect, useState } from "react"
import style from "./homepage.module.css"
// import AddIcon from '@mui/icons-material/Add';
import {useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from "@mui/material";

function Homepage(){
    let [emp,setEmp]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/emp")
    .then((ele)=>{
        setEmp(ele.data)
    })
    },[])
    
    function del(e){
        console.log("This",e.target.id)
        var index=e.currentTarget.id
        axios.delete(`http://localhost:3000/emp/${index}`)
        .then(()=>{
            axios.get("http://localhost:3000/emp")
            .then((ele)=>{
                setEmp(ele.data)
            })
        })
        .catch(()=>{
            console.log("error")
        })
    }
    function nav(){
        navigate("/add")
    }
    
    return(
        <div id={style.back}>
            <div id={style.header}>
                <h1>Todo List</h1>
            </div>
            <div id={style.headerButton}>
            <Button size="small" variant="contained" onClick={nav}>Create task</Button>
            </div>
            <h3>All Tasks</h3>
            <div id={style.head1}>
                {emp.map((e)=>{
                    return(
                        <div id={style.para}> 
                            <h3>{e.heading} </h3>
                            <p>{e.para} </p>
                            <div id={style.btn}>
                            <IconButton aria-label="delete" onClick={del} id={e.id} ><DeleteIcon fontsize="small" /></IconButton><br></br> 
                            </div>
                        </div>
                        
                        )
                        
                    })}  
            </div>    
        </div>
    )
}
export default Homepage