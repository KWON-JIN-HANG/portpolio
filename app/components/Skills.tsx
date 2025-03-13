'use client';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful API', 'GraphQL'];
  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Webpack'];
  
  return (
    <section id="skills" className="container-section bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">기술 스택</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard title="프론트엔드" skills={frontendSkills} />
        <SkillCard title="백엔드" skills={backendSkills} />
        <SkillCard title="도구 및 기타" skills={toolsSkills} />
      </div>
    </section>
  );
};

export default Skills;