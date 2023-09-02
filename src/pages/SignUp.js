import { Checkbox, Col, Row, Tabs } from 'antd'
import React, { useState } from 'react'
import arrow_right from '../assets/arrow_right.png'
import signUpIMG from '../assets/signUpIMG.png'
import logo from '../assets/LOGO.png'
import signInIMG from '../assets/signInIMG.png'
import googleIcon from '../assets/googleIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import ForgotModal from '../components/modal/ForgotModal'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';



const SignUp = () => {
    const { TabPane } = Tabs // Destructuring TabPane from Tabs
    const [tabValue, setTabValue] = useState('tab2')
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    const onTabChange = (key) => {
        console.log(key);
        setTabValue(key)
    };

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            <div className='sign-up'>
                <Row className='rowMobile' gutter={[30, 30]}>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <img className='logo' src={logo} />
                        <Tabs className='signup-main-tab' defaultActiveKey='tab2' onChange={onTabChange}>
                            <TabPane
                                tab={
                                    <div className='tabHeading'>
                                        <p>Sign in</p>
                                    </div>
                                }
                                key={'tab1'}
                            >
                                <div className='signUpContainer'>
                                    <h4>Welcome back!</h4>
                                    <p>
                                        I am a returning customer.
                                    </p>
                                    <form>

                                        <label htmlFor='email'>
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            placeholder='Enter full Email address'
                                            type='text'
                                            id='email'
                                            name='email'
                                        />

                                        <label htmlFor='password'>
                                            Password <span>*</span>
                                        </label>
                                        <div className='passwordEye'>
                                            <div onClick={togglePassword} className='eyeOpenIcon'>{passwordType === "password" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</div>
                                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder='Enter the Password' id='password' name='password' />
                                        </div>
                                        {/* <input placeholder='Enter the Password' type='text' id='password' name='password' /> */}
                                    </form>
                                    <div className='btns'>
                                        <button className='greenBTN'>Submit<img src={arrow_right} /></button>
                                        <div><ForgotModal /></div>
                                    </div>
                                    <span className='orText'>
                                        <p><span>or continue with</span></p>
                                    </span>
                                    <div className='btns socialBTNs'>
                                        <button className='socialBTN'> <img src={googleIcon} /> Sign in with Google</button>
                                        <button className='socialBTN'> <img src={facebookIcon} />Sign in with Facebook</button>
                                    </div>
                                    <div className='copyRight'>© 2023 Profilewear.se</div>
                                </div>
                            </TabPane>
                            <TabPane
                                tab={
                                    <div className='tabHeading'>
                                        <p>Register account</p>
                                    </div>
                                }
                                key={'tab2'}
                            >
                                <div className='signUpContainer'>
                                    <h4>New user! Create new account</h4>
                                    <p>
                                        By creating an account, you can shop faster, see your order status and access
                                        your order history.
                                    </p>
                                    <form>
                                        <label htmlFor='name'>
                                            Name <span>*</span>
                                        </label>
                                        <input placeholder='Enter your ful name' type='text' id='name' name='name' />
                                        <label htmlFor='company'>
                                            Company <span>*</span>
                                        </label>
                                        <input
                                            placeholder='Enter your Company Name'
                                            type='text'
                                            id='companyName' name='companyName'
                                        />
                                        <label htmlFor='email'>
                                            Email <span>*</span>
                                        </label>
                                        <input
                                            placeholder='Enter full Email address'
                                            type='text'
                                            id='email'
                                            name='email'
                                        />
                                        <label htmlFor='telly'>
                                            Telephone <span>*</span>
                                        </label>
                                        <input placeholder='Enter phone no.' type='number' id='phone' name='phoen' />
                                        <label htmlFor='password'>
                                            Password <span>*</span>
                                        </label>

                                        <div className='passwordEye'>
                                            <div onClick={togglePassword} className='eyeOpenIcon'>{passwordType === "password" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</div>
                                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder='Enter the Password' id='password' name='password' />
                                        </div>
                                    </form>
                                    <div className='signUpCheckBoxes'>
                                        <Checkbox onChange={onChange}>I want to subscribe to the newsletter for latest offers and updates</Checkbox>
                                        <Checkbox onChange={onChange}>I have read and accept the <span>General Terms & Conditions</span></Checkbox>
                                    </div>
                                    <button className='greenBTN' style={{ marginTop: '1rem' }}>Submit<img src={arrow_right} /></button>
                                    <div className='copyRight'>© 2023 Profilewear.se</div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <div className='signUpIMG'>
                            {
                                tabValue == 'tab2' ? <img src={signUpIMG} /> : <img src={signInIMG} />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SignUp
