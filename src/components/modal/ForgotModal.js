import React, { useState } from 'react';
import { Modal } from 'antd';
import arrow_right from '../../assets/arrow_right.png'

const ForgotModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <button  className='forgotBTN' onClick={showModal}>Forgot Password?</button>
            <div >
                <Modal  className='forgotModal-main' footer={''} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='ForgotModal'>
                        <h4>Forgot your password?</h4>
                        <p>Enter the email address associated with the account. Click Send to have your password emailed to you.</p>
                        <form>
                            <label htmlFor='email'>
                                Email ID <span>*</span>
                            </label>
                            <input
                                placeholder='Enter full Email ID'
                                type='text'
                                id='email'
                                name='email'
                            />
                        </form>
                        <button className='greenBTN'>Continue <img src={arrow_right} /></button>
                    </div>
                </Modal>
            </div>
        </>
    );
};
export default ForgotModal;