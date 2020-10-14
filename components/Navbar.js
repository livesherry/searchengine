import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lukallSafeSearchesMade : '0',
        }
    }

    toggleShow(id) {
        document.getElementById(id).classList.toggle("show");
        // document.getElementById("myDropdown").classList.toggle("show");
    }
    toggleHide(id){
        document.getElementById(id).classList.remove("show");
    }

    componentDidMount(){
        if (typeof window !== 'undefinded'){
            this.setState({lukallSafeSearchesMade : localStorage.getItem('lukallSafeSearchesMade')});
        }
    }

    render(){
        
        return (
            <div id="ads-result">
            <nav className="navbar navbar-expand nav-bg" id="home-v3nav">
                <div className="navbar-collapse collapse">
                <div className="container-fluid mobile-header">
                                <div className="row mt-sm-3">
                                    <div className="col-sm-2 col-lg-2 logo-width col-6 " id="first-top">
                                        <a className="navbar-brand"></a>
                                    </div>    
                                    <div className="col-md-6 col-sm-6 col-lg-6 col-12" id="second-top">
                                    {/* <!-- Deleted --> */}
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-lg-3 text-center hidden-xs">
                                {/* <!-- deleted --> */}
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-6 ads-icon-width" id="third-top">    
                                        <ul className="navbar-nav ml-auto justify-content-end padding-top-icon-20">
                                            <div className="hidden-sm hidden-lg hidden-md">
    
                                                <button type="button" onClick={() => this.toggleShow('myModalMob')} className="mb-modal" data-toggle="modal" data-target="#myModalMob">
                                                    <i className="fas fa-bell"></i>
                                                </button>
                                                <div className="modal fade" id="myModalMob" role="dialog">
                                                    <div className="modal-dialog">
    
                                                        {/* <!-- Modal content--> */}
                                                        <OutsideClickHandler
                                                        onOutsideClick={() => this.toggleHide('myModalMob')}
                                                    >
                                                            <div className="modal-content">
        
                                                                <div className="modal-body">
        
                                                                    <a href="#"> <p className="mb-safe-search-fade">{this.state.lukallSafeSearchesMade} Safe searches made</p></a>
        
                                                                    {/* <a href="#" onClick={() => this.toggleShow('myModal-UnsafeSearch')}> <p className="mb-safe-search-fade">Unsafe searches reported</p></a> */}
                                                                </div>
        
                                                            </div>
                                                        </OutsideClickHandler>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden-sm hidden-lg hidden-md">
    
                                                <button type="button" onClick={() => this.toggleShow('myModal1')} className="mb-modal" data-toggle="modal" data-target="#myModal1">
                                                    <div className="fas fa-th opacity"></div>
                                                </button>
                                                
                                                <div className="modal fade" id="myModal1" role="dialog">
                                                    <div className="modal-dialog modal-dialog1">
    
                                                        {/* <!-- Modal content--> */}
                                                        <OutsideClickHandler
                                                    onOutsideClick={() => this.toggleHide('myModal1')}
                                                >
                                                        <div className="modal-content">
    
                                                            <div className="modal-body">
                                                                <div className="mb-theme">
                                                                    <p className="change-theme-p">Change Theme</p>
                                                                    <a href="" className=""><img src="images/skyblue.png" className="theme-icon-mb"></img></a> 
    
                                                                    <a href="" className=""><img src="images/green-theme.png" className="theme-icon-mb"></img></a>
    
                                                                </div>
    
                                                            <Link href='/settings'><a href="#"> <p className="mb-safe-search-fade">More Settings</p></a></Link>
                                                            <a href="#"> <p className="mb-safe-search-fade">About us</p></a>
                                                            <a href="#"> <p className="mb-safe-search-fade">Adversting</p></a>
                                                            <a href="https://safesearchengine.com/partner-us"> <p className="mb-safe-search-fade">partner with us</p></a>
                                                                <a href="#"> <p className="mb-safe-search-fade">Blog</p></a>
                                                                <a href="#"> <p className="mb-safe-search-fade">Help</p></a>
                                                            </div>
    
                                                        </div>
                                                        </OutsideClickHandler>
    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden-xs">
    
    
                                                <div className="dropdown1">
                                                    <button className="dropbtn1 fa fa-bell"></button>
                                                    <div className="dropdown-content1">
                                                        <a href="#">{this.state.lukallSafeSearchesMade} Safe searches made</a>
                                                        {/* <a href="#" onClick={() => this.toggleShow('myModal-UnsafeSearch')} data-toggle="modal" data-target="#myModal-UnsafeSearch">Unsafe searches reported</a> */}
    
                                                    </div>
                                                </div>
                                            </div>
    
                                            <li className="nav-item">
                                                <div className="dropdown hidden-xs">
                                                <OutsideClickHandler
                                                    onOutsideClick={() => this.toggleHide('myDropdown')}
                                                > 
                                                    <div className=""><button onClick={() => this.toggleShow('myDropdown')} className="fas fa-th dropbtn opacity" title="menu" alt="menu"></button></div>
                                                    <div id="myDropdown" className="dropdown-content">
                                                        <div className="content-in">
                                                        <div className="divided-effect">
                                                        <p><a href="#">Make default search engine</a></p>
                                                        <p><a href="https://safesearchengine.com/partner-us"><strong>Partner with us</strong></a></p>
                                                        </div>
    
                                                        <div className="themes">
                                                        <div className="divided-effect">
                                                            {/* <p><a href="#">Select your theme</a></p>
                                                            
                                                            <div className="social-media-icons"> 
                                                                
                                                                <p> <a href="" className="padd-0"><img src="images/skyblue.png" className="theme-icon"></img></a>&nbsp;<a href="" className="padd-0"><img src="images/green-theme.png" className="theme-icon"></img></a></p>
                                                            
                                                            </div> */}
                                                            
                                                            <Link href='/settings'><p><a href="#">More setting</a></p></Link>
    
                                                            </div>
                                                            <div className="divided-effect">
                                                            <div className="side-nav-content">
                                                                <p><a href="https://safesearchengine.com/about-us/" className="padding-5">About us</a></p>
                                                                <p><a href="#" className="padding-5">Advertising</a></p>
                                                            <p> <a href="#" className="padding-5">Privacy</a></p>
                                                                <p><a href="#" className="padding-5">Terms</a></p>
                                                            </div>
                                                        </div>
                                                            <div className="divided-effect">
                                                            <div className="side-nav-content">
                                                                <p><a href="https://safesearchengine.com/blogs/" className="padding-5">Blog</a></p>
                                                                <p><a href="https://safesearchengine.com/help/" className="padding-5">Help</a></p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    </div>
                                                    </OutsideClickHandler>
                                                </div>
    
                                            </li>
                                        </ul>
                                    </div>
                                </div>    
                            </div> 
                    </div>
                    <div className="hidden-lg hidden-md hidden-sm"></div>     
            </nav>
            <div className="modal fade z-index" id="myModal-UnsafeSearch">
            <div className="modal-dialog modal-unsafesearch modal-dialog-centered">
                <OutsideClickHandler
                    onOutsideClick={() => this.toggleHide('myModal-UnsafeSearch')}
                >
                <div className="modal-content unsafe-bg">

                    {/* <!-- Modal Header --> */}
                    <div className="padding-30">

                        <form>
                            <h5 className="modal-title help-heading modal-font-weight" >Why do you considered it unsafe?*</h5>
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio1" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio1"> &nbsp;&nbsp;This is vulgar or sexually explicit</label>
                            </div> 
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio2" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio2"> &nbsp;&nbsp;This is hateful, racist or offensive</label>
                            </div> 
                            <div className="space"></div>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio3" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio3"> &nbsp;&nbsp;This is harmful, dangerous or violent</label>
                            </div> 
                            <div className="space"></div>

                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="customRadio4" name="example1" value="customEx"></input>
                                <label className="custom-control-label" htmlFor="customRadio4"> &nbsp;&nbsp;This is misleading or inaccurate</label>
                            </div> 
                            <div className="space"></div>
                            <div className="space"></div>
                            <h5 className="modal-title help-heading modal-font-weight"> &nbsp;&nbsp;Comments or Suggestions<i className="color-grey modal-font-weight">(Optional)</i></h5>

                            <input type="text" className="form-control suggest-style" placeholder="Type your Comments or Suggestions here" />
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <div className="space"></div>
                            <center>


                                <button type="button" className="btn btn-red" data-toggle="modal" onClick={() => this.toggleShow('myModalsend-report')} data-target="#myModalsend-report">Send</button> <button onClick={() => this.toggleHide('myModal-UnsafeSearch')} type="button" className="btn btn-cancel" data-dismiss="modal">Cancel</button>
                            </center>


                        </form>


                    </div>



                    <div className="popup-footer text-center color-grey imp-footer-style">
                        <small><sup>*</sup>The data you provide helps improve Lukall.</small>
                    </div>
                </div>
                </OutsideClickHandler>
            </div>
            
        </div>
        
        <div className="modal fade z-index" id="myModalsend-report" role="dialog">
            <div className="modal-dialog modal-dialog-partner">
                <div className="modal-content partner-content">

                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">

                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <OutsideClickHandler
                        onOutsideClick={() => this.toggleHide('myModalsend-report')}
                    >
                    <div className="modal-body">
                        <img src="images/smile-1.png" className="smile-img" alt=""/>
                        <p className="modal-title">Thanks for your feedback! </p>
                        <div className="space"></div>
                        <p className="modal-title">Your responses help us to improve the Lukall experience. </p>
                    </div>
                    </OutsideClickHandler>
                    {/* <!-- Modal footer --> */}


                </div>
            </div>
        </div>
        </div>
        );
    }
}
      

