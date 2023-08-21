import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import '../styles/components/HeaderPage.css'
// icons
import { BiHeart } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import SearchDrawer from './Drawer/SearchDrawer'
import SearchNone from './Drawer/SearchNone'

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
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
]

const HeaderPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div className='dropdowns'>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='dropdownLink'>
            <Space>
              Print Wear
              <DownOutlined />
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
              <DownOutlined />
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
              <DownOutlined />
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
              <DownOutlined />
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
              <DownOutlined />
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
              <DownOutlined />
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
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      {/* Icons */}
      <div className='rightIcons'>
        <SearchNone/>
        <SearchDrawer />
        {/* <BiSearch /> */}
        <BiHeart />
        <AiOutlineShoppingCart />
        <CgProfile />
      </div>
    </div>
  )
}

export default HeaderPage
