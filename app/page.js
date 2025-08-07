'use client'
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState, useEffect } from 'react';
import Footer from "./components/Footer";

export default function Home() {  
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() =>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work /> 
    <Contact />
    <Footer />
    </>
  );
}
