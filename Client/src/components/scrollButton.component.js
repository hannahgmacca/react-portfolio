import React, {useState} from 'react';
import {ReactComponent as Arrow } from '../images/arrow-up.svg';
import styled from 'styled-components';
  
const SButton = styled.div`
   position: fixed; 
   right: 10px;
   bottom: 40px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   display: block;
`

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <SButton>
     <Arrow onClick={scrollToTop} 
     style={{display: visible ? 'block' : 'none'}}/>
    </SButton>
  );
}
  
export default ScrollButton;