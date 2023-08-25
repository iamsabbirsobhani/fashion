import Image from 'next/image';

export default function SectionTwo() {
  return (
    <div className=" w-full bg-[#EBD96B] p-10 mt-14 flex justify-between items-center">
      <div>
        <Image
          src="/images/section-two/hm-logo.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>
      <div>
        <Image
          src="/images/section-two/obey.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>
      <div>
        <Image
          src="/images/section-two/shopify.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>
      <div>
        <Image
          src="/images/section-two/lacoste.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>
      <div>
        <Image
          src="/images/section-two/levis.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>

      <div>
        <Image
          src="/images/section-two/amazon.png"
          alt="section-two"
          width={120}
          height={60}
        />
      </div>
    </div>
  );
}
