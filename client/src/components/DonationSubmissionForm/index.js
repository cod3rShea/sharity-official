import React from 'react'


export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
} 

export function TextArea(props) {
    return (
        <div className="form-group">
        <textarea className="form-control" rows="4" {...props} />
        </div>
    );
}

export function Select(props) {
    return (
        <div className="form-group">
        <select className="form-control" {...props}>
            <option value="Frozen">Frozen</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Dry">Dry</option>
            <option value="Canned">Canned</option>
            <option value="Fresh Produce">Fresh Produce</option>
            <option value="Prepared Food">Prepared Food</option>
        </select>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
        </button>
    );
}