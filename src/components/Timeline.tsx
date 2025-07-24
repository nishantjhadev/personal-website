import { useEffect, useRef } from 'react';

interface TimelineItem {
  title: string;
  journal: string;
  year: string;
  link: string; // Added link property
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    if (items) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, 300 * index);
      });
    }
  }, []);

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 flex justify-between items-center w-full timeline-item ${
            index % 2 === 1 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-10 flex items-center order-1 bg-indigo-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4">
            <h3 className="mb-1 font-bold text-gray-800 text-md">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-700 flex items-center gap-1">
                {item.title}
              </a>
            </h3>
            <p className="text-sm text-black-600">{item.journal}, {item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;