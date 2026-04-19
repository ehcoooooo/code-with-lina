// app/layout.js
import './globals.css';

export const metadata = {
  title: '张丽娜 - 个人网站',
  description: '大数据开发工程师的个人主页 - 展示项目与学习成果',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}