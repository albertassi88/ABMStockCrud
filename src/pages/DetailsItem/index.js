import React from "react";
import { useNavigate } from "react-router-dom";


export default function DetailsItem(props) {
    const {name} = props;
    console.log(name)
    return (
        <p>Details</p>
    );
}