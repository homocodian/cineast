import React from "react";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/20/solid";

import HomeIcon from "../assets/icons/Home.svg";
import ProfileIcon from "../assets/icons/Profile.svg";
import ChartIcon from "../assets/icons/Chart.svg";
import DocumentIcon from "../assets/icons/Document.svg";
import MoreIcon from "../assets/icons/More.svg";
import PlayIcon from "../assets/icons/Play.svg";
import Users from "../assets/icons/3 User.svg";

function SideNavbar() {
  const router = useRouter();

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="peer absolute top-4 left-4 z-10 inline-flex items-center justify-center rounded-md p-2">
          <Bars4Icon className="block h-6 w-6 md:hidden" aria-hidden="true" />
        </Disclosure.Button>
        <div className="peer-transition fixed top-0 -left-full z-40 h-screen w-1/2 border-r bg-white p-6 delay-150 duration-200 ease-out peer-focus:left-0 md:left-0 md:w-60 lg:bg-[#F7F7F7]">
          <p className="flex items-center justify-center py-4 font-playfair text-xl font-semibold capitalize">
            cineast
          </p>
          <div className="mt-4 flex flex-col">
            {/* home */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/home"
            >
              <HomeIcon height={15} width={15} />
              <span
                className={`text-sm ${
                  router.pathname == "/home" ? "font-semibold" : ""
                }`}
              >
                Home
              </span>
            </a>
            {/* Community */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/community"
            >
              <Users height={15} width={15} />
              <span
                className={`text-sm ${
                  router.pathname == "/community" ? "font-semibold" : ""
                }`}
              >
                Community
              </span>
            </a>
            {/* Recommendations */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/recommendations"
            >
              <ChartIcon height={15} width={15} />
              <span
                className={`text-sm ${
                  router.pathname == "/recommendations" ? "font-semibold" : ""
                }`}
              >
                Recommendations
              </span>
            </a>
            {/* Reels */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/reels"
            >
              <PlayIcon height={15} width={15} />
              <span
                className={`text-sm ${
                  router.pathname == "/reels" ? "font-semibold" : ""
                }`}
              >
                Reels
              </span>
            </a>
            {/* Lists */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/lists"
            >
              <DocumentIcon height={15} width={15} />
              <span
                className={`text-sm capitalize ${
                  router.pathname == "/lists" ? "font-semibold" : ""
                }`}
              >
                Lists
              </span>
            </a>
            {/* profile */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/profile"
            >
              <ProfileIcon height={15} width={15} />
              <span
                className={`text-sm capitalize ${
                  router.pathname == "/profile" ? "font-semibold" : ""
                }`}
              >
                Profile
              </span>
            </a>
            {/* more */}
            <a
              className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100"
              href="/more"
            >
              <MoreIcon height={15} width={15} />
              <span
                className={`text-sm capitalize ${
                  router.pathname == "/more" ? "font-semibold" : ""
                }`}
              >
                More
              </span>
            </a>
            {/* post */}
            <div className="mt-8 inline-flex w-full items-center justify-center">
              <button className="rounded-full bg-black px-10 py-2 capitalize text-white">
                Post
              </button>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
