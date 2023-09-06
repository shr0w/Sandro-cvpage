import React from 'react';
import { useLanguage } from './language-context';

const LanguageSwitcher = () => {
  const { selectedLanguage, toggleLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    toggleLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('vn')}>Vietnamese</button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default LanguageSwitcher;