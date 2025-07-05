# API 管理平台

一个基于 Vue 3 和 Element Plus 的 API 管理平台，用于展示和管理 API 列表、状态和文档，支持移动端和 PC 端适配

## 技术栈

- **前端框架**：Vue 3
- **UI 组件库**：Element Plus
- **Markdown 渲染**：marked + highlight.js
- **数据加载**：js-yaml + axios
- **路由**：vue-router
- **构建工具**：Vite

## 安装步骤

1. **克隆仓库**：
   ```bash
   git clone https://github.com/YShenZe/ZeAPI.git
   cd ZeAPI
   ```

2. **安装依赖**：
   ```bash
   pnpm install
   ```

3. **准备数据**：
   - 确保 `public/data.yml` 包含 API 数据，格式如下：
     ```yaml
     apis:
       - name: User API
         description: 用户管理接口
         endpoint: https://api.example.com/user
         statusUrl: https://api.example.com/user/status
         docFile: user-api.md
     ```
   - 确保 `public/docs/` 包含 Markdown 文件（如 `user-api.md`）。

4. **运行开发服务器**：
   ```bash
   pnpm dev
   ```
   访问 `http://localhost:5173` 查看项目。