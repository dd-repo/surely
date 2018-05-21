import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="home" class="section dark bg-black visible">
                    <div class="bg-swiper">
                        <div class="bg-image animated infinite zooming" style={{backgroundImage: 'url("themes/assets/img/photos/bg-home01.jpg")'}}></div>
                        <div class="bg-image animated infinite zooming" style={{backgroundImage: 'url("themes/assets/img/photos/bg-home02.jpg")'}}></div>
                        <div class="bg-image animated infinite zooming" style={{backgroundImage: 'url("themes/assets/img/photos/bg-home03.jpg")'}}></div>
                    </div>
                    <div class="section-wrapper">
                       <div class="home-wrapper">
                          <div class="home-middle v-center">
                             <div class="text-swiper" id="swiper_wrapper_loop">
                                <div class="swiper-wrapper">
                                   <h1 class="swiper-slide"> The <strong> Future </strong> of web hosting</h1>
                                   <h1 class="swiper-slide"><strong> Disrupting </strong> the industry</h1>
                                   <h1 class="swiper-slide">Secured with <strong> Artificial Intelegance </strong></h1>
                                   <h1 class="swiper-slide"><strong> Changing </strong> the internet</h1>
                                   <h1 class="swiper-slide"><strong> Changing </strong> the world</h1>
                                </div>
                             </div>
                          </div>
                          <div class="home-bottom container">
                             <div class="home-buttons row">
                                <div class="col-lg-3 col-lg-push-3 col-md-4 col-md-push-2 col-sm-6">
                                  <Link to={'/portfolio'} data-change-view="true" class="btn btn-block btn-home btn-home-main">
                                    <span>View <strong>Hosting Options</strong>!</span><i class="ti-arrow-right"></i>
                                  </Link>
                                </div>
                                <div class="col-lg-3 col-lg-push-3 col-md-4 col-md-push-2 col-sm-6">
                                  <Link to={'/contact'} data-change-view="true" class="btn btn-block btn-home btn-link">
                                    <span> Contact <strong>Us </strong></span><i class="ti-arrow-right"></i>
                                  </Link>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;
