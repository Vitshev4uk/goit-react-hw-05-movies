import { Link } from "react-router-dom";
import css from '../css/BackLink.module.css';

function BackLink({children, to}) {
    return (
        <>
            <Link  className={css.Link} to={to}>{ children }</Link>
        </>
    )
}

export default BackLink;