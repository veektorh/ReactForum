import React, {useState,useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import loginCss from '../../css/login.module.css'
import Notification from '../others/notification'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'

const GenericLoginComponent = (props) => {
    

    
    return (
        <div className={loginCss.loginForm}>
            <h1 className={"title is-3 " + loginCss.center}>{props.form_title}</h1>
            <form className="columns">
                <div className="container column is-6 is-offset-3">

                    <div className="card ">
                        <div className="card-content">
                            <div class="field">
                                <label class="label">Username </label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="" />
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" placeholder="" />
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button onClick={props.clickHandler} className="button is-fullwidth is-primary" type="button">
                                        Submit
                            </button>
                                </div>
                            </div>

                            <span>{props.alternate_page_text} <Link to={props.alternate_page_link}>{props.alternate_page_link_text}</Link></span>
                            <span class="is-pulled-right"><Link to="/home">Home</Link></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GenericLoginComponent
