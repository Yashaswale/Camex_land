export interface AIUseCase {
  title: string;
  points: string[];
}

export interface CaseStudyData {
  slug: string;
  title: string;
  location?: string;
  operationalContext: string;
  images: {
    layout: 'grid' | 'individual';
    // For grid layout: array of 3 image URLs
    // For individual layout: array of 2-3 image URLs with optional alt text
    items: Array<{
      url: string;
      alt?: string;
      height?: string; // Optional height override (e.g., 'h-[300px]' or 'h-[280px]')
    }>;
  };
  aiUseCases: AIUseCase[];
  workflowIntegration: string[];
  impactSummary: string[];
}

