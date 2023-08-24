import Image from 'next/image';

export default function SectionTwo() {
  return (
    <div className=" w-full bg-[#EBD96B] p-10 mt-14 flex justify-between">
      <div>
        <Image
          src="/images/section-two/hdotm.svg"
          alt="section-two"
          width={500}
          height={500}
        />
      </div>
      <div>Obey</div>
      <div>Shopify</div>
      <div>Lacoste</div>
      <div>Levis</div>
    </div>
  );
}
