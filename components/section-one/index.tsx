import Image from 'next/image';

export default function SectionOne() {
  return (
    <section className=" section-one mt-10">
      <div className=" max-w-7xl bg-[#F4F6F5] relative rounded-[2rem] flex justify-between z-20">
        <div className=" p-10">
          <h1 className=" font-extrabold text-6xl">
            <span className=" relative before:absolute before:w-[130%] before:-z-10 before:h-full before:bg-white before:-rotate-2 before:-top-2 before:-left-1">
              Let&apos;s
            </span>
            <br /> <span> Explore </span> <br /> <span>Unique</span> <br />{' '}
            Clothes.
          </h1>
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
