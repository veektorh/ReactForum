import React from 'react'
import { withRouter } from 'react-router-dom'
import loginCss from '../../css/login.module.css'

const RegisterComponent = () => {
    return (
        <div className={loginCss.loginForm}> 
            <h1 className={"title is-3 " + loginCss.center}>Register</h1>
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
                                    <button className="button is-fullwidth is-primary" type="button">
                                        Submit
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterComponent
