import React, { useState } from 'react'
import { 
  Card, 
  Form, 
  Input, 
  Select, 
  Button, 
  Typography, 
  Row, 
  Col, 
  Timeline,
  Tag,
  Space,
  // Divider,
  Alert,
  List,
  Avatar
} from 'antd'
import { 
  UserOutlined, 
  CalendarOutlined, 
  HeartOutlined,
  // MedicineBoxOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography
const { Option } = Select

interface UserProfile {
  age: number
  riskLevel: 'high' | 'medium' | 'low'
  hasFamilyHistory: boolean
  lifestyle: string[]
  lastScreening: string
}

interface ScreeningAdvice {
  immediate: string[]
  shortTerm: string[]
  longTerm: string[]
  lifestyle: string[]
  followUp: string
}

const PersonalizedAdvice: React.FC = () => {
  const [form] = Form.useForm()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [advice, setAdvice] = useState<ScreeningAdvice | null>(null)
  const [loading, setLoading] = useState(false)

  const generateAdvice = async (profile: UserProfile) => {
    setLoading(true)
    
    // 模拟AI分析延迟
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newAdvice: ScreeningAdvice = {
      immediate: [],
      shortTerm: [],
      longTerm: [],
      lifestyle: [],
      followUp: ''
    }

    // 根据风险等级生成建议
    if (profile.riskLevel === 'high') {
      newAdvice.immediate = [
        '建议1周内进行钼靶检查',
        '预约乳腺专科医生咨询',
        '考虑进行乳腺MRI检查',
        '完善家族病史调查'
      ]
      newAdvice.shortTerm = [
        '1个月内完成所有检查',
        '建立详细的健康档案',
        '制定个性化监测计划'
      ]
      newAdvice.followUp = '每3个月复查一次'
    } else if (profile.riskLevel === 'medium') {
      newAdvice.immediate = [
        '建议1个月内进行钼靶检查',
        '预约乳腺专科医生咨询'
      ]
      newAdvice.shortTerm = [
        '3个月内完成检查',
        '建立健康监测档案'
      ]
      newAdvice.followUp = '每6个月复查一次'
    } else {
      newAdvice.immediate = [
        '建议3个月内进行常规筛查',
        '保持定期体检习惯'
      ]
      newAdvice.shortTerm = [
        '6个月内完成筛查',
        '建立健康档案'
      ]
      newAdvice.followUp = '每年复查一次'
    }

    // 根据年龄调整建议
    if (profile.age < 40) {
      newAdvice.longTerm = [
        '建议从40岁开始每年进行钼靶检查',
        '保持自我检查习惯',
        '关注身体变化'
      ]
    } else if (profile.age >= 40 && profile.age < 50) {
      newAdvice.longTerm = [
        '每年进行钼靶检查',
        '考虑乳腺超声检查',
        '定期自我检查'
      ]
    } else {
      newAdvice.longTerm = [
        '每年进行钼靶检查',
        '必要时进行乳腺MRI',
        '定期自我检查'
      ]
    }

    // 生活方式建议
    newAdvice.lifestyle = [
      '保持健康饮食，减少高脂肪食物',
      '适量运动，每周至少150分钟中等强度运动',
      '控制体重，维持健康BMI',
      '限制酒精摄入',
      '避免吸烟和二手烟',
      '保持充足睡眠，减少压力'
    ]

    setAdvice(newAdvice)
    setLoading(false)
  }

  const onFinish = (values: any) => {
    const profile: UserProfile = {
      age: values.age,
      riskLevel: values.riskLevel,
      hasFamilyHistory: values.hasFamilyHistory,
      lifestyle: values.lifestyle || [],
      lastScreening: values.lastScreening
    }
    setUserProfile(profile)
    generateAdvice(profile)
  }

  const getRiskLevelConfig = (level: string) => {
    const configs = {
      high: { color: '#ff4d4f', text: '高风险', icon: <ExclamationCircleOutlined /> },
      medium: { color: '#faad14', text: '中风险', icon: <ClockCircleOutlined /> },
      low: { color: '#52c41a', text: '低风险', icon: <CheckCircleOutlined /> }
    }
    return configs[level as keyof typeof configs]
  }

  const getAgeGroup = (age: number) => {
    if (age < 30) return '青年期'
    if (age < 40) return '成年早期'
    if (age < 50) return '中年期'
    if (age < 60) return '中年后期'
    return '老年期'
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>
        个性化建议
      </Title>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={10}>
          <Card title="个人信息" style={{ marginBottom: '24px' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                riskLevel: 'medium',
                hasFamilyHistory: false,
                lastScreening: 'never'
              }}
            >
              <Form.Item
                label="年龄"
                name="age"
                rules={[{ required: true, message: '请输入年龄' }]}
              >
                <Input 
                  type="number" 
                  placeholder="请输入您的年龄"
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                label="风险等级"
                name="riskLevel"
                rules={[{ required: true, message: '请选择风险等级' }]}
              >
                <Select placeholder="请选择您的风险等级">
                  <Option value="low">
                    <Space>
                      <CheckCircleOutlined style={{ color: '#52c41a' }} />
                      低风险
                    </Space>
                  </Option>
                  <Option value="medium">
                    <Space>
                      <ClockCircleOutlined style={{ color: '#faad14' }} />
                      中风险
                    </Space>
                  </Option>
                  <Option value="high">
                    <Space>
                      <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
                      高风险
                    </Space>
                  </Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="家族病史"
                name="hasFamilyHistory"
                rules={[{ required: true, message: '请选择是否有家族病史' }]}
              >
                <Select placeholder="是否有乳腺癌家族病史">
                  <Option value={true}>有家族病史</Option>
                  <Option value={false}>无家族病史</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="上次筛查时间"
                name="lastScreening"
                rules={[{ required: true, message: '请选择上次筛查时间' }]}
              >
                <Select placeholder="上次进行乳腺筛查的时间">
                  <Option value="never">从未筛查</Option>
                  <Option value="1year">1年内</Option>
                  <Option value="2years">2年内</Option>
                  <Option value="3years">3年内</Option>
                  <Option value="more">3年以上</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="生活方式"
                name="lifestyle"
              >
                <Select mode="multiple" placeholder="选择您的生活方式特点">
                  <Option value="smoking">吸烟</Option>
                  <Option value="drinking">饮酒</Option>
                  <Option value="exercise">经常运动</Option>
                  <Option value="stress">工作压力大</Option>
                  <Option value="diet">饮食不规律</Option>
                  <Option value="sleep">睡眠不足</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  block
                  size="large"
                >
                  生成个性化建议
                </Button>
              </Form.Item>
            </Form>
          </Card>

          {userProfile && (
            <Card title="个人档案">
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <Text strong>年龄：</Text>
                  <Text>{userProfile.age}岁 ({getAgeGroup(userProfile.age)})</Text>
                </div>
                <div>
                  <Text strong>风险等级：</Text>
                  <Tag 
                    color={getRiskLevelConfig(userProfile.riskLevel).color}
                    icon={getRiskLevelConfig(userProfile.riskLevel).icon}
                  >
                    {getRiskLevelConfig(userProfile.riskLevel).text}
                  </Tag>
                </div>
                <div>
                  <Text strong>家族病史：</Text>
                  <Text>{userProfile.hasFamilyHistory ? '有' : '无'}</Text>
                </div>
                <div>
                  <Text strong>上次筛查：</Text>
                  <Text>{userProfile.lastScreening === 'never' ? '从未筛查' : userProfile.lastScreening}</Text>
                </div>
              </Space>
            </Card>
          )}
        </Col>

        <Col xs={24} lg={14}>
          {advice && (
            <div>
              <Card title="筛查建议时间线" style={{ marginBottom: '24px' }}>
                <Timeline>
                  <Timeline.Item 
                    color="red" 
                    dot={<ExclamationCircleOutlined />}
                  >
                    <Title level={5} style={{ color: '#ff4d4f' }}>立即行动</Title>
                    <List
                      size="small"
                      dataSource={advice.immediate}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Timeline.Item>
                  
                  <Timeline.Item 
                    color="orange" 
                    dot={<ClockCircleOutlined />}
                  >
                    <Title level={5} style={{ color: '#faad14' }}>短期计划 (1-3个月)</Title>
                    <List
                      size="small"
                      dataSource={advice.shortTerm}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Timeline.Item>
                  
                  <Timeline.Item 
                    color="blue" 
                    dot={<CalendarOutlined />}
                  >
                    <Title level={5} style={{ color: '#1890ff' }}>长期规划</Title>
                    <List
                      size="small"
                      dataSource={advice.longTerm}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Timeline.Item>
                  
                  <Timeline.Item 
                    color="green" 
                    dot={<CheckCircleOutlined />}
                  >
                    <Title level={5} style={{ color: '#52c41a' }}>随访计划</Title>
                    <Text>{advice.followUp}</Text>
                  </Timeline.Item>
                </Timeline>
              </Card>

              <Card title="生活方式建议">
                <List
                  dataSource={advice.lifestyle}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: '#1890ff' }}>{index + 1}</Avatar>}
                        description={item}
                      />
                    </List.Item>
                  )}
                />
              </Card>

              <Alert
                message="重要提醒"
                description="以上建议基于您提供的信息生成，仅供参考。如有任何异常症状或疑虑，请及时咨询专业医生。"
                type="info"
                showIcon
                style={{ marginTop: '24px' }}
              />
            </div>
          )}

          {!advice && !loading && (
            <Card>
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <HeartOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
                <Title level={4}>获取个性化建议</Title>
                <Paragraph style={{ color: '#666' }}>
                  请填写左侧表单，系统将根据您的个人信息生成个性化的筛查建议和健康指导
                </Paragraph>
              </div>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default PersonalizedAdvice
