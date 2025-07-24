import Timeline from './Timeline';

const Publications: React.FC = () => {
  const timelineItems = [
    {
      title: 'MINING NON-FUNCTIONAL REQUIREMENTS FROM APP STORE REVIEWS',
      journal: 'Empirical Software Engineering (EMSE Journal)',
      year: '2019',
      link:'https://web.archive.org/web/20220405190520if_/http://nishantjha.com/Publications.html#'
    },
    {
      title: 'LEARNING FROM FAILURE: MODELING USER GOALS IN THE APP MARKET',
      journal: 'IEEE Software Blog',
      year: '2019',
      link:'http://blog.ieeesoftware.org/2019/02/learning-from-failure-modeling-user.html'
    },
    {
      title: 'USING FRAME SEMANTICS FOR CLASSIFYING AND SUMMARIZING APPLICATION STORE REVIEWS',
      journal: 'Empirical Software Engineering (EMSE Journal)',
      year: '2018',
      link:'https://link.springer.com/article/10.1007/s10664-018-9605-x'
    },
    {
      title: 'MARC: A MOBILE APPLICATION REVIEW CLASSIFIER',
      journal: 'Requirements Engineering: Foundation for Software Quality (REFSQ: Tools)',
      year: '2017',
      link:'http://ceur-ws.org/Vol-1796/poster-paper-1.pdf'
    },
    {
      title: 'MINING USER REQUIREMENTS FROM APPLICATION STORE REVIEWS USING FRAME SEMANTICS',
      journal: 'Requirements Engineering: Foundation for Software Quality (REFSQ)',
      year: '2017',
      link:'https://link.springer.com/chapter/10.1007/978-3-319-54045-0_20'
    },
    {
      title: 'ANALYZING USER COMMENTS ON YOUTUBE CODING TUTORIAL VIDEOS',
      journal: 'International Conference on Program Comprehension (ICPC)',
      year: '2017',
      link:'https://dl.acm.org/doi/10.1109/ICPC.2017.26'
    }
  ];

  return (
    <div id="publications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Research & Publications</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Academic Contributions
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Peer-reviewed publications in top-tier conferences and journals.
          </p>
        </div>

        <div className="mt-12">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </div>
  );
};

export default Publications;