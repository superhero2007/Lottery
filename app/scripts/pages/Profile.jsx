import React from 'react';
import LeftSideBar from 'components/LeftSideBar';
import SubHeader from 'components/SubHeader';

export default class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      tab: 1,
    };
  }

  activeStep = (index) => {
    const { step } = this.state;
    if (step > index) {
      this.setState({ step: index });
    }
  };

  activeTab = (tab) => {
    this.setState({ tab });
  };

  prev = () => {
    this.setState(state => ({
      step: state.step - 1,
    }));
  };

  next = () => {
    this.setState(state => ({
      step: state.step + 1,
    }));
  };

  submit = () => {
  };

  render() {
    const { step, tab } = this.state;
    return (
      <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

        <button type="button" className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
          <i className="la la-close" />
        </button>

        <LeftSideBar />

        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <SubHeader title="Settings" />

          <div className="m-content">
            <div className="m-portlet m-portlet--full-height">

              <div className="m-portlet__head">
                <div className="m-portlet__head-caption">
                  <div className="m-portlet__head-title">
                    <h3 className="m-portlet__head-text">
                      Profile
                    </h3>
                  </div>
                </div>
              </div>
              <div className={`m-wizard m-wizard--2 m-wizard--success${step === 1 ? ' m-wizard--step-first' : ''}${step === 2 ? ' m-wizard--step-between' : ''}${step === 3 ? ' m-wizard--step-last' : ''}`} id="m_wizard">
                <div className="m-portlet__padding-x" />
                <div className="m-wizard__head m-portlet__padding-x">

                  <div className="m-wizard__progress">
                    <div className="progress">
                      <div
                        className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                  <div className="m-wizard__nav">
                    <div className="m-wizard__steps">
                      <div className={`m-wizard__step${step === 1 ? ' m-wizard__step--current' : ' m-wizard__step--done'}`}>
                        <div className="m-wizard__step-number cursor" onClick={() => this.activeStep(1)}>
                          <span>
                            <i className="fa flaticon-placeholder" />
                          </span>
                        </div>
                        <div className="m-wizard__step-info">
                          <div className="m-wizard__step-title">
                            1. Client Information
                          </div>
                          <div className="m-wizard__step-desc">
                            Lorem ipsum doler amet elit<br />
                            sed eiusmod tempors
                          </div>
                        </div>
                      </div>
                      <div className={`m-wizard__step${step === 2 ? ' m-wizard__step--current' : ''}${step === 3 ? ' m-wizard__step--done' : ''}`}>
                        <div className="m-wizard__step-number cursor" onClick={() => this.activeStep(2)}>
                          <span>
                            <i className="fa  flaticon-layers" />
                          </span>
                        </div>
                        <div className="m-wizard__step-info">
                          <div className="m-wizard__step-title">
                            2. Account Setup
                          </div>
                          <div className="m-wizard__step-desc">
                            Lorem ipsum doler amet elit<br />
                            sed eiusmod tempors
                          </div>
                        </div>
                      </div>
                      <div className={`m-wizard__step${step === 3 ? ' m-wizard__step--current' : ''}`}>
                        <div className="m-wizard__step-number cursor" onClick={() => this.activeStep(3)}>
                          <span>
                            <i className="fa  flaticon-layers" />
                          </span>
                        </div>
                        <div className="m-wizard__step-info">
                          <div className="m-wizard__step-title">
                            3. Confirmation
                          </div>
                          <div className="m-wizard__step-desc">
                            Lorem ipsum doler amet elit<br />
                            sed eiusmod tempors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="m-wizard__form">
                  <form className="m-form m-form--label-align-left- m-form--state-" id="m_form">
                    <div className="m-portlet__body">
                      <div className={`m-wizard__form-step${step === 1 ? ' m-wizard__form-step--current' : ' m-wizard__form-step--done'}`} id="m_wizard_form_step_1">
                        <div className="row">
                          <div className="col-xl-8 offset-xl-2">
                            <div className="m-form__section m-form__section--first">
                              <div className="m-form__heading">
                                <h3 className="m-form__heading-title">Client Details</h3>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">* Name:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <input
                                    type="text" name="name" className="form-control m-input" placeholder=""
                                    defaultValue="Nick Stone"
                                  />
                                  <span className="m-form__help">Please enter your first and last names</span>
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">* Email:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <input
                                    type="email" name="email" className="form-control m-input" placeholder=""
                                    defaultValue="nick.stone@gmail.com"
                                  />
                                  <span className="m-form__help">We'll never share your email with anyone else</span>
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">* Phone</span>
                                <div className="col-xl-9 col-lg-9">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="la la-phone" />
                                      </span>
                                    </div>
                                    <input
                                      type="text" name="phone" className="form-control m-input" placeholder=""
                                      defaultValue="1-541-754-3010"
                                    />
                                  </div>
                                  <span className="m-form__help">Enter your valid phone in US phone format. E.g: 1-541-754-3010</span>
                                </div>
                              </div>
                            </div>
                            <div className="m-separator m-separator--dashed m-separator--lg" />
                            <div className="m-form__section">
                              <div className="m-form__heading">
                                <h3 className="m-form__heading-title">
                                  Mailing Address
                                </h3>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">Address:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <input
                                    type="text" name="address1" className="form-control m-input" placeholder=""
                                    defaultValue="Headquarters 1120 N Street Sacramento 916-654-5266"
                                  />
                                  <span className="m-form__help">Street address, P.O. box, company name, c/o</span>
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">City:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <input
                                    type="text" name="city" className="form-control m-input" placeholder=""
                                    defaultValue="Polo Alto"
                                  />
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">State:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <input
                                    type="text" name="state" className="form-control m-input" placeholder=""
                                    defaultValue="California"
                                  />
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <span className="col-xl-3 col-lg-3 col-form-label">Country:</span>
                                <div className="col-xl-9 col-lg-9">
                                  <select name="country" className="form-control m-input" defaultValue="US">
                                    <option value="">Select</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia, Plurinational State of</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Côte d'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Réunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.S.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`m-wizard__form-step${step === 2 ? ' m-wizard__form-step--current' : ''}${step === 3 ? ' m-wizard__form-step--done' : ''}`} id="m_wizard_form_step_2">
                        <div className="row">
                          <div className="col-xl-8 offset-xl-2">
                            <div className="m-form__section m-form__section--first">
                              <div className="m-form__heading">
                                <h3 className="m-form__heading-title">Account Details</h3>
                              </div>
                              <div className="form-group m-form__group row">
                                <div className="col-lg-12">
                                  <span className="form-control-label">* URL:</span>
                                  <input
                                    type="url" name="account_url" className="form-control m-input" placeholder=""
                                    defaultValue="http://sinortech.vertoffice.com"
                                  />
                                  <span className="m-form__help">Please enter your preferred URL to your dashboard</span>
                                </div>
                              </div>
                              <div className="form-group m-form__group row">
                                <div className="col-lg-6 m-form__group-sub">
                                  <span className="form-control-label">* Username:</span>
                                  <input
                                    type="text" name="account_username" className="form-control m-input" placeholder=""
                                    defaultValue="nick.stone"
                                  />
                                  <span className="m-form__help">Your username to login to your dashboard</span>
                                </div>
                                <div className="col-lg-6 m-form__group-sub">
                                  <span className="form-control-label">* Password:</span>
                                  <input
                                    type="password" name="account_password" className="form-control m-input" placeholder=""
                                    defaultValue="qwerty"
                                  />
                                  <span className="m-form__help">Please use letters and at least one number and symbol</span>
                                </div>
                              </div>
                            </div>
                            <div className="m-separator m-separator--dashed m-separator--lg" />
                            <div className="m-form__section">
                              <div className="m-form__heading">
                                <h3 className="m-form__heading-title">Client Settings</h3>
                              </div>
                              <div className="form-group m-form__group row">
                                <div className="col-lg-6 m-form__group-sub">
                                  <span className="form-control-label">* User Group:</span>
                                  <div className="m-radio-inline">
                                    <div className="m-radio m-radio--solid m-radio--brand">
                                      <input type="radio" name="account_group" defaultChecked defaultValue="2" />
                                      Sales Person
                                      <span />
                                    </div>
                                    <div className="m-radio m-radio--solid m-radio--brand">
                                      <input type="radio" name="account_group" defaultValue="2" />
                                      Customer
                                      <span />
                                    </div>
                                  </div>
                                  <span className="m-form__help">Please select user group</span>
                                </div>
                                <div className="col-lg-6 m-form__group-sub">
                                  <span className="form-control-label">* Communications:</span>
                                  <div className="m-checkbox-inline">
                                    <div className="m-checkbox m-checkbox--solid m-checkbox--brand">
                                      <input type="checkbox" name="account_communication[]" defaultChecked defaultValue="email" />
                                      Email
                                      <span />
                                    </div>
                                    <div className="m-checkbox m-checkbox--solid  m-checkbox--brand">
                                      <input type="checkbox" name="account_communication[]" defaultValue="sms" />
                                      SMS
                                      <span />
                                    </div>
                                    <div className="m-checkbox m-checkbox--solid  m-checkbox--brand">
                                      <input type="checkbox" name="account_communication[]" defaultValue="phone" />
                                      Phone
                                      <span />
                                    </div>
                                  </div>
                                  <span className="m-form__help">Please select user communication options</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`m-wizard__form-step${step === 3 ? ' m-wizard__form-step--current' : ''}`} id="m_wizard_form_step_3">
                        <div className="row">
                          <div className="col-xl-8 offset-xl-2">
                            <ul className="nav nav-tabs m-tabs-line--2x m-tabs-line m-tabs-line--danger" role="tablist">
                              <li className="nav-item m-tabs__item">
                                <button
                                  type="button" className={`nav-link m-tabs__link cursor${tab === 1 ? ' active' : ''}`} data-toggle="tab" role="tab"
                                  onClick={() => this.activeTab(1)}
                                >1. Client Information
                                </button>
                              </li>
                              <li className="nav-item m-tabs__item">
                                <button
                                  type="button" className={`nav-link m-tabs__link cursor${tab === 2 ? ' active' : ''}`} data-toggle="tab" role="tab"
                                  onClick={() => this.activeTab(2)}
                                >2. Account Setup
                                </button>
                              </li>
                              <li className="nav-item m-tabs__item">
                                <button
                                  type="button" className={`nav-link m-tabs__link cursor${tab === 3 ? ' active' : ''}`} data-toggle="tab" role="tab"
                                  onClick={() => this.activeTab(3)}
                                >3. Billing Setup
                                </button>
                              </li>
                            </ul>
                            <div className="tab-content m--margin-top-40">
                              <div className={`tab-pane${tab === 1 ? ' active' : ''}`} id="m_form_confirm_1" role="tabpanel">
                                <div className="m-form__section m-form__section--first">
                                  <div className="m-form__heading">
                                    <h4 className="m-form__heading-title">Client Details</h4>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Name:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">Nick Stone</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Email:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">nick.stone@gmail.com</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Phone</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">+206-78-55034890</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="m-separator m-separator--dashed m-separator--lg" />
                                <div className="m-form__section">
                                  <div className="m-form__heading">
                                    <h4 className="m-form__heading-title">
                                      Corresponding Address
                                      <i data-toggle="m-tooltip" data-width="auto" className="m-form__heading-help-icon flaticon-info" title="Some help text goes here" />
                                    </h4>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Address:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">Headquarters 1120 N Street Sacramento 916-654-5266</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">City:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">Polo Alto</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">State:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">California</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Country:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">USA</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`tab-pane${tab === 2 ? ' active' : ''}`} id="m_form_confirm_2" role="tabpanel">
                                <div className="m-form__section m-form__section--first">
                                  <div className="m-form__heading">
                                    <h4 className="m-form__heading-title">Account Details</h4>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">URL:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">sinortech.vertoffice.com</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Username:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">sinortech.admin</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Password:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">*********</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="m-separator m-separator--dashed m-separator--lg" />
                                <div className="m-form__section">
                                  <div className="m-form__heading">
                                    <h4 className="m-form__heading-title">Account Details</h4>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">URL:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">sinortech.vertoffice.com</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Username:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">sinortech.admin</span>
                                    </div>
                                  </div>
                                  <div className="form-group m-form__group m-form__group--sm row">
                                    <span className="col-xl-3 col-lg-3 col-form-label">Password:</span>
                                    <div className="col-xl-9 col-lg-9">
                                      <span className="m-form__control-static">*********</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`tab-pane${tab === 3 ? ' active' : ''}`} id="m_form_confirm_3" role="tabpanel">
                                <div className="m-form__section m-form__section--first">
                                  <div className="m-form__section">
                                    <div className="m-form__heading">
                                      <h4 className="m-form__heading-title">Client Settings</h4>
                                    </div>
                                    <div className="form-group m-form__group m-form__group--sm row">
                                      <span className="col-xl-3 col-lg-3 col-form-label">User Group:</span>
                                      <div className="col-xl-9 col-lg-9">
                                        <span className="m-form__control-static">Customer</span>
                                      </div>
                                    </div>
                                    <div className="form-group m-form__group m-form__group--sm row">
                                      <span className="col-xl-3 col-lg-3 col-form-label">Communications:</span>
                                      <div className="col-xl-9 col-lg-9">
                                        <span className="m-form__control-static">Phone, Email</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="m-separator m-separator--dashed m-separator--lg" />
                            <div className="form-group m-form__group m-form__group--sm row">
                              <div className="col-xl-12">
                                <div className="m-checkbox-inline">
                                  <div className="m-checkbox m-checkbox--solid m-checkbox--brand">
                                    <input type="checkbox" name="accept" defaultValue="1" />
                                    Click here to indicate that you have read and agree to the terms presented in the Terms and Conditions agreement
                                    <span />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-portlet__foot m-portlet__foot--fit m--margin-top-40">
                      <div className="m-form__actions">
                        <div className="row">
                          <div className="col-lg-2" />
                          <div className="col-lg-4 m--align-left">
                            <div className="btn btn-secondary m-btn m-btn--custom m-btn--icon" data-wizard-action="prev" onClick={this.prev}>
                              <span>
                                <i className="la la-arrow-left" />
                                &nbsp;&nbsp;
                                <span>Back</span>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 m--align-right">
                            <div className="btn btn-primary m-btn m-btn--custom m-btn--icon" data-wizard-action="submit" onClick={this.submit}>
                              <span>
                                <i className="la la-check" />
                                &nbsp;&nbsp;
                                <span>Submit</span>
                              </span>
                            </div>
                            <div className="btn btn-warning m-btn m-btn--custom m-btn--icon" data-wizard-action="next" onClick={this.next}>
                              <span>
                                <span>Save & Continue</span>
                                &nbsp;&nbsp;
                                <i className="la la-arrow-right" />
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-2" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
