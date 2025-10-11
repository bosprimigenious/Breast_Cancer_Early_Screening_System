import React from 'react'
import { Layout, Menu, Typography, Button } from 'antd'
import {
  UploadOutlined,
  BarChartOutlined,
  BulbOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSidebar } from '../contexts/SidebarContext'

const { Sider } = Layout
const { Title } = Typography

const Sidebar: React.FC = () => {
  const { collapsed, toggleCollapsed } = useSidebar()
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: t('nav.home'),
    },
    {
      key: '/upload',
      icon: <UploadOutlined />,
      label: t('nav.upload'),
    },
    {
      key: '/prediction',
      icon: <BarChartOutlined />,
      label: t('nav.prediction'),
    },
    {
      key: '/advice',
      icon: <BulbOutlined />,
      label: t('nav.advice'),
    },
    {
      key: '/education',
      icon: <HeartOutlined />,
      label: t('nav.education'),
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth={collapsed ? 0 : 200}
      style={{
        background: 'var(--card-background)',
        borderRight: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow)',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 1000,
        transition: 'all 0.2s ease'
      }}
      width={200}
    >
      <div style={{ 
        padding: collapsed ? '20px 16px' : '20px', 
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--card-background)',
        display: 'flex',
        flexDirection: collapsed ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: collapsed ? '8px' : '12px'
      }}>
        <img 
          src="./logo.svg" 
          alt="Logo" 
          style={{ 
            width: collapsed ? '24px' : '32px',
            height: collapsed ? '24px' : '32px',
            flexShrink: 0
          }} 
        />
        {!collapsed && (
          <Title 
            level={4} 
            style={{ 
              margin: 0, 
              color: 'var(--primary-color)',
              fontSize: '18px',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            乳腺癌筛查系统
          </Title>
        )}
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ 
          border: 'none',
          background: 'transparent',
          marginTop: '16px'
        }}
        onClick={handleMenuClick}
      />
      
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapsed}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)'
        }}
      />
    </Sider>
  )
}

export default Sidebar
