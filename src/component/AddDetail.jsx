import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./homepage.module.css"
function AddDetail(){
    let [heading,setHeading]=useState("")
    let [para,setPara]=useState("")
    let navigate=useNavigate()
    function headingData(e){
        setHeading(e.target.value)
    }
    function paraData(e){
        setPara(e.target.value)
    }
    function save(){
        let payload={heading,para}
        axios.post("http://localhost:3000/emp",payload)
        .then(()=>{
            console.log("added")
        })
        navigate("/")
    }

    return(
        <div id={style.head}>
            <div>
                <div id={style.inputhead}>
                <input type="text" placeholder="Heading...." value={heading} onChange={headingData}></input>
                </div>
                <div id={style.inputtext}>
                <textarea value={para} onChange={paraData}placeholder="Paragraph...."></textarea><br></br>
                </div>
                <button onClick={save}>Save</button>
            </div>
        </div>
    )   
}
export default AddDetail