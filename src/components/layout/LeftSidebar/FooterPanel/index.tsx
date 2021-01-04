import React from 'react';
import { Link } from 'react-router-dom';

const FooterPanel: React.FC = () => {
  return (
    <div className="legal">
      <div className="copyright">
        &copy; {new Date().getFullYear()} <Link to="/">Academic Bridge</Link>.
        </div>
      <div className="version">
        <b>Version: </b> 0.0.1
        </div>
    </div>
  )
}
export default FooterPanel;
