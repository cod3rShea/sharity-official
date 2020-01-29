import React from "react";

function Select(props) {
    return (
        <div className="form-group">
        <select className="form-control" {...props}>
            <option value="Storage Requirements">Storage Requirements</option>
            <option value="Frozen">Frozen</option>
            <option value="no">Refrigerator</option>
            <option value="no">Dry</option>
            <option value="no">Canned</option>
            <option value="no">Fresh Produce</option>
            <option value="no">Prepared Food</option>
        </select>
        </div>
    );
}

export default Select;