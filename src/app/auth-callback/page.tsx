import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const origin = useSearchParams().get('origin');
  return <div>Page</div>;
};

export default Page;
