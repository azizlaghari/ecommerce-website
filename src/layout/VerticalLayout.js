import { Layout } from 'antd'

// import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
// import { useSelector } from 'react-redux'

// import WhiteLogo from '../assets/Logo.png'
// import BlueLogo from '../assets/blueLogo.png'
// import MainMenu from './MainMenu'
// import { toggleTheme } from '../redux'

import HeaderPage from '../components/HeaderPage'
// import { Dropdown, Space } from 'antd';

const VerticalLayout = ({ children }) => {
  // const dispatch = useDispatch()
  const { Header, Content } = Layout
  // const theme = useSelector((state) => state.theme.theme)

  return (
    <div className='v-layout'>
      <Layout>
        {/* <Sider
          trigger={null}
          collapsible
          width={220}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: 'var(--sidebar)',
            boxShadow: 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
          }}
        >
          <div className='company-logo'>
            {theme === 'light' ? (
              <img src={BlueLogo} alt='logo' />
            ) : (
              <img src={WhiteLogo} alt='logo' />
            )}
          </div>
          <MainMenu active={active} />
        </Sider> */}
        <Layout className='site-layout' style={{ marginLeft: 0 }}>
          <Header className='mainHeader'>
            <h1>LOGO</h1>
            <HeaderPage />

            <h3 className='company-title'></h3>

            {/* <Switch
              className='themeSwitch'
              defaultChecked={theme === 'light' ? false : true}
              checkedChildren={<MdDarkMode style={{ fontSize: '20px', marginRight: '5px' }} />}
              unCheckedChildren={
                <MdOutlineDarkMode style={{ fontSize: '20px', marginLeft: '5px' }} />
              }
              onChange={() => dispatch(toggleTheme())}
            /> */}
          </Header>
          <Content className='main-content'>{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default VerticalLayout
