export interface JobInfo {
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
  // Location where the job is based
  location: string;
  // Array containing industries related to the job
  industries: string[];
  // Array containing types or categories of the job
  types: string[];
  // Description of the job including responsibilities, requirements, etc.
  description: string;
  // Date when the job was published or made available
  publishDate: string;
}
