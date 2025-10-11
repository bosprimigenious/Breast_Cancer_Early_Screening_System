import React, { useState } from 'react'
import { 
  Card, 
  Button, 
  Typography, 
  Row, 
  Col, 
  Progress, 
  Statistic,
  Space,
  Alert,
  Spin,
  // Divider
} from 'antd'
import { 
  PlayCircleOutlined, 
  ReloadOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const { Title, Paragraph, Text } = Typography

interface RiskResult {
  level: 'high' | 'medium' | 'low'
  probability: number
  factors: string[]
  confidence: number
}

const RiskPrediction: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<RiskResult | null>(null)
  const [analysisTime, setAnalysisTime] = useState(0)

  const riskLevelConfig = {
    high: { color: '#ff4d4f', text: '高风险', icon: <WarningOutlined /> },
    medium: { color: '#faad14', text: '中风险', icon: <InfoCircleOutlined /> },
    low: { color: '#52c41a', text: '低风险', icon: <CheckCircleOutlined /> }
  }

  const pieData = result ? [
    { name: '风险概率', value: result.probability, fill: riskLevelConfig[result.level].color },
    { name: '安全概率', value: 100 - result.probability, fill: '#f0f0f0' }
  ] : []

  const factorData = result ? result.factors.map((factor, index) => ({
    name: factor,
    value: Math.random() * 100,
    fill: `hsl(${index * 60}, 70%, 50%)`
  })) : []

  const startAnalysis = async () => {
    setAnalyzing(true)
    setProgress(0)
    setResult(null)
    setAnalysisTime(0)

    const startTime = Date.now()

    // 模拟分析过程
    const steps = [
      { progress: 20, message: '正在读取上传文件...' },
      { progress: 40, message: '提取关键指标...' },
      { progress: 60, message: '分析影像特征...' },
      { progress: 80, message: '计算风险概率...' },
      { progress: 100, message: '生成分析报告...' }
    ]

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setProgress(step.progress)
    }

    // 模拟分析结果
    const mockResult: RiskResult = {
      level: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
      probability: Math.floor(Math.random() * 40) + 30,
      factors: [
        '年龄因素',
        '家族病史',
        '激素水平',
        '影像特征',
        '生活方式'
      ].slice(0, Math.floor(Math.random() * 3) + 2),
      confidence: Math.floor(Math.random() * 20) + 80
    }

    setResult(mockResult)
    setAnalyzing(false)
    setAnalysisTime((Date.now() - startTime) / 1000)
  }

  const getRiskDescription = (level: string, probability: number) => {
    switch (level) {
      case 'high':
        return `检测到高风险指标，建议立即就医进行进一步检查。当前风险概率为${probability}%，需要专业医生的详细评估。`
      case 'medium':
        return `存在中等风险因素，建议定期复查并关注身体变化。当前风险概率为${probability}%，建议3-6个月内复查。`
      case 'low':
        return `当前风险较低，但仍需保持定期筛查。当前风险概率为${probability}%，建议按常规时间间隔进行筛查。`
      default:
        return ''
    }
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>
        风险预测分析
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="AI智能分析" style={{ marginBottom: '24px' }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              {!analyzing && !result && (
                <div>
                  <PlayCircleOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
                  <Title level={4}>开始风险评估</Title>
                  <Paragraph style={{ color: '#666', marginBottom: '24px' }}>
                    点击下方按钮开始AI智能分析，系统将在10秒内完成风险评估
                  </Paragraph>
                  <Button 
                    type="primary" 
                    size="large"
                    icon={<PlayCircleOutlined />}
                    onClick={startAnalysis}
                  >
                    开始分析
                  </Button>
                </div>
              )}

              {analyzing && (
                <div>
                  <Spin size="large" />
                  <Title level={4} style={{ marginTop: '16px' }}>正在分析中...</Title>
                  <Progress 
                    percent={progress} 
                    status="active" 
                    style={{ marginTop: '16px', maxWidth: '400px', margin: '16px auto 0' }}
                  />
                  <Paragraph style={{ color: '#666', marginTop: '16px' }}>
                    预计剩余时间：{Math.max(0, 10 - Math.floor(progress / 10))}秒
                  </Paragraph>
                </div>
              )}

              {result && (
                <div>
                  <div style={{ marginBottom: '24px' }}>
                    {React.cloneElement(riskLevelConfig[result.level].icon, {
                      style: { fontSize: '48px', color: riskLevelConfig[result.level].color }
                    })}
                    <Title level={3} style={{ color: riskLevelConfig[result.level].color, marginTop: '8px' }}>
                      {riskLevelConfig[result.level].text}
                    </Title>
                    <Title level={1} style={{ color: riskLevelConfig[result.level].color, margin: '8px 0' }}>
                      {result.probability}%
                    </Title>
                    <Text type="secondary">风险概率</Text>
                  </div>

                  <Alert
                    message={getRiskDescription(result.level, result.probability)}
                    type={result.level === 'high' ? 'error' : result.level === 'medium' ? 'warning' : 'success'}
                    showIcon
                    style={{ marginBottom: '24px', textAlign: 'left' }}
                  />

                  <Button 
                    type="primary" 
                    icon={<ReloadOutlined />}
                    onClick={startAnalysis}
                  >
                    重新分析
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {result && (
            <Card title="风险因素分析">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <div style={{ height: '300px' }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: '16px' }}>
                      风险分布
                    </Title>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Col>
                <Col xs={24} sm={12}>
                  <div style={{ height: '300px' }}>
                    <Title level={5} style={{ textAlign: 'center', marginBottom: '16px' }}>
                      风险因素权重
                    </Title>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={factorData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="value" fill="#1890ff" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </Col>

        <Col xs={24} lg={8}>
          <Card title="分析统计">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Statistic
                title="分析时间"
                value={analysisTime}
                precision={1}
                suffix="秒"
                valueStyle={{ color: '#1890ff' }}
              />
              
              {result && (
                <>
                  <Statistic
                    title="置信度"
                    value={result.confidence}
                    suffix="%"
                    valueStyle={{ color: '#52c41a' }}
                  />
                  
                  <Statistic
                    title="检测因素"
                    value={result.factors.length}
                    suffix="项"
                    valueStyle={{ color: '#faad14' }}
                  />
                </>
              )}
            </Space>
          </Card>

          <Card title="风险等级说明" style={{ marginTop: '16px' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div className="risk-card risk-high">
                <Space>
                  <WarningOutlined style={{ color: '#ff4d4f' }} />
                  <div>
                    <Text strong style={{ color: '#ff4d4f' }}>高风险</Text>
                    <br />
                    <Text type="secondary">建议立即就医</Text>
                  </div>
                </Space>
              </div>
              
              <div className="risk-card risk-medium">
                <Space>
                  <InfoCircleOutlined style={{ color: '#faad14' }} />
                  <div>
                    <Text strong style={{ color: '#faad14' }}>中风险</Text>
                    <br />
                    <Text type="secondary">建议定期复查</Text>
                  </div>
                </Space>
              </div>
              
              <div className="risk-card risk-low">
                <Space>
                  <CheckCircleOutlined style={{ color: '#52c41a' }} />
                  <div>
                    <Text strong style={{ color: '#52c41a' }}>低风险</Text>
                    <br />
                    <Text type="secondary">保持定期筛查</Text>
                  </div>
                </Space>
              </div>
            </Space>
          </Card>

          <Card title="注意事项" style={{ marginTop: '16px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text type="secondary">• 本分析仅供参考，不能替代专业医疗诊断</Text>
              <Text type="secondary">• 如有异常症状，请及时就医</Text>
              <Text type="secondary">• 建议定期进行专业筛查</Text>
              <Text type="secondary">• 保持健康的生活方式</Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default RiskPrediction
