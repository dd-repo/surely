import React, { Component } from 'react';

class Portfolio extends Component {
    componentDidMount() {
        var a = $("#portfolio");
        if (a.length > 0) {
            var b = new Swiper(a, {
                speed: 800,
                paginationClickable: !0,
                direction: "vertical",
                keyboardControl: !0,
                mousewheelControl: !0,
                slidesPerView: 4,
                pagination: ".portfolio-pagination"
            });
            b.on("onSlideChangeStart", function(b) {
                slideUpdateView(a)
            })
        }

        var a = ($("#tmp"), $("#ajax-modal")),
            b = $("body"),
            c = $("#loading-overlay");
        $('[data-toggle="ajax-modal"]').on("click", function() {
            var d = $(this).attr("href");
            return b.addClass("loading"), c.fadeIn(200), a.load(d, function(e, f) {
                var g = $(this);
                console.log(d), g.waitForImages({
                    finished: function() {
                        a.show(0, function() {
                            c.fadeOut(200), b.addClass("ajax-modal-open").removeClass("loading")
                        }), console.log("Ajax Images Loaded!")
                    },
                    waitForAll: !0
                })
            }), !1
        }), $("body").delegate(".ajax-close", "click", function() {
            return $("body").removeClass("ajax-modal-open"), setTimeout(function() {
                a.hide(0)
            }, 400), window.scrollTo(0, 0), !1
        })
    }
    render() {
        return (
            <div>
                <section id="portfolio" class="section bg-black">
                    <div class="portfolio-bgs swiper-bgs">
                        <div class="bg-image dedisoft" data-bg="Dedisoft"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/restaumatic-bg.jpg")'}} data-bg="Restaumatic"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/catering-bg.jpg")' }} data-bg="Catering"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/medan-bg.jpg")' }} data-bg="Medan"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/scurri-bg.jpg")' }} data-bg="Scurri"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/rankingprzychodni-bg.jpg")' }} data-bg="RankingPrzychodni"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/maxflo-bg.jpg")' }} data-bg="MaxFlo"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/mojetajemnice-bg.jpg")' }} data-bg="MojeTajemnice"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/aminoexperts-bg.jpg")' }} data-bg="Aminoexperts"></div>
                        <div class="bg-image" style={{backgroundImage: 'url("themes/assets/img/projects/sandvalley-bg.jpg")' }} data-bg="SandValley"></div>
                    </div>
                    <div class="swiper-wrapper">
                        <div class="project-slide swiper-slide dark" data-title="Dedisoft" data-scheme="dark" data-color="blue" data-bg="Dedisoft">
                            <div class="content">
                                <h1>Dedisoft</h1>
                                <h3 class="text-muted">Online shop with software</h3>
                                <a href="themes/projects/pl/dedisoft.html" data-toggle="ajax-modal" class="btn btn-blue">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center left"><img src="themes/assets/img/projects/dedisoft-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide" data-title="Medan" data-scheme="light" data-color="blue" data-bg="Medan">
                            <div class="content">
                                <h1>Medan</h1>
                                <h3 class="text-muted">Shop with medical equipment</h3>
                                <a href="themes/projects/pl/medan.html" data-toggle="ajax-modal" class="btn btn-blue">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center"><img src="themes/assets/img/projects/medan-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Catering" data-scheme="dark" data-color="green" data-bg="Catering">
                            <div class="content">
                                <h1>Catering</h1>
                                <h3 class="text-muted">Online catering platform</h3>
                                <a href="themes/projects/pl/catering.html" data-toggle="ajax-modal" class="btn btn-green">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image bottom"><img src="themes/assets/img/projects/catering-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Scurri" data-scheme="dark" data-color="orange" data-bg="Scurri">
                            <div class="content">
                                <h1>Scurri</h1>
                                <h3 class="text-muted">Devlivery Management System</h3>
                                <a href="themes/projects/pl/scurri.html" data-toggle="ajax-modal" class="btn btn-orange">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center"><img src="themes/assets/img/projects/scurri-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide" data-title="Restaumatic" data-scheme="light" data-color="orange" data-bg="Restaumatic">
                            <div class="content">
                                <h1>Restaumatic</h1>
                                <h3 class="text-muted">Restaurant website template</h3>
                                <a href="themes/projects/pl/restaumatic.html" data-toggle="ajax-modal" class="btn btn-orange">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image bottom"><img src="themes/assets/img/projects/restaumatic-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Ranking Przychodni" data-scheme="dark" data-color="blue" data-bg="RankingPrzychodni">
                            <div class="content">
                                <h1>RankingPrzychodni.pl</h1>
                                <h3 class="text-muted">Hospitality Search Platform</h3>
                                <a href="themes/projects/en/rankingprzychodni.html" data-toggle="ajax-modal" class="btn btn-blue">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image bottom"><img src="themes/assets/img/projects/rankingprzychodni-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide" data-title="MaxFlo" data-scheme="light" data-color="orange" data-bg="MaxFlo">
                            <div class="content">
                                <h1>MaxFloRec</h1>
                                <h3 class="text-muted">Music publishers company</h3>
                                <a href="themes/projects/en/maxflo.html" data-toggle="ajax-modal" class="btn btn-orange">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center"><img src="themes/assets/img/projects/maxflo-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Sand Valley" data-scheme="dark" data-color="green" data-bg="SandValley">
                            <div class="content">
                                <h1>Sand Valley</h1>
                                <h3 class="text-muted">Golf &amp; Courting Club</h3>
                                <a href="themes/projects/en/sandvalley.html" data-toggle="ajax-modal" class="btn btn-green">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center"><img src="themes/assets/img/projects/sandvalley-main.jpg" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Moje Tajemnice" data-scheme="dark" data-color="blue" data-bg="MojeTajemnice">
                            <div class="content">
                                <h1>MojeTajemnice.pl</h1>
                                <h3 class="text-muted">Online diary platform</h3>
                                <a href="themes/projects/en/mojetajemnice.html" data-toggle="ajax-modal" class="btn btn-blue">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image center"><img src="themes/assets/img/projects/mojetajemnice-main.png" alt=""/></div>
                        </div>
                        <div class="project-slide swiper-slide dark" data-title="Aminoexperts" data-scheme="dark" data-color="blue" data-bg="Aminoexperts">
                            <div class="content">
                                <h1>Aminoexperts</h1>
                                <h3 class="text-muted">Supplement's producers</h3>
                                <a href="themes/projects/en/aminoexperts.html" data-toggle="ajax-modal" class="btn btn-blue">
                                    <span><strong>View</strong> more</span><i class="ti-arrow-down"></i>
                                </a>
                            </div>
                            <div class="image bottom"><img src="themes/assets/img/projects/aminoexperts-main.jpg" alt=""/></div>
                        </div>
                    </div>
                        <div class="vertical-pagination portfolio-pagination"></div>
                </section>
            </div>
        );
    }
}
export default Portfolio;
