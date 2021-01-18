import React from 'react';
import './_sidebar.scss';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
}
from "react-icons/md";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth.action';
import { Link } from 'react-router-dom';

const Sidebar = ({sidebar,handleToggleSidebar}) => {

    const dispatch= useDispatch();
  
    const logouthandler = () =>{
         dispatch(logout());
    }


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
         onClick={() => handleToggleSidebar(false)} >
            
            <li>
                <MdHome size={23} />
                <Link to="/">
                   &nbsp;&nbsp;&nbsp;
                  Home
                </Link>
               
            </li>
           

          <Link to="/feed/subscriptions">
                  
           <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
          
          
          </Link>

            <li>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Libary</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't know</span>
            </li>

            <hr/>
            <li onClick={logouthandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>

          <hr/>
        </nav>
    )
}

export default Sidebar;
