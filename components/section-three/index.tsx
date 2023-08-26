import Image from 'next/image';

export default function SectionThree() {
  return (
    <div className=" max-w-[90vw] m-auto mt-10">
      <div className="">
        <h1 className=" text-3xl uppercase font-extrabold">New Arrivals</h1>
      </div>
      <div className=" grid grid-cols-3 gap-4">
        <div className=" ">
          <div className="">
            <Image
              src="/images/section-three/hoodies.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <div>
              <h1>Hoodies & Sweetshirt</h1>
              <p>Explore Now!</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/images/section-three/coats.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <div>
              <h1>Hoodies & Sweetshirt</h1>
              <p>Explore Now!</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/images/section-three/tees.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <div>
              <h1>Hoodies & Sweetshirt</h1>
              <p>Explore Now!</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
