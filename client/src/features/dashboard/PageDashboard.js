import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function PageDashboard(props){
    return (<Fragment>
            <h2>Page Dashboard</h2>
            <hr />
            <section>
                <Link to="/create-new-page" className="btn btn-success">New Page</Link>
                <Link to="/update-page" className="btn btn-primary">Update Page</Link>
                <Link to="/delete-page" className="btn btn-danger">Delete Page</Link>
            </section>
    </Fragment>)
}