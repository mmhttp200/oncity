import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Footer(props){
    return (
        <Fragment><Link to="/about">About</Link> | <a href="#top">To top</a></Fragment>
    )
}