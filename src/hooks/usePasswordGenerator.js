import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charset = "";
    let generatedPassword = "";

  
    const selectedOptions = checkBoxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      setErrorMessage("Select at least one option");
      setPassword("");
      return;
    }

    
    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Alphabets":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers": 
          charset += "0123456789";
          break;
        case "Include Characters":
          charset += "~!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
