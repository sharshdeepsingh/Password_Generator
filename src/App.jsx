import { useState, useEffect } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/usePasswordGenerator';
import PasswordStrengthIndicator from './Components/StrengthChecker.jsx';
import Button from './Components/Button.jsx';
import CheckBox from './Components/CheckBox.jsx';

function App() {
  const [length, setLength] = useState(7);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Alphabets", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Characters", state: false }
  ]);
  const [copied, setCopied] = useState(false);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckBoxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <div className="darkModeToggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="container">
        {/* Password Display & Copy Button */}
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <Button text={copied ? "Copied" : "Copy"} customClass="copyBtn" onClick={handleCopy} />
          </div>
        )}

        {/* Password Length Slider */}
        <div className="charLength">
          <span>
            <label>Password Length</label>
            <label>{length}</label>
          </span>
          <input className='passwordSlider' type="range" min='4' max='23'
            onChange={(e) => setLength(Number(e.target.value))}
            value={length} />
        </div>

        {/* Checkboxes for Password Options */}
        <div className='checkBox'>
          {checkBoxData.map((singleCheckBox, index) => (
            <CheckBox title={singleCheckBox.title} key={index} onChange={() => handleCheckboxChange(index)} state={singleCheckBox.state} />
          ))}
        </div>

        {/* Strength Indicator */}
        <PasswordStrengthIndicator password={password} />

        {/* Error Message */}
        {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

        {/* Generate Password Button */}
        <div className="generateBtn">
          <Button text="Generate Password" customClass="generateBtn" onClick={() => generatePassword(checkBoxData, length)} />
        </div>
      </div>
    </>
  );
}

export default App;
