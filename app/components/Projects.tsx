'use client';

import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        {/* 프로젝트 이미지 - 실제 이미지로 교체하세요 */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            데모 보기
          </a>
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
          >
            코드 보기
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '온라인 쇼핑몰',
      description: 'React와 Node.js를 사용하여 개발한 풀스택 이커머스 웹사이트입니다. 사용자 인증, 장바구니, 결제 기능을 구현했습니다.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://example.com/demo1',
      codeUrl: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: '날씨 앱',
      description: 'React와 OpenWeather API를 활용한 날씨 정보 애플리케이션입니다. 위치 기반으로 현재 날씨와 5일 예보를 제공합니다.',
      image: '/projects/weather.jpg',
      tags: ['React', 'API', 'CSS', 'JavaScript'],
      demoUrl: 'https://example.com/demo2',
      codeUrl: 'https://github.com/username/weather-app'
    },
    {
      id: 3,
      title: '할 일 관리 앱',
      description: 'Next.js와 TypeScript로 개발한 할 일 관리 애플리케이션입니다. 사용자는 할 일을 추가, 편집, 삭제할 수 있습니다.',
      image: '/projects/todo.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://example.com/demo3',
      codeUrl: 'https://github.com/username/todo-app'
    },
  ];

  return (
    <section id="projects" className="container-section">
      <h2 className="section-title">프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;