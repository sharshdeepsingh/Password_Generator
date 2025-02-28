import { useState } from "react";

const usePasswordGenerator=()=>{
const[password,setPassword]=useState();
const[errorMessage,setErrorMessage]=useState();

const generatePassword=(checkBoxData,length)=>{
    let charset="";
    let generatedPassword="";

    const selectedOption=checkBoxData.filter((checkbox)=>checkbox.state)
    if(selectedOption.length===0)
    {
        setErrorMessage("Select at least one option");
        setPassword("");
        return;
    }

    selectedOption.forEach((option)=> {
        switch(option.title){
            case"Include Alphabets":
            charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            break;
            case"Include Number":
            charset+="0123456789";
            break;
            case"Include Charaters":
            charset+="~!@#$%^&*()";
            break; 
        }
    });

    for(let i=0;i<length;i++)
    {
        const randomIndex=Math.floor(Math.random()*charset.length);
        generatedPassword+=charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
}

return {password,errorMessage,generatePassword};

}

export default usePasswordGenerator;