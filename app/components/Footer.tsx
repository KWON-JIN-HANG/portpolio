'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold text-blue-400">포트폴리오</p>
            <p className="text-gray-300 mt-2">프론트엔드 개발자 | UI/UX 디자이너</p>
          </div>
          <div>
            <p className="text-gray-400">
              &copy; {currentYear} 홍길동. 모든 권리 보유.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-6">
            <a href="#about" className="text-gray-300 hover:text-blue-400 mb-2">
              소개
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 mb-2">
              기술 스택
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 mb-2">
              프로젝트
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 mb-2">
              연락처
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;