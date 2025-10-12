import React from 'react'
import { Card, Row, Col, Statistic, Typography, Button, Space } from 'antd'
import { 
  UploadOutlined, 
  BarChartOutlined, 
  BulbOutlined, 
  HeartOutlined,
  ArrowRightOutlined 
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const features = [
    {
      title: t('home.dataUpload'),
      description: t('home.dataUploadDesc'),
      icon: <UploadOutlined style={{ fontSize: '32px', color: 'var(--primary-color)' }} />,
      path: '/upload'
    },
    {
      title: t('home.riskPrediction'),
      description: t('home.riskPredictionDesc'),
      icon: <BarChartOutlined style={{ fontSize: '32px', color: 'var(--success-color)' }} />,
      path: '/prediction'
    },
    {
      title: t('home.personalizedAdvice'),
      description: t('home.personalizedAdviceDesc'),
      icon: <BulbOutlined style={{ fontSize: '32px', color: 'var(--warning-color)' }} />,
      path: '/advice'
    },
    {
      title: t('home.healthEducation'),
      description: t('home.healthEducationDesc'),
      icon: <HeartOutlined style={{ fontSize: '32px', color: 'var(--error-color)' }} />,
      path: '/education'
    }
  ]

  return (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        padding: '0 20px'
      }}>
        <Title level={1} style={{ 
          color: 'var(--primary-color)', 
          marginBottom: '16px',
          fontSize: 'clamp(24px, 4vw, 36px)'
        }}>
          {t('home.title')}
        </Title>
        <Paragraph style={{ 
          fontSize: 'clamp(14px, 2vw, 18px)', 
          color: 'var(--text-color-secondary)', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          {t('home.subtitle')}
        </Paragraph>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
        <Col xs={12} sm={12} lg={6}>
          <Card style={{ textAlign: 'center', height: '100%' }}>
            <Statistic
              title={t('home.todayScreening')}
              value={156}
              valueStyle={{ color: 'var(--primary-color)', fontSize: 'clamp(18px, 4vw, 24px)' }}
              suffix="例"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <Card style={{ textAlign: 'center', height: '100%' }}>
            <Statistic
              title={t('home.highRisk')}
              value={12}
              valueStyle={{ color: 'var(--error-color)', fontSize: 'clamp(18px, 4vw, 24px)' }}
              suffix="例"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <Card style={{ textAlign: 'center', height: '100%' }}>
            <Statistic
              title={t('home.accuracy')}
              value={94.2}
              valueStyle={{ color: 'var(--success-color)', fontSize: 'clamp(18px, 4vw, 24px)' }}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={6}>
          <Card style={{ textAlign: 'center', height: '100%' }}>
            <Statistic
              title={t('home.avgTime')}
              value={8.5}
              valueStyle={{ color: 'var(--warning-color)', fontSize: 'clamp(18px, 4vw, 24px)' }}
              suffix="秒"
            />
          </Card>
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
        {t('home.features')}
      </Title>

      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              bodyStyle={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 3vw, 24px)' }}
            >
              <div style={{ marginBottom: '16px' }}>
                {React.cloneElement(feature.icon, {
                  style: { 
                    fontSize: 'clamp(24px, 5vw, 32px)', 
                    color: feature.icon.props.style?.color 
                  }
                })}
              </div>
              <Title level={4} style={{ 
                marginBottom: '12px',
                fontSize: 'clamp(16px, 3vw, 20px)'
              }}>
                {feature.title}
              </Title>
              <Paragraph style={{ 
                color: 'var(--text-color-secondary)', 
                marginBottom: '20px',
                fontSize: 'clamp(12px, 2.5vw, 14px)',
                lineHeight: 1.5
              }}>
                {feature.description}
              </Paragraph>
              <Button 
                type="primary" 
                icon={<ArrowRightOutlined />}
                onClick={() => navigate(feature.path)}
                size="large"
                style={{ 
                  width: '100%',
                  height: '44px',
                  fontSize: '16px'
                }}
              >
                {t('common.start')}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Card style={{ marginTop: '40px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
            {t('home.startJourney')}
          </Title>
          <Paragraph style={{ color: 'white', fontSize: '16px', marginBottom: '24px' }}>
            {t('home.startJourneyDesc')}
          </Paragraph>
          <Space size="large" direction="vertical" style={{ width: '100%' }}>
            <Button 
              type="primary" 
              size="large"
              icon={<UploadOutlined />}
              onClick={() => navigate('/upload')}
              style={{ 
                background: 'white', 
                color: 'var(--primary-color)', 
                border: 'none',
                width: '100%',
                height: '48px',
                fontSize: '18px'
              }}
            >
              {t('home.uploadData')}
            </Button>
            <Button 
              size="large"
              icon={<HeartOutlined />}
              onClick={() => navigate('/education')}
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                border: '1px solid white',
                width: '100%',
                height: '48px',
                fontSize: '18px'
              }}
            >
              {t('home.learnHealth')}
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  )
}

export default Home
