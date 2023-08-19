import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import arrow_right from '../../assets/arrow_right.png'
// img
import manModalIMG from '../../assets/modalModel.png'

const SoftTshirtBox = () => {
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
            <Button className='SoftTshirtBoxBTN' onClick={showModal}>Read more<img src={arrow_right} />
            </Button>
            <Modal className='SoftTshirtBox-main' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modalContainer'>
                    <img src={manModalIMG} className='manModalIMG' />
                    <div className='rightTextModal'>
                        <h5 className='rightTextModal-heading'>Soft T-shirts</h5>
                        <h6 className='rightTextModal-subheading'>Soft T-shirts for pleasant comfort</h6>
                        <p className='rightTextModal-discp'>Are you looking for a soft t-shirt that is comfortable to wear? Here is a large selection of our soft t-shirts that give you the pleasant comfort that feels soft and gentle. We have several different models and a large selection of several different colors and soft textiles to suit your purpose.
                            <br />
                            If you really want the softest t-shirt available, of the highest quality possible, then Tee Jays is the right choice. Also add printing & profiling if desired, by adding the goods to the checkout and requesting a free quote from the shopping cart.</p>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default SoftTshirtBox;