'use client';

const Introduce = () => {
  return (
    <div className="space-y-8">
      <div className="section-title">
        Introduce
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            간단한 자기소개 및 인사말
          </h3>
        </div>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
          <p className="leading-relaxed">
            안녕하세요! 저는 사용자 경험을 중요시하는 주니어 프론트엔드 개발자입니다.
            서비스 기획과 개발 모두에 관심이 있어 PM 경험도 쌓고 있습니다.
          </p>
          <p className="leading-relaxed">
            새로운 기술을 배우고 적용하는 것을 좋아하며,
            팀원들과의 협업을 통해 더 나은 서비스를 만들어가는 것이 목표입니다.
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <div className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400">
            <span className="mr-2">더 알아보기</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;