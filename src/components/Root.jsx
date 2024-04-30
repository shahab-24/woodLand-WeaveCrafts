
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Headers from './Headers';
import { useState } from 'react';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>
      
      <Headers setDarkMode={setDarkMode} darkMode={darkMode} ></Headers>
      <div className="w-full  dark:bg-[#0F172A]">
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;