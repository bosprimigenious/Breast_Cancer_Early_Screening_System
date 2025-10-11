import React, { useState, useEffect } from 'react'
import { Layout, Button, Space, Dropdown, Typography } from 'antd'
import { 
  SunOutlined, 
  MoonOutlined, 
  GlobalOutlined,
  MenuOutlined
} from '@ant-design/icons'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

const { Header: AntHeader } = Layout
const { Title } = Typography

interface HeaderProps {
  onMenuClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { i18n, t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const languageItems = [
    {
      key: 'zh-CN',
      label: '中文',
      onClick: () => {
        i18n.changeLanguage('zh-CN')
        window.location.reload() // 强制刷新以更新所有文本
      }
    },
    {
      key: 'en-US',
      label: 'English',
      onClick: () => {
        i18n.changeLanguage('en-US')
        window.location.reload() // 强制刷新以更新所有文本
      }
    }
  ]

  return (
    <AntHeader style={{ 
      background: 'var(--card-background)', 
      padding: isMobile ? '0 16px' : '0 24px',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={onMenuClick}
            style={{ 
              color: 'var(--text-color)',
              marginRight: '12px'
            }}
          />
        )}
        <img 
            src="./logo.svg"
          alt="Logo" 
          style={{ 
            height: isMobile ? '24px' : '32px', 
            marginRight: '12px',
            filter: isDarkMode ? 'brightness(0) invert(1)' : 'none'
          }} 
        />
        <Title 
          level={3} 
          style={{ 
            margin: 0, 
            color: 'var(--primary-color)',
            fontSize: isMobile ? '18px' : 'clamp(16px, 4vw, 24px)'
          }}
        >
          {isMobile ? '筛查系统' : t('home.title')}
        </Title>
      </div>
      
      <Space size={isMobile ? 'small' : 'middle'}>
        <Button
          type="text"
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
          style={{ 
            color: 'var(--text-color)',
            border: '1px solid var(--border-color)'
          }}
          title={isDarkMode ? '切换到白天模式' : '切换到夜间模式'}
        />
        
        <Dropdown
          menu={{ items: languageItems }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Button
            type="text"
            icon={<GlobalOutlined />}
            style={{ 
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)'
            }}
          >
            {!isMobile && (i18n.language === 'zh-CN' ? '中文' : 'English')}
          </Button>
        </Dropdown>
      </Space>
    </AntHeader>
  )
}

export default Header
