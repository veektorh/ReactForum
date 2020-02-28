import React from 'react'
import {toast} from 'react-toastify'
import GenericLoginComponent from '../../components/others/GenericLogin';

const Login = () => {

    const clickHandler = () => {
        toast("this is a toast message")
    }

    return (
        <GenericLoginComponent alternate_page_text="Dont have an account ?" alternate_page_link = "/register" alternate_page_link_text="Register" clickHandler={clickHandler}  form_title="Login"/>
    )
}

export default (Login)
