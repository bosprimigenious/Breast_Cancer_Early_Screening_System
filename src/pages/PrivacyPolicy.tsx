import React from 'react'
import { Card, Typography, Divider, Space } from 'antd'
import { SafetyOutlined, LockOutlined, EyeOutlined, DatabaseOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const PrivacyPolicy: React.FC = () => {

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <SafetyOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
          <Title level={2}>隐私政策</Title>
          <Text type="secondary">最后更新：2024年1月1日</Text>
        </div>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={3}>
              <LockOutlined style={{ marginRight: '8px' }} />
              信息收集
            </Title>
            <Paragraph>
              我们收集以下类型的信息：
            </Paragraph>
            <ul>
              <li><Text strong>个人健康信息：</Text>您上传的体检报告、影像资料等医疗数据</li>
              <li><Text strong>使用信息：</Text>您使用我们服务时产生的操作记录和分析结果</li>
              <li><Text strong>设备信息：</Text>浏览器类型、操作系统、IP地址等技术信息</li>
              <li><Text strong>联系信息：</Text>您主动提供的姓名、邮箱、电话等联系方式</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>
              <EyeOutlined style={{ marginRight: '8px' }} />
              信息使用
            </Title>
            <Paragraph>
              我们使用收集的信息用于以下目的：
            </Paragraph>
            <ul>
              <li>提供乳腺癌早期筛查和风险评估服务</li>
              <li>改进我们的AI算法和分析模型</li>
              <li>提供个性化的健康建议和指导</li>
              <li>维护和改进我们的服务质量</li>
              <li>遵守法律法规要求</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>
              <DatabaseOutlined style={{ marginRight: '8px' }} />
              信息保护
            </Title>
            <Paragraph>
              我们采取以下措施保护您的隐私：
            </Paragraph>
            <ul>
              <li><Text strong>数据加密：</Text>所有数据传输和存储都采用行业标准加密技术</li>
              <li><Text strong>访问控制：</Text>严格限制数据访问权限，仅授权人员可访问</li>
              <li><Text strong>定期审计：</Text>定期进行安全审计和漏洞检测</li>
              <li><Text strong>数据备份：</Text>建立完善的数据备份和恢复机制</li>
              <li><Text strong>员工培训：</Text>定期对员工进行隐私保护培训</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>信息共享</Title>
            <Paragraph>
              我们承诺不会向第三方出售、交易或转让您的个人信息，除非：
            </Paragraph>
            <ul>
              <li>获得您的明确同意</li>
              <li>法律法规要求</li>
              <li>保护我们的合法权益</li>
              <li>与可信赖的服务提供商合作（在严格保密协议下）</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>您的权利</Title>
            <Paragraph>
              您拥有以下权利：
            </Paragraph>
            <ul>
              <li><Text strong>访问权：</Text>查看我们持有的关于您的个人信息</li>
              <li><Text strong>更正权：</Text>要求更正不准确的个人信息</li>
              <li><Text strong>删除权：</Text>要求删除您的个人信息</li>
              <li><Text strong>限制处理权：</Text>要求限制对您个人信息的处理</li>
              <li><Text strong>数据可携带权：</Text>要求以结构化格式获取您的数据</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>数据保留</Title>
            <Paragraph>
              我们仅在必要期间保留您的个人信息：
            </Paragraph>
            <ul>
              <li>医疗数据：根据医疗法规要求保留</li>
              <li>使用记录：保留12个月用于服务改进</li>
              <li>联系信息：在您使用服务期间保留</li>
              <li>法律要求：根据相关法律法规要求保留</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>联系我们</Title>
            <Paragraph>
              如果您对本隐私政策有任何疑问或需要行使您的权利，请通过以下方式联系我们：
            </Paragraph>
            <ul>
              <li>邮箱：privacy@breastcancerscreening.com</li>
              <li>电话：400-123-4567</li>
              <li>地址：北京市朝阳区科技园区创新大厦A座1001室</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>政策更新</Title>
            <Paragraph>
              我们可能会不时更新本隐私政策。重大变更将通过网站公告或邮件通知您。
              继续使用我们的服务即表示您接受更新后的隐私政策。
            </Paragraph>
          </div>
        </Space>
      </Card>
    </div>
  )
}

export default PrivacyPolicy
