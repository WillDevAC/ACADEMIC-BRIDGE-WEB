import React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const BrowserUsage: React.FC<Props> = (props) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="header">
                    <h2>BROWSER USAGE</h2>
                    <ul className="header-dropdown m-r--5">
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">more_vert</i>
                            </Link>
                            <ul className="dropdown-menu pull-right">
                                <li><Link to="#">Action</Link></li>
                                <li><Link to="#">Another action</Link></li>
                                <li><Link to="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="body">
                    <div id="donut_chart" className="dashboard-donut-chart"></div>
                </div>
            </div>
        </div>
    )
}

export default BrowserUsage;
