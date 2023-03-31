import { useState } from "react"

function Form(){
    let [name,setName]=useState("")
    let [number,setNumber]=useState("")
    function nameData(e){
        setName(e.target.value)
    }
    function numberData(e){
        setNumber(e.target.value)
    }
    function submit(){
        if(name=="sonika" && number=="123")
            alert("welcome")
        else
            alert("Enter the correct password")
    }
    return(
        <div>
            <form>
                <label>Name: </label>
                <input type="text" onChange={nameData}></input><br></br>
                <label>Password</label>
                <input type="password" onChange={numberData}></input>
                <button onClick={submit} >Submit</button>
            </form>
        </div>
    )
}
export default Form