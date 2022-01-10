import React, { useState } from 'react';
import Course from '../Components/Course/Course';
import { homeObjOne, homeObj2, homeObj3 } from '../Components/Course/Data';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Index'
import Services from '../Components/Services/Services';
import Sidebar from '../Components/SideBar/Index'
import Slide from '../Components/Slides/Index';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen);
};

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
          <Slide/>
          <Course {...homeObjOne}/>
          <Course {...homeObj2}/>
          <Services/>
          <Course {...homeObj3}/>
          <Footer/>
        </>
    )
}

export default Home
