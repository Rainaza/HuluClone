import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import hulu from "./../assets/images/hulu-logo-transparent.png";
import Image from "next/image";
import Router, { useRouter } from "next/router";
export const Header = () => {
  const router = useRouter();
  return (
    <header className=" p-5 lg:p-10  flex md:justify-between flex-col md:flex-row   ">
      <div className="flex  sm:space-x-6 md:space-x-8 lg:space-x-10  justify-center space-y-6 ">
        <div className="group flex flex-col justify-center items-center mt-6 md:ml-10 md:w-[60px] w-[40px] text-center">
          <HomeIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[50px]">Home</p>
        </div>
        <div className="group flex flex-col justify-center items-center text-center">
          <BoltIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[50px]">Plan</p>
        </div>
        <div className="group flex flex-col justify-center items-center text-center">
          <CheckBadgeIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[50px]">Subs</p>
        </div>
        <div className="group flex flex-col justify-center items-center text-center">
          <ArchiveBoxIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[55px]">Watched</p>
        </div>
        <div className="group flex flex-col justify-center items-center text-center">
          <MagnifyingGlassIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[50px]">Search</p>
        </div>
        <div className="group flex flex-col justify-center items-center text-center">
          <UserIcon className="headerIcon" />
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out md:w-[60px] w-[50px]">Profile</p>
        </div>
      </div>
      <div
        className="flex justify-center w-full cursor-pointer md:justify-end "
        onClick={() => router.push("/")}
      >
        <Image style={{objectFit:"contain"}} src={hulu} alt="hulu_image" width={150} height={150} />
      </div>
    </header>
  );
};
