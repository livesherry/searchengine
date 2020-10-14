import Router from 'next/router'

export default class SettingsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            local : '',
            location: '',
            locationCode: ''
        }
    }
    componentDidMount(){
        this.setState({local: localStorage.getItem('lukallAutoSuggest')})
        this.setState({location: localStorage.getItem('lukallLocation')})
        this.setState({locationCode: localStorage.getItem('lukallLocationCode')})
    }
    selectLocation(e){
        const loc = e.target.value.split('||');
        localStorage.setItem('lukallLocationCode', loc[0]);
        localStorage.setItem('lukallLocation', loc[1]);
        localStorage.setItem('lukallManualLocation', 'true');
        Router.reload();
    }
    toggleAuto = () => {
        const auto = localStorage.getItem('lukallAutoSuggest');
        if(auto === null || auto === "false") {
            localStorage.setItem('lukallAutoSuggest', "true");
            this.setState({local: "true"});
        }else{
            localStorage.setItem('lukallAutoSuggest', "false");
            this.setState({local: "false"});
        }
    }

    render(){
        return (
            <>
            <div id="setting" class="pb-3"> 
                <div class="container-fluid">
                    <div class="row">
                         <div class="con-col-1">

                            </div>
                        <div class="con-col-2 padding-bottom-10">
                            <div class="setting-portion">
                            <h2 class="color-red-important">Settings</h2>
                            <hr></hr>
                            <form class="form-inline" role="form">
                                <div class="row-for-setting row-padding">
                                    <div class="col-md-5 text-middle col-5-setting">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey">Select Region</label>
                                    </div>
                                    <div class="col-md-7 col-5-setting">
                                        <select class="color-grey contact-input-border" id="sel1" onChange={this.selectLocation}>
                                            <option value="">Select Country</option>
                                                <option value={this.state.locationCode + "||" + this.state.location} selected>{this.state.location}</option>
                                                <option value="AR||Argentina">Argentina</option>
                                                <option value="AU||Australia">Australia</option>
                                                <option value="AT||Austria">Austria</option>
                                                <option value="BE||Belgium">Belgium</option>
                                                <option value="BR||Brazil">Brazil</option>
                                                <option value="CA||Canada">Canada</option>
                                                <option value="CL||Chile">Chile</option>
                                                <option value="DK||Denmark">Denmark</option>
                                                <option value="FI||Finland">Finland</option>
                                                <option value="FR||France">France</option>
                                                <option value="DE||Germany">Germany</option>
                                                <option value="HK||Hong Kong SAR">Hong Kong SAR</option>
                                                <option value="IN||India">India</option>
                                                <option value="ID||Indonesia">Indonesia</option>
                                                <option value="IT||Italy">Italy</option>
                                                <option value="JP||Japan">Japan</option>
                                                <option value="KR||Korea">Korea</option>
                                                <option value="MY||Malaysia">Malaysia</option>
                                                <option value="MX||Mexico">Mexico</option>
                                                <option value="NL||Netherlands">Netherlands</option>
                                                <option value="NZ||New Zealand">New Zealand</option>
                                                <option value="NO||Norway">Norway</option>
                                                <option value="CN||People's Republic of China">People's Republic of China</option>
                                                <option value="PL||Poland">Poland</option>
                                                <option value="PT||Portugal">Portugal</option>
                                                <option value="PH||Republic of the Philippines">Republic of the Philippines</option>
                                                <option value="RU||Russia">Russia</option>
                                                <option value="SA||Saudi Arabia">Saudi Arabia</option>
                                                <option value="ZA||South Africa">South Africa</option>
                                                <option value="ES||Spain">Spain</option>
                                                <option value="SE||Sweden">Sweden</option>
                                                <option value="CH||Switzerland">Switzerland</option>
                                                <option value="TW||Taiwan">Taiwan</option>
                                                <option value="TR||Turkey">Turkey</option>
                                                <option value="GB||United Kingdom">United Kingdom</option>
                                                <option value="US||United States">United States</option>
                                            </select>
                                       </div>
                                </div>
                                <div class="row-for-setting row-padding">
                                    <div class="col-md-5 col-5-setting text-middle">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey ">Select Language</label>
                                    </div>
                                    <div class="col-md-7 col-5-setting">
                                        <select class="color-grey contact-input-border" id="sel1">
                                            <option value="Select Language">Select Language</option>
                                            <option value="English">English</option>
                                            <option value="Punjabi/Lahnda">Punjabi/Lahnda</option>
                                            <option value="Japanese">Japanese</option>
                                            <option value="Russian">Russian</option>
                                            <option value="Bengali">Bengali</option>
                                            <option value="Portuguese">Portuguese</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Chinese">Chinese</option>
                                        </select>
                                    </div>
                                </div>
                              
                                <div class=" row-for-setting row-padding">
                                    <div class="col-md-5 col-6-setting text-middle">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey">New Tab</label>
                                    </div>
                                    <div class="col-md-7 col-3-setting right-aligned">
                                        <label class="switch">
                                            <input type="checkbox"></input>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class=" row-for-setting row-padding">
                                    <div class="col-md-5 text-middle col-6-setting">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey">Auto Suggestions</label>
                                    </div>
                                    <div class="col-md-7  col-3-setting right-aligned">
                                        <label class="switch">
                                            <input type="checkbox" onClick={this.toggleAuto} checked = {typeof window !== 'undefined' ? localStorage.getItem('lukallAutoSuggest') === "true" ? "checked" : null : null}></input>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row-for-setting row-padding">
                                    <div class="col-md-5 text-middle col-6-setting">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey">Personalized Search Results</label>
                                    </div>
                                    <div class="col-md-7 col-3-setting right-aligned">
                                        <label class="switch">
                                            <input type="checkbox"></input>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class=" row-for-setting row-padding">
                                    <div class="col-md-5 text-middle col-6-setting">
                                        <label for="email2" class="mb-2 mr-sm-2 color-grey">Notifications</label>
                                    </div>
                                    <div class="col-md-7 col-3-setting right-aligned">
                                        <label class="switch">
                                            <input type="checkbox"></input>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="btn-center">
                                    <br></br>

                                    <button type="button" data-toggle="modal" data-target="#myModal-partner"  class="ads-btn-submit">Save</button> 
                                    <button type="button" class="ads-btn-cancel">Reset</button> 
                                </div>
                            </form>
                        </div>
                        </div>
                        <div class="col-md-5 custom-md-4">
                        </div>
                    </div>
                </div>

            </div>
            <div class="container">
            <div class="help-section text-right">
             <a href="help.html" class="help">Help</a>
            </div>
        </div>
            </>
        );
    }
}