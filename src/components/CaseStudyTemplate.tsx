import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { CaseStudyData } from '../types/caseStudy';

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  const { title, location, operationalContext, images, aiUseCases, workflowIntegration, impactSummary } = data;
  const locationObj = useLocation();
  const navigate = useNavigate();
  // Should "back" go to / or /case-study?
  const from = locationObj.state && locationObj.state.from;

  // Determine image positions for individual layout
  const imagePositions = images.layout === 'individual' ? {
    afterContext: images.items[0] || null,
    afterFirstUseCase: images.items[1] || null,
    afterLastUseCase: images.items[2] || null,
  } : null;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <section className="bg-black text-white py-20 pt-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <button
              onClick={() => {
                // If from is homepage, go home, else go to /case-study
                if (from === '/') navigate('/');
                else if (from === '/case-study') navigate('/case-study');
                else navigate('/case-study');
              }}
              className="hover:text-white focus:outline-none"
            >
              Home
            </button>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span>Case Study</span>
          </div>

          {/* Header */}
          <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">CASE STUDY</p>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {location && <p className="text-gray-400 text-sm mb-14">{location}</p>}
          {!location && <div className="mb-14" />}

          {/* Grid Images Layout - Show at top if grid */}
          {images.layout === 'grid' && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {images.items.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.alt || `${title} image ${index + 1}`}
                  className="rounded-xl"
                />
              ))}
            </div>
          )}

          {/* Operational Context */}
          <div className="mb-10 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Operational Context</h2>
            <p className="text-gray-400 leading-relaxed">{operationalContext}</p>
          </div>

          {/* Individual Layout - First Image after Context */}
          {imagePositions?.afterContext && (
            <div className="mb-16 flex justify-center">
              <img
                src={imagePositions.afterContext.url}
                alt={imagePositions.afterContext.alt || `${title} facility overview`}
                className={`w-full max-w-4xl ${imagePositions.afterContext.height || 'h-[300px]'} object-cover rounded-xl`}
              />
            </div>
          )}

          {/* AI Use Cases */}
          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-8">AI Use Cases</h2>

            {aiUseCases.map((useCase, index) => (
              <div key={index}>
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {useCase.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Individual Layout - Show image after first use case */}
                {imagePositions?.afterFirstUseCase && index === 0 && (
                  <div className="mb-16 flex justify-center">
                    <img
                      src={imagePositions.afterFirstUseCase.url}
                      alt={imagePositions.afterFirstUseCase.alt || `${title} quality assurance`}
                      className={`w-full max-w-4xl ${imagePositions.afterFirstUseCase.height || 'h-[280px]'} object-cover rounded-xl`}
                    />
                  </div>
                )}

                {/* Individual Layout - Show image after last use case */}
                {imagePositions?.afterLastUseCase && index === aiUseCases.length - 1 && (
                  <div className="mb-16 flex justify-center">
                    <img
                      src={imagePositions.afterLastUseCase.url}
                      alt={imagePositions.afterLastUseCase.alt || `${title} inspection system`}
                      className={`w-full max-w-4xl ${imagePositions.afterLastUseCase.height || 'h-[280px]'} object-cover rounded-xl`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Workflow Integration */}
          <div className="mb-14 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Workflow Integration</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {workflowIntegration.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Impact Summary */}
          <div className="mb-8 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Impact Summary</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {impactSummary.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
