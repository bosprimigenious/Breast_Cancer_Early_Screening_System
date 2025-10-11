import React, { useState, useCallback } from 'react'
import { 
  Card, 
  // Upload, 
  Button, 
  message, 
  Typography, 
  Row, 
  Col, 
  Progress,
  List,
  Tag,
  Space,
  Divider
} from 'antd'
import { 
  InboxOutlined, 
  FileTextOutlined, 
  FilePdfOutlined, 
  FileImageOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons'
import { useDropzone } from 'react-dropzone'

const { Title, Paragraph, Text } = Typography
// const { Dragger } = Upload

interface UploadedFile {
  id: string
  name: string
  type: 'txt' | 'pdf' | 'png' | 'dicom'
  size: number
  file: File
  preview?: string
  processed: boolean
}

const DataUpload: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)

  const getFileType = (fileName: string): 'txt' | 'pdf' | 'png' | 'dicom' => {
    const ext = fileName.toLowerCase().split('.').pop()
    switch (ext) {
      case 'txt':
        return 'txt'
      case 'pdf':
        return 'pdf'
      case 'png':
      case 'jpg':
      case 'jpeg':
        return 'png'
      case 'dcm':
      case 'dicom':
        return 'dicom'
      default:
        return 'txt'
    }
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'txt':
        return <FileTextOutlined style={{ color: '#1890ff' }} />
      case 'pdf':
        return <FilePdfOutlined style={{ color: '#f5222d' }} />
      case 'png':
        return <FileImageOutlined style={{ color: '#52c41a' }} />
      case 'dicom':
        return <FileImageOutlined style={{ color: '#faad14' }} />
      default:
        return <FileTextOutlined />
    }
  }

  const getFileTypeTag = (type: string) => {
    const typeMap = {
      txt: { color: 'blue', text: '体检报告' },
      pdf: { color: 'red', text: 'PDF报告' },
      png: { color: 'green', text: '影像图片' },
      dicom: { color: 'orange', text: 'DICOM影像' }
    }
    const config = typeMap[type as keyof typeof typeMap]
    return <Tag color={config.color}>{config.text}</Tag>
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: getFileType(file.name),
      size: file.size,
      file,
      processed: false
    }))

    setUploadedFiles(prev => [...prev, ...newFiles])
    message.success(`成功上传 ${newFiles.length} 个文件`)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf'],
      'image/png': ['.png', '.jpg', '.jpeg'],
      'application/dicom': ['.dcm', '.dicom']
    },
    multiple: true
  })

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
    message.info('文件已删除')
  }

  const processFiles = async () => {
    if (uploadedFiles.length === 0) {
      message.warning('请先上传文件')
      return
    }

    setProcessing(true)
    setProgress(0)

    // 模拟文件处理过程
    for (let i = 0; i < uploadedFiles.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProgress(((i + 1) / uploadedFiles.length) * 100)
      
      setUploadedFiles(prev => 
        prev.map(file => 
          file.id === uploadedFiles[i].id 
            ? { ...file, processed: true }
            : file
        )
      )
    }

    setProcessing(false)
    message.success('所有文件处理完成！')
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>
        数据上传
      </Title>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="文件上传区域" style={{ marginBottom: '24px' }}>
            <div
              {...getRootProps()}
              className={`upload-area ${isDragActive ? 'dragover' : ''}`}
              style={{
                border: '2px dashed var(--border-color)',
                borderRadius: '8px',
                padding: '40px',
                textAlign: 'center',
                backgroundColor: 'var(--card-background)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
            >
              <input {...getInputProps()} />
              <InboxOutlined style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }} />
              <Title level={4} style={{ color: 'var(--text-color)' }}>
                {isDragActive ? '释放文件到此处' : '拖拽文件到此处或点击上传'}
              </Title>
              <Paragraph style={{ color: 'var(--text-color-secondary)', marginBottom: '16px' }}>
                支持格式：TXT、PDF、PNG、JPG、DICOM
              </Paragraph>
              <Button type="primary" size="large">
                选择文件
              </Button>
            </div>
          </Card>

          <Card title="已上传文件" extra={
            <Space>
              <Button 
                type="primary" 
                loading={processing}
                onClick={processFiles}
                disabled={uploadedFiles.length === 0}
              >
                开始处理
              </Button>
            </Space>
          }>
            {processing && (
              <div style={{ marginBottom: '16px' }}>
                <Text>处理进度：</Text>
                <Progress percent={Math.round(progress)} status="active" />
              </div>
            )}
            
            <List
              dataSource={uploadedFiles}
              renderItem={(file) => (
                <List.Item
                  actions={[
                    <Button 
                      type="text" 
                      icon={<EyeOutlined />}
                      onClick={() => message.info('预览功能开发中...')}
                    >
                      预览
                    </Button>,
                    <Button 
                      type="text" 
                      danger 
                      icon={<DeleteOutlined />}
                      onClick={() => removeFile(file.id)}
                    >
                      删除
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={getFileIcon(file.type)}
                    title={
                      <Space>
                        <Text strong>{file.name}</Text>
                        {getFileTypeTag(file.type)}
                        {file.processed && <Tag color="green">已处理</Tag>}
                      </Space>
                    }
                    description={
                      <Space>
                        <Text type="secondary">{formatFileSize(file.size)}</Text>
                        <Text type="secondary">•</Text>
                        <Text type="secondary">
                          {file.type === 'txt' && '体检报告文本'}
                          {file.type === 'pdf' && 'PDF格式报告'}
                          {file.type === 'png' && '乳腺影像图片'}
                          {file.type === 'dicom' && 'DICOM医学影像'}
                        </Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="支持的文件类型">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Title level={5}>体检报告</Title>
                <Tag color="blue">TXT</Tag>
                <Tag color="red">PDF</Tag>
                <Paragraph type="secondary" style={{ marginTop: '8px' }}>
                  支持纯文本和PDF格式的体检报告，系统将自动提取关键指标
                </Paragraph>
              </div>
              
              <Divider />
              
              <div>
                <Title level={5}>乳腺影像</Title>
                <Tag color="green">PNG</Tag>
                <Tag color="green">JPG</Tag>
                <Tag color="orange">DICOM</Tag>
                <Paragraph type="secondary" style={{ marginTop: '8px' }}>
                  支持常见图片格式和DICOM医学影像标准
                </Paragraph>
              </div>
            </Space>
          </Card>

          <Card title="处理说明" style={{ marginTop: '16px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text>• 系统将自动识别文件类型</Text>
              <Text>• 自动提取关键健康指标</Text>
              <Text>• 影像文件将进行预处理</Text>
              <Text>• 处理完成后可进行风险评估</Text>
            </Space>
          </Card>

          <Card title="注意事项" style={{ marginTop: '16px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Text type="secondary">• 单个文件大小不超过50MB</Text>
              <Text type="secondary">• 支持批量上传多个文件</Text>
              <Text type="secondary">• 请确保文件格式正确</Text>
              <Text type="secondary">• 处理时间约1-3分钟</Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DataUpload
