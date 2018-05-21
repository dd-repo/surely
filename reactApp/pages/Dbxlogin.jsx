import React, { Component } from 'react';

class Dbxlogin extends Component {
    render() {
        return (
            <div class="fixed_top">
                <section id="dbxlogin" class="section bg-black dark">
                    <div class="bg-image animated infinite zooming" style={{backgroundImage: 'url("themes/assets/img/photos/bg-sign-in.jpg")'}}>
                    </div>
                    <div class="section-wrapper">
                        <div class="container">
                            <div class="login-content">
                                <span class="icon-lg text-blue"><i class="fa fa-unlock-alt"></i></span>
                                <h1><strong>Login</strong> to your sub!</h1>
                                <form action="http://test.dev/test.php" id="login-form" class="validate-form" method="POST">
                                    <input type="hidden" name="u" value="ed47dbfe167d906f2bc46a01b"/>
                                    <input type="hidden" name="id" value="24ac8a22ad"/>
                                    <div class="col-sm-4 col-md-offset-4 form-group">
                                        <a id="auth-login" href="auth/login.php" class="btn btn-md btn-submit btn-blue">
                                            <span><strong>Login</strong></span><i class="ti-arrow-right"></i>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Dbxlogin;
