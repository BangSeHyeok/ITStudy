import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

export const Nav = () => {
    const [show, setShow] = useState(false)
    const [searchValue, setSearchValue] = useState("");

   const navigate = useNavigate();

    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.screenY > 50){
            setShow(true);
        }
        else{
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll",()=>{})
      }
    }, [])
    
    const handleChange = (e) =>{
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
    }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
        <img
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            className='nav__logo'
            onClick={()  => window.location.reload()}
        />
        <input value={searchValue} onChange={handleChange}
        className="nav__input"
        placeholder='검색'
        type="text"
        />
        <img
            alt='User logged'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            className='nav__avatar'
      />
    </nav>
  )
}
//rfac