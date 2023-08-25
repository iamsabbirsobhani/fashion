import Navbar from '@/components/Navbar';
import SectionOne from '@/components/section-one';
import SectionThree from '@/components/section-three';
import SectionTwo from '@/components/section-two';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="m-auto">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
