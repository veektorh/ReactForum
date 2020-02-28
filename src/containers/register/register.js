import React from 'react';
import GenericLoginComponent from '../../components/others/GenericLogin';
import { toast } from 'react-toastify';


const  Register = () => {

    const clickHandler = () => {
        toast("this is a toast message")
    }


    return (

        <GenericLoginComponent alternate_page_text="Already have an account ?" alternate_page_link = "/login" alternate_page_link_text="Login" clickHandler={clickHandler}  form_title="Register"/>
    )
}

export default Register