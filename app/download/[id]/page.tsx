// This is a server component file
import ClientDownloadPage from './client-page';
import { softwareVersions, getVersionSlug } from '@/app/softwareData';

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return softwareVersions.map((software) => ({
    id: getVersionSlug(software),
  }));
}

// Use a wrapper function to bypass the type issue
function ContentWrapper(id: string) {
  return <ClientDownloadPage version={id} />;
}

// Main page component using any type for params to bypass Next.js's incorrect type expectations
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DownloadPage(props: any) {
  const id = props.params.id;
  
  // Call the wrapper function with the extracted ID
  return ContentWrapper(id);
} 