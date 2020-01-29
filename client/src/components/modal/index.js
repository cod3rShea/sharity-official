import React from "react"

function Modal(props) {
    return (
        <div>
            <div>
                <h1>Modal headline{props.children}</h1>
            </div>
        </div>
    );
}
export default Modal;
