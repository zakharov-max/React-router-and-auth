import React from 'react';
import { Link } from 'react-router-dom';

    
export const Layout = props => {
    return (
        <>
            <header >

                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">Settings</Link>

                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className={"container "} >
            {props.children}
            </div>
            <footer>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">Settings</Link>

                            </li>
                        </ul>
                    </div>
                </nav>

            </footer>
        </>
    );
};

