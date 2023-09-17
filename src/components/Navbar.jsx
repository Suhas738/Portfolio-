import React ,{useState}from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const[nav, setNav]= useState(false)
  const handleClick =()=>setNav(!nav)

  return (
    <div className='w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-4 text-gray-300'>
        <div>
          <img src={Logo} alt="Logo_img" style={{width:'70px' }} />
        </div>
                
          <ul className='hidden md:flex'>
            <li>
            <Link activeClass="active" to="home" smooth={true} offset={50} duration={500} >
              Home
            </Link>
            </li>
            <li><Link activeClass="active" to="about" smooth={true} offset={50} duration={500} >
              About
            </Link></li>
            <li><Link activeClass="active" to="skills" smooth={true} offset={50} duration={500} >
              Skills
            </Link></li>
            <li><Link activeClass="active" to="work" smooth={true} offset={50} duration={500} >
              Work
            </Link></li>
            <li><Link activeClass="active" to="contact" smooth={true} offset={50} duration={500} >
              Contact
            </Link></li>
          </ul>          
        

        <div onClick={handleClick} className='md:hidden z-10'> 
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
            <li  className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="home" smooth={true} offset={50} duration={500} >
              Home
            </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="about" smooth={true} offset={50} duration={500} >
              About
            </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} offset={50} duration={500} >
              Skills
            </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="work" smooth={true} offset={50} duration={500} >
              Work
            </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} offset={50} duration={500} >
              Contact
            </Link></li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/suhas-anabathula-9a895a253/">LinkedIn <FaLinkedin size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/Suhas738">Github <FaGithub size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/"><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} offset={50} duration={500} >Email</Link> <HiOutlineMail size={30} /></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300'
              href="/ ">Resume <BsFillPersonLinesFill size={30} /></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar 