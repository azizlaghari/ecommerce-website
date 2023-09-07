import React from 'react'
import { Dropdown, Space, Tooltip } from 'antd'
// icons
import { CgProfile } from 'react-icons/cg'
import SearchDrawer from './Drawer/SearchDrawer'
import SearchNone from './Drawer/SearchNone'
import CartEmptyDrawer from './Drawer/CartEmptyDrawer'
import FavoritesDrawer from './Drawer/FavoritesDrawer'
import CartFullDrawer1 from './Drawer/CartFullDrawer1'
import FavoriteProductsDrawer from './Drawer/FavoriteProductsDrawer'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const items = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        3rd menu item
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        4th menu item
      </a>
    ),
  },
]

const HeaderPage = () => {
  const text = <p>Your Cart(0)</p>;

  return (
    <div className='HeaderPage' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

      <div className='dropdowns'>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Print Wear
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Safe Clothes
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Work Clothes
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Sports Clothes
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Theme & Events
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space className='spaceBetween'>
              Print Gadgets
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Customers Service
              <MdOutlineArrowDropDown />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* Icons */}
      <div className='rightIcons'>
        <SearchNone />
        <SearchDrawer />
        <FavoritesDrawer />
        <FavoriteProductsDrawer />
        <Tooltip placement="bottom" title={text}>
          <button style={{all: "unset"}}> <CartEmptyDrawer /></button>
        </Tooltip>
        <CartFullDrawer1 />
        <CgProfile />
      </div>
    </div>
  )
}

export default HeaderPage
