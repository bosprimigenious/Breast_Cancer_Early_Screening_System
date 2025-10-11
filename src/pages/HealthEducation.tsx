import React, { useState } from 'react'
import { 
  Card, 
  Typography, 
  Row, 
  Col, 
  Tabs, 
  List, 
  Tag, 
  Space, 
  Alert,
  Timeline,
  Statistic,
  // Progress,
  Collapse
} from 'antd'
import { 
  // HeartOutlined, 
  WarningOutlined, 
  CalendarOutlined,
  // MedicineBoxOutlined,
  // BulbOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  // InfoCircleOutlined
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography
const { TabPane } = Tabs
const { Panel } = Collapse

const HealthEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('symptoms')

  const earlySymptoms = [
    {
      title: '乳房肿块',
      description: '乳房内出现无痛性肿块，质地较硬，边界不清',
      severity: 'high',
      icon: <WarningOutlined style={{ color: '#ff4d4f' }} />
    },
    {
      title: '乳头溢液',
      description: '非哺乳期出现血性、浆液性或脓性溢液',
      severity: 'high',
      icon: <WarningOutlined style={{ color: '#ff4d4f' }} />
    },
    {
      title: '乳房皮肤改变',
      description: '皮肤出现凹陷、橘皮样改变或溃疡',
      severity: 'high',
      icon: <WarningOutlined style={{ color: '#ff4d4f' }} />
    },
    {
      title: '乳头内陷',
      description: '乳头突然内陷或位置改变',
      severity: 'medium',
      icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />
    },
    {
      title: '乳房疼痛',
      description: '持续性乳房疼痛，与月经周期无关',
      severity: 'medium',
      icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />
    },
    {
      title: '腋窝淋巴结肿大',
      description: '腋窝出现无痛性淋巴结肿大',
      severity: 'high',
      icon: <WarningOutlined style={{ color: '#ff4d4f' }} />
    }
  ]

  const screeningGuidelines = [
    {
      age: '20-39岁',
      frequency: '每年',
      methods: ['乳腺自检', '临床乳腺检查'],
      description: '建议每月进行乳腺自检，每年进行临床检查'
    },
    {
      age: '40-49岁',
      frequency: '每年',
      methods: ['乳腺自检', '临床乳腺检查', '钼靶检查'],
      description: '建议每年进行钼靶检查，结合临床检查'
    },
    {
      age: '50-74岁',
      frequency: '每1-2年',
      methods: ['乳腺自检', '临床乳腺检查', '钼靶检查'],
      description: '建议每1-2年进行钼靶检查'
    },
    {
      age: '75岁以上',
      frequency: '个体化',
      methods: ['乳腺自检', '临床乳腺检查', '钼靶检查'],
      description: '根据个人健康状况和预期寿命决定'
    }
  ]

  const riskFactors = [
    {
      category: '不可改变因素',
      factors: [
        { name: '年龄', description: '50岁以上风险显著增加', level: 'high' },
        { name: '性别', description: '女性发病率远高于男性', level: 'high' },
        { name: '家族史', description: '直系亲属有乳腺癌病史', level: 'high' },
        { name: '基因突变', description: 'BRCA1/BRCA2基因突变', level: 'high' },
        { name: '月经史', description: '初潮早、绝经晚', level: 'medium' }
      ]
    },
    {
      category: '可改变因素',
      factors: [
        { name: '生活方式', description: '缺乏运动、吸烟、饮酒', level: 'medium' },
        { name: '饮食', description: '高脂肪、高热量饮食', level: 'medium' },
        { name: '体重', description: '肥胖、超重', level: 'medium' },
        { name: '激素', description: '长期使用激素替代治疗', level: 'medium' },
        { name: '生育', description: '未生育或晚育', level: 'low' }
      ]
    }
  ]

  const preventionTips = [
    {
      title: '健康饮食',
      tips: [
        '多吃蔬菜水果，特别是十字花科蔬菜',
        '选择全谷物食品',
        '限制红肉和加工肉类摄入',
        '减少高脂肪、高糖食物',
        '适量摄入优质蛋白质'
      ],
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    },
    {
      title: '规律运动',
      tips: [
        '每周至少150分钟中等强度运动',
        '结合有氧运动和力量训练',
        '保持健康体重',
        '避免久坐不动',
        '选择喜欢的运动方式'
      ],
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    },
    {
      title: '生活方式',
      tips: [
        '避免吸烟和二手烟',
        '限制酒精摄入',
        '保持充足睡眠',
        '管理压力',
        '定期体检'
      ],
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    },
    {
      title: '自我检查',
      tips: [
        '每月进行乳腺自检',
        '了解正常乳房外观和感觉',
        '注意任何变化',
        '及时就医咨询',
        '建立健康档案'
      ],
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return '#ff4d4f'
      case 'medium': return '#faad14'
      case 'low': return '#52c41a'
      default: return '#1890ff'
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high': return '高风险'
      case 'medium': return '中风险'
      case 'low': return '低风险'
      default: return '一般'
    }
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>
        健康科普
      </Title>

      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="早期发现率"
              value={85}
              suffix="%"
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="5年生存率"
              value={90}
              suffix="%"
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="筛查覆盖率"
              value={65}
              suffix="%"
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
      </Row>

      <Card>
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="早期症状" key="symptoms">
            <Row gutter={[16, 16]}>
              {earlySymptoms.map((symptom, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Card 
                    size="small" 
                    className="symptom-item"
                    style={{ height: '100%' }}
                  >
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Space>
                        {symptom.icon}
                        <Text strong>{symptom.title}</Text>
                        <Tag color={getSeverityColor(symptom.severity)}>
                          {getSeverityText(symptom.severity)}
                        </Tag>
                      </Space>
                      <Text type="secondary">{symptom.description}</Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <Alert
              message="重要提醒"
              description="如果出现上述任何症状，请及时就医进行专业检查。早期发现和治疗是提高治愈率的关键。"
              type="warning"
              showIcon
              style={{ marginTop: '24px' }}
            />
          </TabPane>

          <TabPane tab="筛查指南" key="screening">
            <Timeline>
              {screeningGuidelines.map((guideline, index) => (
                <Timeline.Item 
                  key={index}
                  dot={<CalendarOutlined style={{ color: '#1890ff' }} />}
                >
                  <Card size="small" style={{ marginBottom: '16px' }}>
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={6}>
                        <Title level={5} style={{ color: '#1890ff', margin: 0 }}>
                          {guideline.age}
                        </Title>
                        <Text type="secondary">筛查频率：{guideline.frequency}</Text>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Space wrap>
                          {guideline.methods.map((method, idx) => (
                            <Tag key={idx} color="blue">{method}</Tag>
                          ))}
                        </Space>
                        <Paragraph style={{ marginTop: '8px', marginBottom: 0 }}>
                          {guideline.description}
                        </Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </Timeline.Item>
              ))}
            </Timeline>

            <Alert
              message="筛查建议"
              description="建议从20岁开始每月进行乳腺自检，40岁开始每年进行钼靶检查。有家族史或其他高风险因素的人群应咨询医生制定个性化筛查计划。"
              type="info"
              showIcon
              style={{ marginTop: '24px' }}
            />
          </TabPane>

          <TabPane tab="风险因素" key="risk">
            <Row gutter={[24, 24]}>
              {riskFactors.map((category, index) => (
                <Col xs={24} lg={12} key={index}>
                  <Card title={category.category} size="small">
                    <List
                      dataSource={category.factors}
                      renderItem={(factor) => (
                        <List.Item>
                          <List.Item.Meta
                            title={
                              <Space>
                                <Text strong>{factor.name}</Text>
                                <Tag color={getSeverityColor(factor.level)}>
                                  {getSeverityText(factor.level)}
                                </Tag>
                              </Space>
                            }
                            description={factor.description}
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>

          <TabPane tab="预防措施" key="prevention">
            <Row gutter={[16, 16]}>
              {preventionTips.map((category, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card 
                    title={
                      <Space>
                        {category.icon}
                        {category.title}
                      </Space>
                    }
                    size="small"
                    style={{ height: '100%' }}
                  >
                    <List
                      size="small"
                      dataSource={category.tips}
                      renderItem={(tip) => (
                        <List.Item>
                          <Text>{tip}</Text>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
              ))}
            </Row>

            <Card title="乳腺自检方法" style={{ marginTop: '24px' }}>
              <Collapse>
                <Panel header="检查时间" key="1">
                  <Text>建议在月经结束后3-7天进行，绝经后女性可选择每月固定日期</Text>
                </Panel>
                <Panel header="检查步骤" key="2">
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Text>1. 站在镜子前，观察乳房外观是否有变化</Text>
                    <Text>2. 抬起手臂，检查乳房和腋窝</Text>
                    <Text>3. 平躺，用指腹轻压检查整个乳房</Text>
                    <Text>4. 检查乳头是否有溢液</Text>
                    <Text>5. 检查腋窝淋巴结</Text>
                  </Space>
                </Panel>
                <Panel header="注意事项" key="3">
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Text>• 使用指腹而不是指尖</Text>
                    <Text>• 检查要全面，包括腋窝</Text>
                    <Text>• 注意任何异常变化</Text>
                    <Text>• 如有疑问及时就医</Text>
                  </Space>
                </Panel>
              </Collapse>
            </Card>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}

export default HealthEducation
