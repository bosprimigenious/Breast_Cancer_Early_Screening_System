import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const RedirectToHome: React.FC = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  useEffect(() => {
    // 强制设置为中文
    i18n.changeLanguage('zh-CN')
    
    // 重定向到主页
    navigate('/', { replace: true })
  }, [navigate, i18n])

  return null
}

export default RedirectToHome
