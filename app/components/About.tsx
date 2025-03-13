'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="container-section">
      <h2 className="section-title">소개</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            {/* 프로필 이미지 - 실제 이미지로 교체하세요 */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">홍길동</h3>
          <p className="text-lg mb-4">
            프론트엔드 개발자 | UI/UX 디자이너
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            안녕하세요! 저는 사용자 경험을 중요시하는 프론트엔드 개발자입니다. 
            React, Next.js, TypeScript를 주로 사용하며, 
            사용자 친화적인 웹 애플리케이션을 만드는 것에 열정을 가지고 있습니다. 
            디자인과 개발 모두에 관심이 있어 UI/UX 디자인 경험도 있습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              연락하기
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 font-semibold py-2 px-4 rounded-md transition-colors"
            >
              이력서 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;