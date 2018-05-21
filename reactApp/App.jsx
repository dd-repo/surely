import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Team_member from './pages/Team_member.jsx';
import Single_team_member from './pages/Single_team_member.jsx';
import Contact from './pages/Contact.jsx';
import Dbxlogin from './pages/Dbxlogin.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <header id="header">
                        <div class="header-wrapper">
                            <Link to={'/'} class="logo" url_data='home'></Link>
                            <nav id="main-nav">
                                <ul class="nav nav-horizontal nav-main">
                                    <li><Link to={'/about'} url_data='about'>About</Link></li>
                                    <li><Link to={'/services'} url_data=''>Services</Link></li>
                                    <li><Link to={'/portfolio'} url_data='portfolio'>Hosting Options</Link></li>
                                    <li><Link to={'/team_member'} url_data="team-member">Team Member</Link></li>
                                    <li><Link to={'/contact'} url_data="contact">Contact &amp; Support</Link></li>
                                </ul>
                            </nav>
                            <Link to={'/dbxlogin'} id="header-login-btn" class="left-header-btn" data-change-view="true"> Login<i class="fa fa-angle-right"></i></Link>
                            <div class="typing">
                                <span id="typing-text" class="typing-text"></span>
                            </div>
                            <h1 id="mobile-title"></h1>
                        </div>
                    </header>
                    <div id="content">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/about' component={About} />
                            <Route path='/services' component={Services} />
                            <Route path='/portfolio' component={Portfolio} />
                            <Route path='/team_member' component={Team_member} />
                            <Route path='/single_team_member' component={Single_team_member} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/dbxlogin' component={Dbxlogin} />
                       </Switch>
                    </div>
                    <div id="ajax-modal"></div>
                    <div id="loading-overlay"></div>
                    <button id="mobile-nav-toggle" class="icon icon-sm icon-circle" data-target="mobile-nav">
                        <i class="ti-menu"></i><i class="ti-close"></i>
                    </button>
                    <nav id="mobile-nav">
                    </nav>
                    <div id="tmp"></div>
                </div>
            </Router>
        );
    }
}
export default App;
