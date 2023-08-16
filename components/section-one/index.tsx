import Image from 'next/image';

export default function SectionOne() {
  return (
    <section className=" section-one mt-10">
      <div className=" max-w-7xl bg-[#F4F6F5] relative rounded-[2rem] flex justify-between z-20">
        <div className=" p-10">
          <div className=" relative font-extrabold text-6xl uppercase">
            <span className="relative top-3 before:absolute before:w-[130%] before:-z-10 before:h-[80%] before:bg-white before:-rotate-2 before:top-1 before:-left-1">
              Let&apos;s
            </span>
            <br /> <span className=" relative top-3"> Explore </span> <br />
            <span className="relative top-3 mt-3 before:absolute before:w-[130%] before:-z-10 before:h-[80%] before:bg-[#EBD96B] before:-rotate-2 before:top-1 before:-left-1">
              Unique
            </span>
            <br />
            <span className=" relative top-3">Clothes.</span>
          </div>
          <p className=" text-xl mt-3">
            Live for influential and innovative fashion!
          </p>
          <div className=" flex items-center justify-between p-5">
            <svg
              width="190"
              height="32"
              viewBox="0 0 190 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30.6152C48 -11.7848 146.667 -1.05149 190 9.61518C176.4 33.6152 57.6667 33.6152 0 30.6152Z"
                fill="#EBD96B"
              />
            </svg>

            <button className="active:bg-gray-600 transition-all duration-100  text-[22px] my-5 bg-gray-950 rounded-md text-white px-5 py-2 shadow-md font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" pr-5">
          <Image
            src="/images/section-one-img.png"
            alt="Fashion"
            width={600}
            height={540}
            style={{
              width: '100%',
              height: 'auto',
            }}
            placeholder="blur"
            blurDataURL="/images/section-one-img.png"
          />
        </div>
      </div>
    </section>
  );
}
