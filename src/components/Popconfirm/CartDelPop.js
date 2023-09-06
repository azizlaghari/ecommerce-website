import React from 'react';
import { message, Popconfirm } from 'antd';
import deleteIcon from '../../assets/delete.png'

const confirm = (e) => {
    console.log(e);
    message.success('Remove');
};
const cancel = (e) => {
    console.log(e);
    message.error('Move to favorites');
};
const CartDelPop = () => (
    <div className='CartDelPop-main'>
        <Popconfirm
            className='deletePopConfirmation'
            title="Delete from shopping cart"
            description="Are you sure you want to delete this item from cart?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Remove"
            cancelText="Move to favorites"
        >
            <img src={deleteIcon} />
        </Popconfirm>
    </div>
);
export default CartDelPop;