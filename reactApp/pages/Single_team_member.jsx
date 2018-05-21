import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Single_team_member extends Component {
    render() {
        return (
            <div class="fixed_top">
                <section id="single_team_member" class="section visible mainContent">
                    <div class="section-wrapper">
                        <div class="team-member cover columns">
                            <div class="image-wrap column-10">
                                <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                <div class="imageContent">
                                    <div class="text">
                                        <h3 class="title">John Doe</h3>
                                        <p class="subtitle uppercase">Creative director / designer</p>
                                        <p class="description">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
                                    </div>
                                    <ul class="profile-with-skills">
                                        <li class="first">
                                            Abc Studio
                                            <h4>Illustration, Design, Animation</h4>
                                        </li>
                                        <li>
                                            Media Box Inc.
                                            <h4>Layers Created</h4>
                                        </li>
                                        <li>
                                            The New York Times
                                            <h4>Web Design, Front-End Developer</h4>
                                        </li>
                                        <li>
                                            Hindustan Times
                                            <h4>Hindustan Times</h4>
                                        </li>
                                        <li class="last">
                                            Mashable
                                            <h4>Motion, Design, Photo</h4>
                                        </li>
                                        <div class="clearfix"></div>
                                    </ul>
                                    <ul class="key-skills">
                                        <li>Illustration</li>
                                        <li>Design</li>
                                        <li>Animation</li>
                                        <li>Illustration</li>
                                        <li>Design</li>
                                        <li>Animation</li>
                                        <li>Illustration</li>
                                        <li>Design</li>
                                        <li>Animation</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="image-wrap column-2">
                                <Link to={'/single_team_member'} class="side first active">
                                    <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                    <div class="imageContent">
                                        <div class="text">
                                            <h3 class="title">John Doe</h3>
                                            <p class="subtitle uppercase">Creative director / designer</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={'/single_team_member'} class="side">
                                    <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                    <div class="imageContent">
                                        <div class="text">
                                            <h3 class="title">John Doe</h3>
                                            <p class="subtitle uppercase">Creative director / designer</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={'/single_team_member'} class="side">
                                    <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                    <div class="imageContent">
                                        <div class="text">
                                            <h3 class="title">John Doe</h3>
                                            <p class="subtitle uppercase">Creative director / designer</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Single_team_member;
