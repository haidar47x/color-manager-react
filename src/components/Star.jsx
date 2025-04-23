import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect = f => f }) {
    return (
        <FaStar className="star" onClick={onSelect} color={(selected ? "red" : "grey")} />
    );
}

export default Star;
