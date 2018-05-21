import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Team_member extends Component {
    render() {
        return (
            <div class="fixed_top">
                <section id="team_member" class="section visible mainContent">
                    <div class="section-wrapper">
                        <div class="team-member cover columns">
                            <div class="image-wrap column-3">
                                <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                <div class="imageContent">
                                    <div class="text">
                                        <h3 class="title">John Doe</h3>
                                        <p class="subtitle uppercase">Creative director / designer</p>
                                        <p class="description">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
                                        <div class="buttons">
                                            <Link to={'/single_team_member'} url_data="single-team-member" class="btn btn-danger" onClick = {this.updateState}>
                                                Know more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="image-wrap column-3">
                                <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                <div class="imageContent">
                                    <div class="text">
                                        <h3 class="title">John Doe</h3>
                                        <p class="subtitle uppercase">Creative director / designer</p>
                                        <p class="description">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
                                        <div class="buttons">
                                            <Link to={'/single_team_member'} url_data="single-team-member" class="btn btn-danger" onClick = {this.updateState}>
                                                Know more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="image-wrap column-3">
                                <div class="imageSpace"><img src="themes/assets/img/girl.jpg" alt="John Doe"/></div>
                                <div class="imageContent">
                                    <div class="text">
                                        <h3 class="title">John Doe</h3>
                                        <p class="subtitle uppercase">Creative director / designer</p>
                                        <p class="description">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
                                        <div class="buttons">
                                            <Link to={'/single_team_member'} url_data="single-team-member" class="btn btn-danger" onClick = {this.updateState}>
                                                Know more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    updateState() {
        $("body").removeAttr('class').attr('class','site-loaded '+this.url_data);
    }
}
export default Team_member;
