import Image from 'next/image';

export default function DeskNav() {
  return (
    <nav>
      <div className="flex justify-center items-center">
        <div className="mr-1">
          <Image
            src="/images/Vector.svg"
            alt="Fashion"
            width={30}
            height={30}
          />
        </div>
        <h1 className="uppercase text-3xl font-extrabold">Fashion</h1>
      </div>
    </nav>
  );
}
