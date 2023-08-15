import Image from 'next/image';

export default function DeskNav() {
  return (
    <nav className="">
      <ul className="flex justify-between">
        <li className="flex justify-center items-center">
          <div className="mr-1">
            <Image
              src="/images/Vector.svg"
              alt="Fashion"
              width={30}
              height={30}
            />
          </div>
          <h1 className="uppercase text-3xl font-extrabold">Fashion</h1>
        </li>

        <li className="">
          <ul className=" flex justify-center items-center">
            <li>
              <div>
                <button className=" text-[22px] m-5">Catalogue</button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[22px] m-5">Fashion</button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[22px] m-5">Favourite</button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[22px] m-5">Lifestyle</button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[22px] m-5 bg-gray-950 rounded-md text-white px-5 py-2">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
