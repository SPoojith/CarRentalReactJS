import Footer from '../footer/footer';
import Header from '../header/header';
import MainBody from '../mainBody/mainBody';
import { RedAndWhite,RedAndBlack } from '../colors';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import './home.css'
function Home() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : RedAndBlack;
});

// Update the localStorage when the theme changes
useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
}, [theme]);

const changeBackgroundColor = (color) => {
    setTheme(color);
};
  return (
        <div className="main">
            <Header className="HeaderTag" color={theme} changeBackgroundColor={changeBackgroundColor}></Header>
            <MainBody className="MainBodyTag" color={theme}></MainBody>
            <Footer className="FooterTag" color={theme}></Footer>
        </div>
  );
}

export default Home;
