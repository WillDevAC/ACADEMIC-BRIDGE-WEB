import React from 'react';
import { Link } from 'react-router-dom';


const MainMenu: React.FC = () =>{
  return (
    <div className="menu">
        <ul className="list">
          <li className="header">MODULES</li>
          <li className="active">
            <Link to="/" className=" waves-effect waves-block">
              <i className="material-icons">home</i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">widgets</i>
              <span>1 - Marketing</span>
            </Link>            
            <ul className="ml-menu">
              <li>
                <Link to="#" className="menu-toggle">
                  <span>I - Registrations</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block"><strong>1 - Leads</strong></Link>
                  </li>
                  <li>
                    <Link to="/Editlead" className=" waves-effect waves-block">2 - Interested Groups</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">3 - Leads Sources</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">4 - Adverstising Campaigns</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">5 - Series</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">6 - Facebook Forms</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">7 - Message Templates</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">8 - Sequences</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">9 - Sales Steps</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="menu-toggle">
                  <span>II - Operations</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block"><strong>1 - Delegate</strong></Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">2 - Import</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">3 - Communications</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="menu-toggle">
                  <span>III - Reports</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">1 - Leads Reports</Link>
                  </li>
                  <li>
                    <Link to="/leads" className=" waves-effect waves-block">2 - Leads Charts</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">text_fields</i>
              <span>2 - Invoice</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Invoices</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">layers</i>
              <span>3 - Sales</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Sales</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">swap_calls</i>
              <span>4 - Logistic</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Logistic</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">assignment</i>
              <span>5 - Product</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Product</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">view_list</i>
              <span>6 - Finance</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Finance</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">perm_media</i>
              <span>7 - Support</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Support</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">content_copy</i>
              <span>8 - Secretary</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Secretary</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">pie_chart</i>
              <span>9 - Academic</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/leads">Academic</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">swap_calls</i>
              <span>0 - Management</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="/">Users</Link>
              </li>
            </ul>
          </li>          
          {/* <li>
            <Link to="#" className="menu-toggle">
              <i className="material-icons">trending_down</i>
              <span>Multi Level Menu</span>
            </Link>
            <ul className="ml-menu">
              <li>
                <Link to="#">
                  <span>Menu Item</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>Menu Item - 2</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="menu-toggle">
                  <span>Level - 2</span>
                </Link>
                <ul className="ml-menu">
                  <li>
                    <Link to="#">
                      <span>Menu Item</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="menu-toggle">
                      <span>Level - 3</span>
                    </Link>
                    <ul className="ml-menu">
                      <li>
                        <Link to="#">
                          <span>Level - 4</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
  )
}

export default MainMenu;
