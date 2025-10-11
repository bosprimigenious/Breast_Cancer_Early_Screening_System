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

      <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('home.todayScreening')}
              value={156}
              valueStyle={{ color: 'var(--primary-color)' }}
              suffix="例"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('home.highRisk')}
              value={12}
              valueStyle={{ color: 'var(--error-color)' }}
              suffix="例"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('home.accuracy')}
              value={94.2}
              valueStyle={{ color: 'var(--success-color)' }}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('home.avgTime')}
              value={8.5}
              valueStyle={{ color: 'var(--warning-color)' }}
              suffix="秒"
            />
          </Card>
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
        {t('home.features')}
      </Title>

      <Row gutter={[24, 24]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              style={{ height: '100%', textAlign: 'center' }}
              bodyStyle={{ padding: '32px 24px' }}
            >
              <div style={{ marginBottom: '16px' }}>
                {feature.icon}
              </div>
              <Title level={4} style={{ marginBottom: '12px' }}>
                {feature.title}
              </Title>
              <Paragraph style={{ color: 'var(--text-color-secondary)', marginBottom: '20px' }}>
                {feature.description}
              </Paragraph>
              <Button 
                type="primary" 
                icon={<ArrowRightOutlined />}
                onClick={() => navigate(feature.path)}
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
          <Space size="large">
            <Button 
              type="primary" 
              size="large"
              icon={<UploadOutlined />}
              onClick={() => navigate('/upload')}
              style={{ background: 'white', color: 'var(--primary-color)', border: 'none' }}
            >
              {t('home.uploadData')}
            </Button>
            <Button 
              size="large"
              icon={<HeartOutlined />}
              onClick={() => navigate('/education')}
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid white' }}
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
