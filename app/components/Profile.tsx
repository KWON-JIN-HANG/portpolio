'use client';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="space-y-8">
      <div className="section-title">
        Profile : Title
      </div>
      
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="w-[180px] h-[250px] relative rounded-2xl overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={232}
            height={328}
            style={{ objectFit: 'cover' }}
            className="hover:scale-110 transition-transform duration-300"
            priority
            unoptimized
          />
        </div>
        
        {/* Profile Info */}
        <div className="text-center space-y-3">
          <div className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300 font-medium">
            I AM
          </div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            이름 : 이름
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            포지션: PM 서비스 기획 / FE Developer(jr)
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            _Contact
          </h3>
          <div className="space-y-2 pl-7">
            <p className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span className="w-16">Email</span>
              <span className="mx-2">:</span>
              <a href="mailto:keepro@naver.com">keepro@naver.com</a>
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span className="w-16">Phone</span>
              <span className="mx-2">:</span>
              <a href="tel:+821012345678">+082 - 1234-5678</a>
            </p>
          </div>
        </div>
        
        {/* Channel Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            _Channel
          </h3>
          <div className="space-y-3 pl-7">
            <div className="flex items-center space-x-2">
              <span className="w-16 text-gray-600 dark:text-gray-400">SNS</span>
              <span className="text-gray-400">:</span>
              <a href="#" className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors text-center">
                SNS 링크
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-16 text-gray-600 dark:text-gray-400">GitHub</span>
              <span className="text-gray-400">:</span>
              <a href="#" className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors text-center">
                GitHub 링크
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;