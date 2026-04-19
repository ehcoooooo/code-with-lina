// components/Footer.js
export default function Footer() {
  return (
    <footer className="py-12 px-4 glass-effect backdrop-blur-lg">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">张丽娜</h3>
            <p className="text-gray-400">大数据开发工程师</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a href="mailto:18438631368@163.com" className="hover:text-blue-500 transition-colors">邮箱</a>
              <a href="https://github.com/ehcooooo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-500 transition-colors">微信</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 张丽娜. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}