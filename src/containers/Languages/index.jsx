import React, { useState } from "react";

const placeholders = {
  english: {
    title: 'Welcome to the app!!!'
  },
  hindi: {
    title: 'ऐप में आपका स्वागत है!!!'
  },
  spanish: {
    title: 'Bienvenida a la aplicación!!!'
  }
};

const LanguagesComp = (props) => {
  const [lang, setLang] = useState('english');

  return (
    <div>
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => setLang('english')}>English</span>
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => setLang('hindi')}>हिंदी</span>
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={() => setLang('spanish')}>Española</span>
      <div>{placeholders[lang].title}</div>
    </div>
  )
};

export default LanguagesComp;
