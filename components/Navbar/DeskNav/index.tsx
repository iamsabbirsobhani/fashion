import Image from 'next/image';
import Link from 'next/link';

export default function DeskNav() {
  return (
    <nav className="">
      <ul className="flex justify-between items-center p-5">
        <Link href="/">
          <li className="flex justify-center items-center cursor-pointer">
            <div className="mr-1">
              <Image
                src="/images/Vector.svg"
                alt="Fashion"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-3xl font-extrabold uppercase">Fashion</h1>
          </li>
        </Link>

        <li className="">
          <ul className=" flex justify-center items-center">
            <li>
              <div>
                <button className=" text-[16px] m-5 uppercase">
                  Catalogue
                </button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[16px] m-5 uppercase">Fashion</button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[16px] m-5 uppercase">
                  Favourite
                </button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[16px] m-5 uppercase">
                  Lifestyle
                </button>
              </div>
            </li>

            <li>
              <div>
                <button className=" text-[16px] m-5 bg-gray-950 rounded-md text-white px-5 py-2 uppercase">
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
