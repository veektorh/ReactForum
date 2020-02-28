import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

const Nav = () => {
    const [state, setState] = useState({ navbar_class: "navbar-menu" });

    const NavBarClick = (e) => {
        let tmp = { ...state };
        if (tmp.navbar_class.indexOf("is-active") > 0) {
            setState({ ...state, navbar_class: "navbar-menu" });
        } else {
            setState({ ...state, navbar_class: "navbar-menu is-active" })
        }

    }
    const { navbar_class } = state;

    return (
        <div>



            <nav className="navbar forum" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" >
                            <h5 className="title is-5">ForumStack</h5>
                        </a>
                        <a role="button" onClick={NavBarClick} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>
                    <div id="navbarBasicExample" className={navbar_class}>
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
              </a>
                            <a className="navbar-item">
                                About
              </a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to="/register" className="button is-primary">
                                        <strong>Sign up</strong>
                                    </Link>

                                    <Link to="/login" className="button is-light">login</Link>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link"> Victor </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item"> Profile</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item"> Log out </a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Nav
