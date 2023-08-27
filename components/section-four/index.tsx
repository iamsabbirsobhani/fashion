import Image from 'next/image';

export default function SectionFour() {
  return (
    <div
      className="w-full flex justify-between items-center mt-20"
      style={{
        background:
          'linear-gradient(360deg, #E0C340 0%, #DFC23E 3.93%, #E1C441 7.23%, #E3C743 10.23%, #E4C542 13.14%, #E6C744 16.22%, #E7C845 19.84%, #E5C643 24.38%, #E6C945 31.00%, #E3C743 37.19%, #E9CA48 43.33%, #EDCE49 50.36%, #F0D44C 56.57%, #F4D84F 62.71%, #F6DA52 67.12%, #F7DB53 73.77%, #F9DD55 79.08%, #F9DF56 85.64%, #FAE157 93.50%, #F9DF56 100%)',
      }}
    >
      <div>
        <Image
          src="/images/section-four/yellow-girl.png"
          alt="section-four"
          width={1000}
          height={1000}
          style={{ width: '60%', height: '100%' }}
        />
      </div>
      <div>
        <h1>Payday Sale Now</h1>
        <p>
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <p>1 June - 10 June 2021</p>
        <p>*Terms & Conditions apply</p>
        <div>
          <button className="active:bg-gray-600 transition-all duration-100  text-[22px] my-5 bg-gray-950 rounded-md text-white px-5 py-2 shadow-md font-semibold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
