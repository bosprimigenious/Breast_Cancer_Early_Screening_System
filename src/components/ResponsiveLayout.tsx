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
  const [drawerVisible, setDrawerVisible] = useState(false)
  const { collapsed } = useSidebar()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleDrawerClose = () => {
    setDrawerVisible(false)
  }

  if (isMobile) {
    return (
      <Layout style={{ minHeight: '100vh', background: 'var(--background-color)', display: 'flex', flexDirection: 'column' }}>
        <Header onMenuClick={() => setDrawerVisible(true)} />
        <Content style={{ 
          margin: '16px 8px',
          padding: 16,
          background: 'var(--card-background)',
          borderRadius: 8,
          flex: 1,
          boxShadow: 'var(--shadow)',
          transition: 'all 0.3s ease'
        }}>
          {children}
        </Content>
        <Footer />
        
        <Drawer
          title="菜单"
          placement="left"
          onClose={handleDrawerClose}
          open={drawerVisible}
          width={280}
          bodyStyle={{ padding: 0 }}
        >
          <Sidebar />
        </Drawer>
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
