// This is a server component file
import ClientDownloadPage from './client-page';
import { softwareVersions, getVersionSlug } from '@/app/softwareData';

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return softwareVersions.map((software) => ({
    version: getVersionSlug(software),
  }));
}

export default function DownloadPage({ params }: { params: { version: string } }) {
  return <ClientDownloadPage version={params.version} />;
} 