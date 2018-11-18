import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ({setCurrentPage, currentPage}) => {
    return(
        <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${currentPage === 0 && 'active'}`} to="/" onClick ={()=> setCurrentPage(0)}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${currentPage === 1 && 'active'}`} to="/graph" onClick ={()=> setCurrentPage(1)}
                        >
                            Graphical Representation
                        </Link>
                    </li>
                </ul>
        </div>
    )
};

export default NavBar;
