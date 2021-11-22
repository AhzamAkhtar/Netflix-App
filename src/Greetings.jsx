import React, { useState } from "react";
import "./index.css"
function Greeting(){
const [Name,setName]=useState("")
const Displayname=()=>{
    const vname=prompt("ENTER USERNAME")
    const pass=prompt("ENTER PASSWORD")
    if (vname=="ahzam" && pass==8690){
        setName(vname)
    }else{
        alert("WRONG USERNAME/PASSWORD")
        
    }
}
    let Curdate=new Date();
    Curdate=Curdate.getHours();
    let greet="";
    const cssStyle={}
    let icon=""
    if(Curdate>=1 && Curdate<12){
        greet="GOOD MORNING"
        cssStyle.color="green"
        icon="fas fa-cloud-moon"
    }else if(Curdate>=12 && Curdate<19){
        greet="GOOD EVENING"
        cssStyle.color="orange"
        icon="fas fa-cloud-moon"
    }else{
        greet="GOOD NIGHT"
        cssStyle.color="yellow"
        icon="fas fa-cloud-moon"
    }
    
    return(
        <><h1 className="heading_style">{"WELCOME"}  {","+Name}  <span id="sp" style={cssStyle}>{greet}{<i id="ee" class={icon}></i>} </span></h1></>
    )
}
export  {Greeting }