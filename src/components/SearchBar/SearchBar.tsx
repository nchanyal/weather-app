import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import searchIcon from "../../../public/normal-icons/icon-search.svg";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[41rem] w-full h-14 radius-12 grid grid-cols-[525fr_114fr] gap-4">
        <div className="relative h-full">
          <Image
            src={searchIcon}
            alt="Magnifying glass"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-200"
          />
          <Input
            type="text"
            placeholder="Search for a place..."
            className="bg-neutral-800 hover:bg-neutral-700 h-full border-0 radius-12 pl-15 placeholder:text-neutral-200 text-neutral-200 text-preset-5-medium 
            focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-3 focus-visible:ring-offset-neutral-900"
          />
        </div>
        <Button
          className="h-full radius-12 bg-blue-500 hover:bg-blue-700 text-neutral-0 text-preset-5-medium border-0
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-3 focus:ring-offset-neutral-900"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
