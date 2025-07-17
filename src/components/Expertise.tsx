import { useEffect } from 'react';

const Expertise: React.FC = () => {
  useEffect(() => {
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
      setTimeout(() => {
        (badge as HTMLElement).style.opacity = '1';
        (badge as HTMLElement).style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);

  return (
    <div id="expertise" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Technical Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Technical Toolbox
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A blend of cutting-edge technologies and proven methodologies.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cloud Architecture */}
            <div className="pt-6 card-hover transition duration-300 ease-in-out">
              <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <i className="fas fa-cloud text-white text-2xl"></i>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Cloud Architecture</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Designing and implementing scalable, secure cloud solutions across multiple platforms.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Serverless'].map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 opacity-0 translate-y-4"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Add other expertise cards similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;