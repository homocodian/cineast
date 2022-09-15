import React from "react";

import { Searchbar } from "./";

function Navbar() {
  return (
    <div className="ml-[48px] flex h-16 items-center gap-8 md:ml-0">
      <Searchbar />
      <ul className="flex items-center justify-center gap-4 overflow-hidden text-xs md:text-base">
        <li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          <a href="/movies" className="capitalize">
            Movies
          </a>
        </li>
        <li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          <a href="/tvshows" className="capitalize">
            Tv Shows
          </a>
        </li>
        <li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          <a href="/news" className="capitalize">
            News
          </a>
        </li>
        <li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          <a
            href="streamparties"
            className="overflow-hidden text-ellipsis whitespace-nowrap capitalize"
          >
            Stream Parties
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
