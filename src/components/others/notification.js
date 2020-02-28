import React from 'react'

const Notification = (props) => {

    return (
        <div>
            <div class={"notification is-light " + props.type}>
                <button type="button" onClick={props.delete_handler} class="delete"></button>
                {props.message}
            </div>
            <br/>
        </div>
        
    )
}

export default Notification