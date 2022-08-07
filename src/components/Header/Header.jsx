import React,{useRef} from 'react';
import { Container } from 'reactstrap';
import { RiPantoneLine } from 'react-icons/ri';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import "./Header.css";


const Header = () => {
  let menuRef=useRef();
  const menuToggle=()=>menuRef.current.classList.toggle('active_menu');

  const navItems=[
    {
      name:'Home',
      path:'#'
    },
    {
      name:'About',
      path:'#'
    },
    {
      name:'Courses',
      path:'#'
    },
    {
      name:'Page',
      path:'#'
    },
    {
      name:'Blog',
      path:'#'
    },
  ]

  return (
    <header className='header'>
      <Container>
      <div className='navigation d-flex align-items-center justify-content-between'>
        <div className='logo'>
          <h2 className='d-flex align-items-center'>
            <span className='pt-4px'>
              <RiPantoneLine size={35} color='teal'/>
              </span>
             Learners.
            </h2>
        </div>
        <div className="nav d-flex align-items-center gap-5">
          <div className="nav_menu " ref={menuRef} onClick={menuToggle}>
            <ul className="nav_list">
              {
                navItems.map((item,index)=>(
                  <li key={index} className='nav_item'>
                    <a href={item.path} >{item.name}</a>
                  </li>
                ))
              }
            
            </ul>
          </div>
          <div className="nav_right">
            <p className='mb-0 d-flex align-items-center gap-1'><span className='pt-3px'><BsTelephone  size={18} color='teal'/></span>+8801878586303</p>
          </div>
        </div>
        <div className="mobile_menu ">
          <span><AiOutlineMenu size={22}  onClick={menuToggle}/></span>
        </div>
      </div>
      </Container>
      
      
    </header>
  )
}

export default Header