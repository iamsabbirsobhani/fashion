import Image from 'next/image';

export default function SectionOne() {
  return (
    <section className=" section-one mt-10">
      <div className=" max-w-7xl bg-[#F4F6F5] relative rounded-[2rem] flex justify-between z-20">
        <div className=" p-10">
          <div className=" relative font-extrabold text-6xl uppercase">
            <span className="relative before:absolute before:w-[130%] before:-z-10 before:h-[80%] before:bg-white before:-rotate-2 before:top-1 before:-left-1">
              Let&apos;s
            </span>
            <br /> <span className=""> Explore </span> <br />
            <span className="relative top-1 mt-3 before:absolute before:w-[130%] before:-z-10 before:h-[80%] before:bg-[#EBD96B] before:-rotate-2 before:top-1 before:-left-1">
              Unique
            </span>
            <br />
            <span className=" relative top-1">Clothes.</span>
          </div>
          <p className=" text-xl">
            Live for influential and innovative fashion!
          </p>
          <div>
            <button className=" text-[22px] my-5 bg-gray-950 rounded-md text-white px-5 py-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className=" pr-5">
          <Image
            src="/images/section-one-img.png"
            alt="Fashion"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
