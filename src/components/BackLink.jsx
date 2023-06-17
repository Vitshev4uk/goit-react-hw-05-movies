import { Link } from "react-router-dom";

function BackLink({children, to}) {
    return (
        <>
            <Link to={to}>{ children }</Link>
        </>
    )
}

export default BackLink;