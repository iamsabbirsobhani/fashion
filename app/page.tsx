import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Navbar />
      <h1 className="text-5xl font-bold text-blue-800">Fashion</h1>
    </main>
  );
}
