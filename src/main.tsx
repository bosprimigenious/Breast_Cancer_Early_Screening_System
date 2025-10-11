import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import App from './App.tsx'
import './index.css'
import './i18n'

const AppWithTheme: React.FC = () => {
  const { isDarkMode } = useTheme()
  const [locale, setLocale] = React.useState(zhCN)
  
  React.useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') || 'zh-CN'
    setLocale(savedLang === 'en-US' ? enUS : zhCN)
  }, [])
  
  return (
    <ConfigProvider 
      locale={locale}
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: isDarkMode ? '#177ddc' : '#1890ff',
          colorBgContainer: isDarkMode ? '#1f1f1f' : '#ffffff',
          colorBgLayout: isDarkMode ? '#141414' : '#f5f5f5',
          colorText: isDarkMode ? '#ffffff' : '#262626',
          colorTextSecondary: isDarkMode ? '#a6a6a6' : '#8c8c8c',
          colorBorder: isDarkMode ? '#434343' : '#d9d9d9',
        }
      }}
    >
      <App />
    </ConfigProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppWithTheme />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
