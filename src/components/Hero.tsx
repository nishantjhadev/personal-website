const Hero: React.FC = () => {
  return (
    <div className="gradient-bg pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-10 mx-auto max-w-md sm:max-w-lg lg:mt-0 lg:mx-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl sm:leading-tight lg:text-6xl">
              <span className="block">NISHANT JHA</span>
              <span className="block text-indigo-200">Solutions Architect</span>
            </h1>
            <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bridging academic research with practical enterprise solutions. Transforming complex problems into scalable architectures.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Get in touch
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#publications" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                  View Publications
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg bg-white p-4 max-w-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <i className="fas fa-user text-indigo-600"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">NISHANT JHA</p>
                    <p className="text-xs text-gray-500">PhD Computer Science</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Available
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Current Role:</p>
                  <p className="font-medium">Solutions Architect at Credera</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Specialization:</p>
                  <p className="font-medium">Software Engineering | Business Analysis | Research</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Recent Achievement:</p>
                  <p className="font-medium">Led end-to-end development of an innovative case management solution for law enforcement, built from the ground up over 18 months.</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  {/* <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                    <i className="fas fa-check-circle mr-1"></i> AWS Certified
                  </span> */}
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    <i className="fas fa-certificate mr-1"></i> PhD
                  </span>
                </div>
                <a 
                  href="/Nishant_Jha_Resume_2025.pdf"
                  className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                  download
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;