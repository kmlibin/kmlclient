import Image from "next/image";

import background from "../../public/images/rainbow.svg";
import logo from "../../public/images/logo.png";
import fulllogo from '../../public/images/bluborder.svg'

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col w-full">

      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          fill
          style={{ objectFit: "cover" }}
          alt="CanvaBG"
        />
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>


      <div className="absolute top-10 left-[10rem] z-50">
        <Image src={fulllogo} width={600} alt="logo" />
      </div>

      {/* "Kelli" Image */}
  
    </div>
  );
}