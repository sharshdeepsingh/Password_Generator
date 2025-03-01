import React from 'react';

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 6) {
      return "Very Weak";
    } else if (passwordLength < 10) {
      return "Weak";
    } else if (passwordLength < 14) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className='passwordStrength'>
      Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
