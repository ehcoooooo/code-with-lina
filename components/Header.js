// components/Header.js
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="fixed w-full z-50 glass-effect py-4 px-6 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">张丽娜</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-500 transition-colors">关于我</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition-colors">技能</a></li>
            <li><a href="#experience" className="hover:text-blue-500 transition-colors">经历</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition-colors">项目</a></li>
            <li><a href="#learning" className="hover:text-blue-500 transition-colors">学习</a></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full glass-effect hover:scale-110 transition-transform"
          aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-300" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
}