import Navbar from '@/components/Navbar';
import SectionOne from '@/components/section-one';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Navbar />
      <SectionOne />
    </main>
  );
}
