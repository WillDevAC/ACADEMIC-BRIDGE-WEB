import React from 'react';
import { Link } from 'react-router-dom';
import { useUserSaved } from '../../../context/contextAuth'

const TopNavbar: React.FC = () => {
    const { setUserSaved } = useUserSaved();
    const onLogout = () => {
        console.log('call logout and redirect ....');
        localStorage.setItem('userSaved', 'false');
        setUserSaved(false);
    }

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar-collapse"
                        aria-expanded="false"></Link>
                    <Link to="#" className="bars"></Link>
                    <Link className="navbar-brand" to="/">Academic Bridge</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="pull-right"><Link to="#" onClick={onLogout} ><i className="material-icons">input</i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNavbar;