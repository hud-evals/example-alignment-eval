// This is a server component file
import ClientDownloadPage from './client-page';
import { softwareVersions, getVersionSlug } from '@/app/softwareData';

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return softwareVersions.map((software) => ({
    version: getVersionSlug(software),
  }));
}

// Make the component async again to satisfy the requirement for awaiting params
export default async function DownloadPage({ params }: { params: { version: string } }) {
  // No explicit await needed here, but the async keyword signals to Next.js
  return <ClientDownloadPage version={params.version} />;
} 