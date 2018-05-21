import React, { Component } from 'react';

class Services extends Component {
    componentDidMount() {
        var a = $("#services");
        if (a.length > 0) {
            var b = new Swiper(a, {
                speed: 600,
                paginationClickable: !0,
                direction: "vertical",
                keyboardControl: !0,
                mousewheelControl: !0,
                mousewheelSensitivity: 3,
                slidesPerView: 1,
                pagination: ".services-pagination"
            });
            b.on("onSlideChangeStart", function(b) {
                slideUpdateView(a)
            }), $('*[data-target="next-service"]').on("click", function() {
                return b.slideNext(800), !1
            }), $('*[data-target="swipe-service"]').on("click", function() {
                var a = $(this).data("service");
                return b.slideTo(a, 800), !1
            })
        }
    }
    render() {
        return (
            <div>
                <section id="services" class="section bg-black">
                    <div class="services-bgs swiper-bgs">
                        <div class="bg-image websites" data-bg="1"></div>
                        <div class="bg-image development" data-bg="2"></div>
                        <div class="bg-image webdesign" data-bg="3"></div>
                        <div class="bg-image graphic" data-bg="4"></div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide service websites dark" data-scheme="dark" data-color="orange" data-bg="1">
                            <div class="container service-wrapper">
                                <div class="service-content">
                                    <span class="service-icon icon-websites">
                                        <span class="banner1"></span>
                                        <span class="text1"></span>
                                        <span class="text2"></span>
                                        <span class="banner2"></span>
                                    </span>
                                    <div class="service-txt">
                                        <h1>Securing Your Information with <strong>Artificail Inteligence</strong></h1>
                                        <p class="lead text-muted">Continualy Investigating Threats &amp; Attacks Across the Internet</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="slide-bottom scroll-down" data-target="next-service"></a>
                        </div>
                        <div class="swiper-slide service development" data-scheme="light" data-color="blue" data-bg="2">
                            <div class="container service-wrapper">
                                <div class="service-content">
                                    <span class="service-icon icon-development">
                                        <span class="key1"></span>
                                        <span class="key2"></span>
                                        <span class="key3"></span>
                                        <span class="key4"></span>
                                    </span>
                                    <div class="service-txt">
                                        <h1>Making it <strong>Simple </strong></h1>
                                        <p class="lead text-muted">Our new protocol makes FTP a thing of the past!</p>
                                    </div>
                                    <ul class="list-technologies">
                                      <li><span class="ftp"></span></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" class="slide-bottom scroll-down" data-target="next-service"></a>
                        </div>
                        <div class="swiper-slide service webdesign dark" data-scheme="dark" data-color="green" data-bg="3">
                            <div class="container service-wrapper">
                                <div class="service-content">

                                    <span class="service-icon icon-webdesign">
                                        <span class="banner"></span>
                                        <span class="box1"></span>
                                        <span class="box2"></span>
                                        <span class="box3"></span>
                                    </span>
                                    <div class="service-txt">
                                        <h1><strong>Designed</strong> to be Clean</h1>
                                        <p class="lead text-muted">Neat website &amp; panel desigs based on current trends.</p>
                                    </div>
                                    <ul class="list-technologies">
                                        <li><span class="photoshop"></span></li>
                                        <li><span class="illustrator"></span></li>
                                        <li><span class="html5"></span></li>
                                        <li><span class="css3"></span></li>
                                        <li><span class="jquery"></span></li>
                                        <li><span class="sass"></span></li>
                                        <li><span class="bootstrap"></span></li>
                                        <li><span class="angularjs"></span></li>
                                    </ul>

                                </div>
                            </div>
                            <a href="#" class="slide-bottom scroll-down" data-target="next-service"></a>
                        </div>
                        <div class="swiper-slide service graphic" data-scheme="light" data-color="orange" data-bg="4">
                            <div class="container service-wrapper">
                                <div class="service-content">
                                    <span class="service-icon icon-graphic">
                                    </span>
                                    <div class="service-txt">
                                        <h1><strong>Immediate</strong> Server Response </h1>
                                        <p class="lead text-muted">Once Linked, Files are Uploaded As Soon As Saved</p>
                                    </div>
                                    <ul class="list-technologies">
                                        <li><span class="photoshop"></span></li>
                                        <li><span class="illustrator"></span></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" class="slide-bottom btn btn-sm btn-orange" data-target="swipe-service" data-service="0">
                                <span><strong>Go to the top!</strong></span><i class="ti-arrow-up"></i>
                            </a>
                        </div>
                    </div>
                    <div class="vertical-pagination services-pagination"></div>
                </section>
            </div>
        );
    }
}
export default Services;
