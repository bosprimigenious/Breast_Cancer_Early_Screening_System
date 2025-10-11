import React from 'react'
import { Layout, Typography, Space, Divider } from 'antd'
import { HeartOutlined, CopyrightOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

const { Footer: AntFooter } = Layout
const { Text } = Typography

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <AntFooter style={{ 
      textAlign: 'center',
      background: 'var(--card-background)',
      borderTop: '1px solid var(--border-color)',
      padding: '24px 50px',
      marginTop: 'auto'
    }}>
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Space>
          <HeartOutlined style={{ color: 'var(--error-color)' }} />
          <Text strong style={{ color: 'var(--text-color)' }}>
            {t('home.title')}
          </Text>
        </Space>
        
        <Text type="secondary" style={{ fontSize: '14px' }}>
          {t('footer.description', '基于人工智能的乳腺癌早期筛查与风险评估平台')}
        </Text>
        
        <Divider style={{ margin: '12px 0' }} />
        
        <Space direction="vertical" size="small">
          <Space split={<Text type="secondary">|</Text>}>
            <RouterLink to="/privacy" style={{ color: 'var(--text-color-secondary)' }}>
              {t('footer.privacy', '隐私政策')}
            </RouterLink>
            <RouterLink to="/terms" style={{ color: 'var(--text-color-secondary)' }}>
              {t('footer.terms', '服务条款')}
            </RouterLink>
            <RouterLink to="/contact" style={{ color: 'var(--text-color-secondary)' }}>
              {t('footer.contact', '联系我们')}
            </RouterLink>
          </Space>
          
          <Space>
            <CopyrightOutlined style={{ color: 'var(--text-color-secondary)' }} />
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {new Date().getFullYear()} {t('footer.copyright', '乳腺癌早期筛查系统. 保留所有权利.')}
            </Text>
          </Space>
          
          <Text type="secondary" style={{ fontSize: '12px' }}>
            {t('footer.disclaimer', '本系统仅供健康教育和参考使用，不能替代专业医疗诊断。如有任何健康问题，请及时咨询专业医生。')}
          </Text>
        </Space>
      </Space>
    </AntFooter>
  )
}

export default Footer
