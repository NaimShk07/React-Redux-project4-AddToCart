import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
   const num = 1;
   return (
      <nav>
         <h2>Logo Here</h2>
         <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>
               <FiShoppingBag />
               {num < 1 ? <></> : <p>{num}</p>}
            </Link>
         </div>
      </nav>
   );
};

export default Header;