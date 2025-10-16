import React, { useState, useEffect } from 'react'
import { Layout, Drawer } from 'antd'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
import { useSidebar } from '../contexts/SidebarContext'

const { Content } = Layout

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { collapsed } = useSidebar()

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1200)
    }
    
    checkDeviceType()
    window.addEventListener('resize', checkDeviceType)
    
    return () => window.removeEventListener('resize', checkDeviceType)
  }, [])

  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  // 移动端布局
  if (isMobile) {
    return (
      <Layout style={{ 
        minHeight: '100vh', 
        background: 'var(--background-color)', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Header onMenuClick={() => setDrawerVisible(true)} />
        <Content style={{ 
          margin: '12px 8px',
          padding: 16,
          background: 'var(--card-background)',
          borderRadius: 12,
          flex: 1,
          boxShadow: 'var(--shadow)',
          transition: 'all 0.3s ease',
          overflow: 'auto',
          minHeight: 'calc(100vh - 120px)'
        }}>
          {children}
        </Content>
        <Footer />
        
        <Drawer
          title="导航菜单"
          placement="left"
          onClose={handleDrawerClose}
          open={drawerVisible}
          width={280}
          styles={{
            body: { padding: 0 },
            header: { background: 'var(--card-background)', borderBottom: '1px solid var(--border-color)' }
          }}
        >
          <Sidebar />
        </Drawer>
      </Layout>
    )
  }

  // 平板端布局
  if (isTablet) {
    return (
      <Layout style={{ 
        minHeight: '100vh', 
        background: 'var(--background-color)', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <Layout 
            className="main-content"
            style={{ 
              marginLeft: collapsed ? '80px' : '200px', 
              transition: 'margin-left 0.2s ease', 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              minWidth: 0,
              width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)'
            }}>
            <Header />
            <Content style={{ 
              margin: '20px',
              padding: 20,
              background: 'var(--card-background)',
              borderRadius: 12,
              flex: 1,
              boxShadow: 'var(--shadow)',
              transition: 'all 0.3s ease',
              overflow: 'auto',
              width: 'calc(100% - 40px)'
            }}>
              {children}
            </Content>
          </Layout>
        </div>
        <Footer />
      </Layout>
    )
  }

  return (
    <Layout style={{ minHeight: '100vh', background: 'var(--background-color)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Layout 
          className="main-content"
          style={{ 
            marginLeft: collapsed ? '80px' : '200px', 
            transition: 'margin-left 0.2s ease', 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            minWidth: 0, // 防止内容溢出
            width: collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)' // 动态计算宽度
          }}>
          <Header />
          <Content style={{ 
            margin: '24px 16px',
            padding: 24,
            background: 'var(--card-background)',
            borderRadius: 8,
            flex: 1,
            boxShadow: 'var(--shadow)',
            transition: 'all 0.3s ease',
            overflow: 'auto', // 允许内容滚动
            width: 'calc(100% - 32px)' // 减去margin
          }}>
            {children}
          </Content>
        </Layout>
      </div>
      <Footer />
    </Layout>
  )
}

export default ResponsiveLayout
