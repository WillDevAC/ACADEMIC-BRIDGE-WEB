import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LeftSidebar from '../components/layout/LeftSidebar'
import RightSidebar from '../components/layout/RightSidebar'
import SearchBar from '../components/layout/SearchBar'
import TopNavbar from '../components/layout/TopNavbar'
import Home from '../pages/__PageHome';
import EditLead from '../pages/__PageEditLead/index';

const MainRouter: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <div className="overlay" />
                <SearchBar />
                <TopNavbar />
                <section>
                    <LeftSidebar />
                    <RightSidebar />
                </section>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Editlead' exact component={EditLead} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default MainRouter;