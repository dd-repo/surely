import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount() {
        $('[data-toggle="popup"]').on("click", function() {
            var a = $("#" + $(this).data("target"));
            a.is(":hidden") ? a.delay(600).show(0, function() {
                $("body").addClass("popup-open")
            }) : (a.fadeOut(200), $("body").removeClass("popup-open"))
        })
    }
    render() {
        return (
            <section id="contact" class="section bg-black visible">
                <div class="section-wrapper">
                    <div class="contact-content v-center">
                        <h1>Contact <strong>Subely!</strong></h1>
                        <ul class="contact-list">
                            <li><a href="javascript:void(0);" class="icon icon-circle icon-green" data-toggle="popup" data-target="mail-popup"><i class="fa fa-envelope"></i></a></li>
                            <li><a href="javascript:void(0);" class="icon icon-circle icon-orange" data-toggle="popup" data-target="phone-popup"><i class="fa fa-phone"></i></a></li>
                            <li><a href="skype:subely?chat" class="icon icon-circle icon-skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <ul class="social-media list-inline text-center">
                            <li class="instagram"><a href="https://www.instagram.com/subelyofficial/" tagrget="_blank" title="Follow on Instagram"><i class="fa fa-instagram"></i>Follow on <strong>Instagram</strong></a></li>
                        </ul>
                    </div>
                </div>
                <div id="mail-popup" class="contact-popup">
                    <div class="popup-wrapper">
                        <div class="contact-popup-content">
                            <h2>Write to us at <a href="mailto:contact@subely.com" class="text-green">contact@subely.com</a> or send a message via <strong>contact form</strong></h2>
                            <h3><i class="fa fa-clock-o text-green icon-before"></i>We will <strong>get back to you</strong> within <strong>24/48h</strong>!</h3>
                            <form id="contact-form" class="validate-form form-horizontal">
                                <div class="form-group">
                                    <div class="col-sm-4 control-label">Name:</div>
                                    <div class="col-sm-8"><input id="name" name="name" class="form-control input-short" required/></div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-4 control-label">Address e-mail:</div>
                                    <div class="col-sm-8"><input id="email" name="email" class="form-control input-short" required/></div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-4 control-label">Subject:</div>
                                    <div class="col-sm-8"><input id="subject" name="subject" class="form-control"/></div>
                                </div>
                                <div class="form-group form-message">
                                    <textarea id="message" name="message" class="textarea-message" placeholder="Tap your message here..." required></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-4 col-sm-push-4"><button id="contact-form-submit" class="btn btn-lg btn-submit btn-green"><span><strong>Send message!</strong></span><i class="ti-email"></i></button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="close-popup" data-toggle="popup" data-target="mail-popup">
                        <i class="ti-close"></i>
                    </a>
                </div>
                <div id="phone-popup" class="contact-popup">
                    <div class="popup-wrapper">
                        <div class="contact-popup-content v-center">
                            <a href="tel:+48514219823" class="icon icon-circle icon-lg icon-orange">
                                <i class="fa fa-phone"></i>
                            </a>
                            <h4>Give us a <strong>Ring</strong>!</h4>
                            <div class="phone-number">
                                <span>+1</span>
                                <span>3</span>
                                <span>2</span>
                                <span>3</span>
                                <span>8</span>
                                <span>1</span>
                                <span>3</span>
                                <span>8</span>
                                <span>2</span>
                                <span>4</span>
                                <span>9</span>
                            </div>
                            <div class="phone-keys">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="close-popup" data-toggle="popup" data-target="phone-popup">
                        <i class="ti-close"></i>
                    </a>
                </div>
            </section>
        );
    }
}
export default Contact;
