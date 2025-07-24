const About: React.FC = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            From Academia to Enterprise Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Combining theoretical knowledge with practical implementation experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden p-6 h-full">
                <div className="pb-5 border-b border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Academic Background</h3>
                </div>
                <div className="mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <i className="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">PhD in Computer Science</h4>
                      <p className="mt-1 text-gray-600">Louisiana State University, 2018</p>
                      <p className="mt-2 text-gray-600">
                        Dissertation: Effective methods and tools for mining app store reviews
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <i className="fas fa-book text-white text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Research Focus</h4>
                      <p className="mt-2 text-gray-600">
                        Mining user reviews from mobile app stores to support software maintenance and app sustainability. Key limitations in existing techniques were addressed by developing semantically aware methods for classifying both functional and non-functional requirements from user feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden p-6 h-full">
                <div className="pb-5 border-b border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Professional Background</h3>
                </div>
                <div className="mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <i className="fas fa-briefcase text-white text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Solutions Architect</h4>
                      <p className="mt-1 text-gray-600">Credera, 2022-Present</p>
                      <p className="mt-2 text-gray-600">
                        Leading architecture projects for Fortune 500 clients, designing scalable solutions, and bridging the gap between business needs and technical implementation.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-start">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Career Focus</h4>
                      <p className="mt-2 text-gray-600">
                        Leveraging research to solve real-world enterprise challenges. Passionate about architecting systems that are both theoretically sound and practically efficient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;