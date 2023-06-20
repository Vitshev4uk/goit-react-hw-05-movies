import { Link } from "react-router-dom";
import css from '../css/BackLink.module.css';
import PropTypes from 'prop-types';

function BackLink({children, to}) {
    return (
        <>
            <Link  className={css.Link} to={to}>{ children }</Link>
        </>
    )
}

BackLink.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

export default BackLink;