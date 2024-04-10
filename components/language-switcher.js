import React from 'react';
import { useLanguage } from './language-context';
import { Select } from '@chakra-ui/react'
const LanguageSwitcher = () => {
  const {  toggleLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    toggleLanguage(newLanguage);
  };

  return (

    <Select onChange={(e) => handleLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="vn">Vietnamese</option>
      {/* Add more language options as needed */}
    </Select>


    //   <div>
    //     <button onClick={() => handleLanguageChange('en')}>English</button>
    //     <button onClick={() => handleLanguageChange('vn')}>Vietnamese</button>
    //     {/* Add more language buttons as needed */}
    //   </div>
  );
};

export default LanguageSwitcher;