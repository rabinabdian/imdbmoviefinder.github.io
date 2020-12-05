import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (

        <div className="header sticky-top">

            <nav className="navbar navbar-expand-lg navbar-light py-3 px-5 homenav">
                <img src="/images/star-big.png" width="40" height="40"
                    className="d-inline-block align-top mr-3" alt="" loading="lazy" />
                <Link className="navbar-brand text-light" to="/">Movie Finder App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link ml-5 text-light" to="/">Home <span className="sr-only"></span></Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input style={{width:'220px'}} className="form-control mr-sm-2" type="search" placeholder="Search a movie by name" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>

        </div>
    );
}

export default Header;