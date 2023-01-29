import {React, useEffect} from "react";
import theperfecthoneyjar from '../../assets/theperfecthoneyjar.png';
import helloworldiamabbas from '../../assets/helloworldimabbas.png';
import './header.scss';

const Header = () => {
  useEffect(() => {
 
  }, []);
  
  return (
  <div className="header">
      <img className="perfecthoneyjar" src={theperfecthoneyjar} alt='the perfect honey jar' />
      <img className="helloworldimabbas"  src={helloworldiamabbas} style={{marginBottom: '3rem', marginLeft: '6rem'}}  alt='hello world' />
  </div>);
};

export default Header;
