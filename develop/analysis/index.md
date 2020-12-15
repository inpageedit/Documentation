# InPageEdit Anlysis 文档

## API 版本列表

### V1 <status status="error">已停用</status>

> 数据存档：https://common.wjghj.cn/-/148

- 服务器：Guangzhou, Wjghj Tencent
- 数据中心：MariaDB, innoDB
- 后端实现：PHP + NGINX

### V2 <status status="done">生产阶段</status>

> API 接入点：https://doc.wjghj.cn/inpageedit-v2/analysis/api/
> 文档：[V2 documentation](/develop/analysis/v2/)

- 服务器：Guangzhou, Wjghj Tencent > Beijing, Wjghj Aliyun
- 数据中心：mongoDB Server 4.4
- 前端实现：Hexo + 
- 后端实现：PHP + NGINX

### V3 <status status="warining">不推荐</status>

> API 接入点：https://api.wjghj.cn/inpageedit/
> 文档：[V3 documentation](/develop/analysis/v3/)

- 服务器：Beijing, Wjghj Aliyun
- 数据中心：mongoDB Server 4.4
- 前端实现：Vue + axios + ECharts
- 后端实现：Express Server + Node.js + NGINX

### V4 <status status="dev">开发阶段</status>

> API 接入点：https://analysis.ipe.wjghj.cn/api/v4
> 文档：[V4 documentation](/develop/analysis/v4/)

- 服务器：Vercel
- 数据中心：MongoDB Atlas, AWS / Oregon (us-west-2)
- 前端实现：-
- 后端实现：Vercel serverless Node.js API
