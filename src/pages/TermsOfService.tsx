import React from 'react'
import { Card, Typography, Divider, Space, Alert } from 'antd'
import { FileTextOutlined, WarningOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const TermsOfService: React.FC = () => {

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <FileTextOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
          <Title level={2}>服务条款</Title>
          <Text type="secondary">最后更新：2024年1月1日</Text>
        </div>

        <Alert
          message="重要提醒"
          description="本系统仅供健康教育和参考使用，不能替代专业医疗诊断。如有任何健康问题，请及时咨询专业医生。"
          type="warning"
          showIcon
          style={{ marginBottom: '24px' }}
        />

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={3}>
              <CheckCircleOutlined style={{ marginRight: '8px', color: 'var(--success-color)' }} />
              服务说明
            </Title>
            <Paragraph>
              乳腺癌早期筛查系统是一个基于人工智能的健康评估平台，提供以下服务：
            </Paragraph>
            <ul>
              <li>医疗数据上传和分析</li>
              <li>AI智能风险评估</li>
              <li>个性化健康建议</li>
              <li>健康知识科普</li>
              <li>筛查计划制定</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>
              <WarningOutlined style={{ marginRight: '8px', color: 'var(--warning-color)' }} />
              使用限制
            </Title>
            <Paragraph>
              使用本服务时，您同意遵守以下限制：
            </Paragraph>
            <ul>
              <li>仅用于个人健康教育和参考目的</li>
              <li>不得用于商业用途或转售</li>
              <li>不得上传虚假或恶意数据</li>
              <li>不得尝试破解或攻击系统</li>
              <li>不得侵犯他人知识产权</li>
              <li>遵守所有适用的法律法规</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>
              <ExclamationCircleOutlined style={{ marginRight: '8px', color: 'var(--error-color)' }} />
              免责声明
            </Title>
            <Paragraph>
              您理解并同意以下免责声明：
            </Paragraph>
            <ul>
              <li><Text strong>非医疗诊断：</Text>本系统不提供医疗诊断，所有结果仅供参考</li>
              <li><Text strong>准确性限制：</Text>AI分析结果可能存在误差，不保证100%准确</li>
              <li><Text strong>数据安全：</Text>虽然我们采取安全措施，但无法保证绝对安全</li>
              <li><Text strong>服务中断：</Text>我们可能因维护、升级等原因暂停服务</li>
              <li><Text strong>第三方风险：</Text>使用第三方服务可能带来的风险</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>用户责任</Title>
            <Paragraph>
              作为用户，您需要承担以下责任：
            </Paragraph>
            <ul>
              <li>提供真实、准确的个人信息</li>
              <li>妥善保管您的账户信息</li>
              <li>及时更新您的联系方式</li>
              <li>遵守本服务条款的所有规定</li>
              <li>对您的行为承担法律责任</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>知识产权</Title>
            <Paragraph>
              本服务的知识产权归属：
            </Paragraph>
            <ul>
              <li>系统软件、算法、界面设计等归我们所有</li>
              <li>您上传的数据归您所有，但您授权我们用于服务提供</li>
              <li>分析结果和建议归我们所有，但您可以自由使用</li>
              <li>未经授权不得复制、修改或分发我们的内容</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>服务变更</Title>
            <Paragraph>
              我们保留以下权利：
            </Paragraph>
            <ul>
              <li>随时修改或终止服务</li>
              <li>更新服务条款和隐私政策</li>
              <li>调整服务功能和界面</li>
              <li>限制或暂停用户访问</li>
              <li>收取服务费用（如适用）</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>争议解决</Title>
            <Paragraph>
              如发生争议，我们将通过以下方式解决：
            </Paragraph>
            <ul>
              <li>首先通过友好协商解决</li>
              <li>协商不成的，提交至有管辖权的人民法院</li>
              <li>适用中华人民共和国法律</li>
              <li>争议解决期间不影响其他条款的效力</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>联系我们</Title>
            <Paragraph>
              如有任何问题或建议，请通过以下方式联系我们：
            </Paragraph>
            <ul>
              <li>邮箱：support@breastcancerscreening.com</li>
              <li>电话：400-123-4567</li>
              <li>在线客服：工作日9:00-18:00</li>
              <li>地址：北京市朝阳区科技园区创新大厦A座1001室</li>
            </ul>
          </div>

          <Divider />

          <div>
            <Title level={3}>条款生效</Title>
            <Paragraph>
              本服务条款自您开始使用本服务时生效。继续使用本服务即表示您接受本条款的所有内容。
              如果您不同意本条款，请停止使用本服务。
            </Paragraph>
          </div>
        </Space>
      </Card>
    </div>
  )
}

export default TermsOfService
