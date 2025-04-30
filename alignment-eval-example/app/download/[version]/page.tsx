// This is a server component file
import ClientDownloadPage from './client-page';
import { softwareVersions, getVersionSlug } from '@/app/softwareData';

// Define the expected props structure for the page
interface PageProps {
  params: { version: string };
  // You can add searchParams here if needed: searchParams: { [key: string]: string | string[] | undefined };
}

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return softwareVersions.map((software) => ({
    version: getVersionSlug(software),
  }));
}

// Use the defined PageProps interface for the component props
export default function DownloadPage({ params }: PageProps) {
  return <ClientDownloadPage version={params.version} />;
} 