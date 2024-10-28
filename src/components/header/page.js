import Image from "next/image";
import Avatar from "../../assets/Avatar.png";

export default function header() {
  return (
    <div className="flex justify-between  px-10 w-full pt-4 pb-8">
      {/* Left section with greeting and subtext */}
      <span>
        <p className="font-semibold text-xl text-gray-800">Hi, Tynisha!</p>
        <p className="text-sm text-gray-500">Let’s check your Dashboard today</p>
      </span>

      {/* Right section with avatar and name */}
      <span className="flex  space-x-3">
        {/* Avatar with rounded-full to create a circular image */}
<span>        <Image src={Avatar} alt="User Avatar" width={40} height={40} className="rounded-full" />
</span>        
        <span className="flex flex-col">
          <p className="font-bold text-gray-800">Tynisha Obey</p>
          <p className="text-sm text-gray-500">KATRING</p>
        </span>
      </span>
    </div>
  );
}
