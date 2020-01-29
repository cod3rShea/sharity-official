import React from "react";

function TextArea(props) {
    return (
        <div className="form-group">
        <textarea className="form-control" rows="4" {...props} />
        </div>
    );
}

export default TextArea;