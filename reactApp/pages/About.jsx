import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div class="fixed_top">
                <section id="about" class="section visible mainContent">
                    <div class="section-wrapper">
                        <h1><span>Subely</span> is an certified design and hosting company.</h1>
                        <ul class="history">
                            <li class="first">
                                <i class="hroc hroc-technology"></i>
                                <h4>Founded</h4>
                                2012
                                <span class="about-stat-bottomtext">Lorem Ipsum is simply dummy text of the printing.</span>
                            </li>
                            <li>
                                <i class="hroc hroc-business"></i>
                                <h4>Successful Projects</h4>
                                12
                                <span class="about-stat-bottomtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry.</span>
                            </li>
                            <li>
                                <i class="hroc hroc-search"></i>
                                <h4>Clients</h4>
                                30
                                <span class="about-stat-bottomtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry.</span>
                            </li>
                            <li class="last">
                                <i class="hroc hroc-transport"></i>
                                <h4>Dedicated Server</h4>
                                22+
                                <span class="about-stat-bottomtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry.</span>
                            </li>
                        </ul>
                        <div class="buttons">
                            <Link to={'/services'} class="btn btn-primary">
                                Services
                            </Link>
                            <Link to={'/contact'} class="btn btn-danger">
                                Contact Subely
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;
