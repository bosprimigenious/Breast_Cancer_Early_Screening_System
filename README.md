# 乳腺癌早期筛查系统

基于React + TypeScript + Ant Design开发的乳腺癌早期筛查与风险评估Web应用。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI组件库**: Ant Design
- **图表库**: Recharts
- **路由**: React Router DOM
- **文件处理**: React Dropzone
- **样式**: CSS3 + Ant Design主题

## 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 公共组件
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页
│   ├── DataUpload.tsx  # 数据上传
│   ├── RiskPrediction.tsx # 风险预测
│   ├── PersonalizedAdvice.tsx # 个性化建议
│   └── HealthEducation.tsx # 健康科普
├── App.tsx             # 主应用组件
├── main.tsx           # 应用入口
└── index.css          # 全局样式
```


### 用户体验优化
- 加载状态提示
- 错误处理和提示
- 操作确认机制
- 帮助文档和说明



### 样式规范
- 使用Ant Design设计系统
- 响应式设计原则
- 统一的色彩和字体规范
- 组件化样式管理

## 部署说明

### 静态部署
```bash
npm run build
# 将dist目录部署到静态服务器
```

### Docker部署
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 注意事项

1. **医疗免责声明**: 本系统仅供健康教育和参考使用，不能替代专业医疗诊断
2. **数据安全**: 上传的文件仅用于分析，不会永久存储
3. **浏览器兼容**: 建议使用现代浏览器以获得最佳体验
4. **网络要求**: 需要稳定的网络连接以支持文件上传

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: [bosprimigenious@foxmail.com]
- 项目地址: [https://github.com/bosprimigenious/Breast_Cancer_Early_Screening_System]

---

**重要提醒**: 本系统仅用于健康教育和参考，如有任何健康问题，请及时咨询专业医生。
