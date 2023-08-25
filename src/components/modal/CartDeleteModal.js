import React, { useState } from 'react';
import { Modal } from 'antd';
import deleteIcon from '../../assets/delete.png'

const CartDeleteModal = () => {
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
            <img src={deleteIcon} type="primary" onClick={showModal}>
            </img>
            <Modal className='deleteModal' title="Delete from shopping cart" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modalContainer'>
                    <p>Are you sure you want to delete this item from cart?</p>
                    <div className='deleteModalBTN'>
                        <button className='deleteModalBTN1 cursor'>Move to favorites</button>
                        <button className='deleteModalBTN2 cursor'>Remove</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default CartDeleteModal;