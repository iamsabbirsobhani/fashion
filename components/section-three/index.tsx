import Image from 'next/image';

export default function SectionThree() {
  return (
    <div className="max-w-[90vw] m-auto mt-10">
      <div className="">
        <h1 className="text-3xl uppercase font-extrabold">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="col-1 cursor-pointer group">
          <div className="">
            <Image
              src="/images/section-three/hoodies.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 ">
            <div>
              <h1 className="font-bold text-xl">Hoodies & Sweetshirt</h1>
              <p className="text-gray-500">Explore Now!</p>
            </div>
            <div>
              <svg
                className="group-hover:animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z"
                  fill="#797979"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-2 cursor-pointer group">
          <div>
            <Image
              src="/images/section-three/coats.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 ">
            <div>
              <h1 className="font-bold text-xl">Hoodies & Sweetshirt</h1>
              <p className="text-gray-500">Explore Now!</p>
            </div>
            <div>
              <svg
                className="group-hover:animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z"
                  fill="#797979"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-3 cursor-pointer group">
          <div>
            <Image
              src="/images/section-three/tees.png"
              alt="section-three"
              width={1000}
              height={1000}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 ">
            <div>
              <h1 className="font-bold text-xl">Hoodies & Sweetshirt</h1>
              <p className="text-gray-500">Explore Now!</p>
            </div>
            <div>
              <svg
                className="group-hover:animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
              >
                <path
                  d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z"
                  fill="#797979"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
