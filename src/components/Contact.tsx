const Contact: React.FC = () => {
  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Get In Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let's Collaborate
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Interested in discussing architecture challenges, research opportunities, or consulting engagements?
          </p>

          <div className="lg:text-center mt-8">
            <div className="flex items-center justify-start lg:justify-center">
              <div className="flex-shrink-0">
                <i className="fas fa-envelope text-indigo-500"></i>
              </div>
              <div className="ml-3 text-base text-gray-500">
                <a href="mailto:nishant_jha@outlook.com" className="font-medium text-gray-900 hover:text-indigo-600">
                  nishant_jha@outlook.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:text-center">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Connect with me</h4>
                  <div className="mt-8 space-x-6">
                    {[
                      { platform: 'linkedin', url: 'https://www.linkedin.com/in/nishant-jha-ph-d-3707a44a/' },
                      { platform: 'google-scholar', url: 'https://scholar.google.com/citations?user=7hh-k7kAAAAJ&hl=en' },
                      { platform: 'researchgate', url: 'https://www.researchgate.net/profile/Nishant-Jha-5' }
                    ].map(({ platform, url }) => (
                      <a key={platform} href={url} className="text-gray-400 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
                      <i className={`fab fa-${platform} text-2xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
        </div>
          </div>
    </div>
  );
};

export default Contact;