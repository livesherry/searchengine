export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="home-v3">
            <div  class="home-v3-footer footer-relative">
                <div class="container-fluid">
                    <div class="row dark-white">
                        <div class="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-xs">
                            <p><span class="padding-right">© 2019 SafeSearchEngine</span></p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-md hidden-sm hidden-lg  padding-top-md download-app">
                            <a href="#" class=" sh-lt"><span><i class="fas fa-download"></i> Download</span></a>
                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-10 text-center pad-btm">
                            <p class="font-upper">Share to make the world safer</p>
                            <a href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/facebook-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/whatsapp-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/twitter-icon.png"></img></a>
                            <a href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/linkedin-icon.png"></img></a>
                            {/* <a href="https://plus.google.com" class="soc" target="_blank"><img class="" src="/images/googleplus-icon.png"></img></a> */}
                            <a href="https://www.addtoany.com/add_to/google_gmail?linkurl=https%3A%2F%2Fsafesearchengine.com%2F&amp;linkname=" class="soc" target="_blank"><img class="" src="/images/gmail-icon.png"></img></a>
                            <div class="col-md-3 col-lg-3 col-sm-1 text-center self-aligned hidden-md hidden-sm hidden-lg hidden-xs padding-top-md">
                                <p><span class="padding-right">© 2019 SafeSearchEngine</span></p>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-1 self-aligned hidden-xs">
                            <div class="">
                                <a href="https://safesearchengine.com/partner-us"><span class="sh-lt"><i class="  fas fa-hands-helping ico-right"></i> Partner with us</span></a>   
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-1">

                        </div>
                        <div class="col-md-6 col-lg-6 col-sm-10 text-center">
                            <p><span class="hidden-lg hidden-sm hidden-md"><a href="#">© 2019 SafeSearchEngine</a> |</span> <a href="https://safesearchengine.com/privacy">Privacy Policy</a> | <a href="https://safesearchengine.com/terms">Terms and Conditions</a> | <a href="https://safesearchengine.com/contact-us">Contact Us</a></p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-sm-1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}