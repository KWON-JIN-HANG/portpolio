'use client';

const TechSkill = () => {
  const skills = [
    { 
      name: 'JS',
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-900',
      bgColor: 'bg-yellow-100'
    },
    { 
      name: 'TS',
      color: 'from-blue-400 to-blue-500',
      textColor: 'text-blue-900',
      bgColor: 'bg-blue-100'
    },
    { 
      name: 'React',
      color: 'from-cyan-400 to-cyan-500',
      textColor: 'text-cyan-900',
      bgColor: 'bg-cyan-100'
    },
    { 
      name: 'Tailwindcss',
      color: 'from-teal-400 to-teal-500',
      textColor: 'text-teal-900',
      bgColor: 'bg-teal-100'
    },
    { 
      name: 'Premierepro',
      color: 'from-purple-400 to-purple-500',
      textColor: 'text-purple-900',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="section-title">
        Tech Skill
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`${skill.bgColor} dark:bg-opacity-10 rounded-xl p-4 transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-medium ${skill.textColor} dark:text-white`}>
                  {skill.name}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg flex items-center justify-center`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkill;