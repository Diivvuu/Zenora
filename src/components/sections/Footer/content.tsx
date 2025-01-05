import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { ChevronRight, Send } from "lucide-react";
import React from "react";

type List = {
  el: string;
};

const TagCloudList: List[] = [
  { el: "CASH" },
  { el: "MEMO" },
  { el: "NICE" },
  { el: "POCO" },
  { el: "SWEET" },
  { el: "TASTY" },
];

export default function Content() {
  return (
    <div className="bg-[#4E4E5A] h-full pt-36 px-28 w-full flex justify-between items-start text-white">
      <div className="w-2/12 px-4">
        <div className="text-xl font-semibold my-12">Colorlib</div>
        <div className="text-wrap text-lg text-gray-400">
          A small river named Draken flows by their place and supplies it with
          necessary
        </div>
        <div className="text-lg base flex items-center mt-2">
          read more
          <span>
            <ChevronRight className="size-4 mt-2" />
          </span>
        </div>
      </div>
      <div className="w-2/12 px-4">
        <div className="text-xl font-semibold my-12">CATEGORIES</div>
        <div className="text-lg">Buy & Sell</div>
        <div className="mt-2 text-lg">Merchant</div>
        <div className="mt-2 text-lg">Giving back</div>
        <div className="mt-2 text-lg">Help & Support</div>
      </div>
      <div className="w-2/12 px-4">
        <div className="text-xl font-semibold my-12">TAG CLOUD</div>
        <div className="flex w-full gap-2 flex-wrap ">
          {TagCloudList.map((item, index) => {
            return (
              <div
                className="rounded-lg border-[1.5px] border-white w-fit px-1 py-1 font-semibold"
                key={index}
              >
                {item.el}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-2/12 px-4">
        <div className="text-xl font-semibold my-12">SUBSCRIBE</div>
        <div className="flex items-center">
          <div>
            <input
              className="bg-zinc-700 px-3 py-5 rounded-l-xl"
              placeholder="Enter your Email address"
            />
          </div>
          <div className="bg-yellow-500 px-4 py-5 rounded-r-xl">
            <Send className="size-6" />
          </div>
        </div>
        <div className="mt-8 text-lg font-semibold">FOLLOW US</div>
        <div className="flex items-center gap-x-2 mt-4">
          <div className="border-2 border-white rounded-xl p-1">
            <IconBrandTwitter className="size-8" />
          </div>
          <div className="border-2 border-white rounded-xl p-1">
            <IconBrandFacebook className="size-8" />
          </div>
          <div className="border-2 border-white rounded-xl p-1">
            <IconBrandInstagram className="size-8" />
          </div>
        </div>
      </div>
      {/* <Section1 /> */}
      {/* <Section2 /> */}
    </div>
  );
}

// const Section1 = () => {
//   return (
//     <div>
//       <Nav />
//     </div>
//   );
// };

// const Section2 = () => {
//   return (
//     <div className="flex justify-between items-end">
//       <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
//       <p>©copyright</p>
//     </div>
//   );
// };

// const Nav = () => {
//   return (
//     <div className="flex shrink-0 gap-12">
//       <div className="flex flex-col gap-2">
//         <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
//         <p>Home</p>
//         <p>Projects</p>
//         <p>Our Mission</p>
//         <p>Contact Us</p>
//       </div>
//       <div className="flex flex-col gap-2">
//         <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
//         <p>News</p>
//         <p>Learn</p>
//         <p>Certification</p>
//         <p>Publications</p>
//       </div>
//     </div>
//   );
// };
