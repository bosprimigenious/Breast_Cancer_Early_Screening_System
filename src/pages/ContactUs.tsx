import React, { useState } from 'react'
import { Card, Typography, Form, Input, Button, Row, Col, Space, message, Divider } from 'antd'
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  ClockCircleOutlined,
  SendOutlined,
  MessageOutlined
} from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

const ContactUs: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async () => {
    setLoading(true)
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    message.success('消息发送成功！我们会在24小时内回复您。')
    form.resetFields()
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />,
      title: '客服热线',
      content: '400-123-4567',
      description: '工作日 9:00-18:00'
    },
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />,
      title: '邮箱地址',
      content: 'support@breastcancerscreening.com',
      description: '24小时内回复'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />,
      title: '公司地址',
      content: '北京市朝阳区科技园区创新大厦A座1001室',
      description: '邮编：100000'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />,
      title: '服务时间',
      content: '周一至周五 9:00-18:00',
      description: '节假日除外'
    }
  ]

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <MessageOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
        <Title level={2}>联系我们</Title>
        <Paragraph style={{ fontSize: '16px', color: 'var(--text-color-secondary)' }}>
          我们很乐意为您提供帮助，请选择最适合您的联系方式
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="发送消息" style={{ height: '100%' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: '请输入您的姓名' }]}
              >
                <Input placeholder="请输入您的姓名" />
              </Form.Item>

              <Form.Item
                label="邮箱"
                name="email"
                rules={[
                  { required: true, message: '请输入您的邮箱' },
                  { type: 'email', message: '请输入有效的邮箱地址' }
                ]}
              >
                <Input placeholder="请输入您的邮箱地址" />
              </Form.Item>

              <Form.Item
                label="电话"
                name="phone"
                rules={[{ required: true, message: '请输入您的电话号码' }]}
              >
                <Input placeholder="请输入您的电话号码" />
              </Form.Item>

              <Form.Item
                label="主题"
                name="subject"
                rules={[{ required: true, message: '请输入消息主题' }]}
              >
                <Input placeholder="请输入消息主题" />
              </Form.Item>

              <Form.Item
                label="消息内容"
                name="message"
                rules={[{ required: true, message: '请输入消息内容' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="请详细描述您的问题或建议..."
                  showCount
                  maxLength={500}
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  block
                >
                  发送消息
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {contactInfo.map((item, index) => (
              <Card key={index} size="small">
                <Space>
                  {item.icon}
                  <div>
                    <Title level={5} style={{ margin: 0, marginBottom: '4px' }}>
                      {item.title}
                    </Title>
                    <Text strong style={{ fontSize: '16px' }}>
                      {item.content}
                    </Text>
                    <br />
                    <Text type="secondary">
                      {item.description}
                    </Text>
                  </div>
                </Space>
              </Card>
            ))}

            <Card title="常见问题" size="small">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <Text strong>Q: 系统分析结果准确吗？</Text>
                  <br />
                  <Text type="secondary">A: 我们的AI系统准确率超过90%，但结果仅供参考，不能替代专业医疗诊断。</Text>
                </div>
                <Divider style={{ margin: '8px 0' }} />
                <div>
                  <Text strong>Q: 我的数据安全吗？</Text>
                  <br />
                  <Text type="secondary">A: 我们采用银行级加密技术保护您的数据，严格遵守隐私保护法规。</Text>
                </div>
                <Divider style={{ margin: '8px 0' }} />
                <div>
                  <Text strong>Q: 如何获得更详细的建议？</Text>
                  <br />
                  <Text type="secondary">A: 建议您咨询专业医生，我们的系统主要提供初步筛查和健康指导。</Text>
                </div>
              </Space>
            </Card>

            <Card title="技术支持" size="small">
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Text>如果您遇到技术问题，请提供以下信息：</Text>
                <ul>
                  <li>浏览器类型和版本</li>
                  <li>操作系统信息</li>
                  <li>错误截图或描述</li>
                  <li>操作步骤</li>
                </ul>
                <Text type="secondary">
                  技术支持邮箱：tech@breastcancerscreening.com
                </Text>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default ContactUs
