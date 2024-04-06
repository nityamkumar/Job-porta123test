export interface Jobs {
  // Unique identifier for the job
  id: number;
  // Name of the company offering the job
  companyName: string;
  // Title or name of the job position
  title: string;
  // URL or path to the company's logo
  companyLogo: string;
  // Reference code or number associated with the job
  reference: string;
  // Optional property indicating whether the job is marked as favorite
  isFavorite?: boolean;
}
