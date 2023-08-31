import React, { useState } from 'react'
import { Drawer } from 'antd'
import arrow_right from '../../assets/arrow_right.png'

// img
import { LiaTimesSolid } from 'react-icons/lia'

const AddressDrawer = () => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <div onClick={showDrawer}>
                <button>Add new address <img src={arrow_right} /></button>
            </div>
            <Drawer
                className='addressDrawer-main'
                // title='What are you looking for?'
                placement='right'
                onClose={onClose}
                open={open}
                headerStyle={{ display: 'none' }}
            >
                <div className='addressTitleClose'>
                    <p>Add new address</p>
                    <span><LiaTimesSolid onClick={onClose} /></span>
                </div>
                <div className='addressDrawer'>
                    <form>
                        <label htmlFor='contactName'>
                            Contact Name <span>*</span>
                        </label>
                        <input placeholder='Enter your ful name' type='text' id='cname' name='cname' />
                        <label htmlFor='phone'>
                            Phone <span>*</span>
                        </label>
                        <input
                            placeholder='Enter your contact no'
                            type='text'
                            id='phone'
                            name='phone'
                        />
                        <label htmlFor='address'>
                            Address <span>*</span>
                        </label>
                        <input
                            placeholder='Enter full address'
                            type='text'
                            id='address'
                            name='address'
                        />
                        <label htmlFor='city'>
                            City <span>*</span>
                        </label>
                        <select name="city" id="city" placeholder='Select the city'>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Pashawer">Pashawer</option>
                        </select>
                        <label htmlFor='zipcode'>
                            Zipcode <span>*</span>
                        </label>
                        <input
                            placeholder='Enter zipcode'
                            type='number'
                            id='zipcode'
                            name='zipcode'
                        />
                        <button className='greenBTN' style={{marginTop: '2rem'}}>Save Address</button>
                    </form>
                </div>
            </Drawer>
        </>
    )
}
export default AddressDrawer
