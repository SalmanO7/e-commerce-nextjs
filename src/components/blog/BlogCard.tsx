import React from "react";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogCard = ({ title, description, img, btnContent }: any) => {
  return (
    <div className="flex justify-start items-center p-3 lg:w-[500px] lg:h-[230px] xl:w-full bg-[#333] text-gray-300">
      <Image src={img} alt={title} className="w-[150px] h-[170px] sm:w-auto  lg:w-[250px] lg:h-[200px]" />
      <div className="content w-[200px] sm:w-full pl-1 ">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-50">
          {title}
        </h1>
        <p className="text-wrap py-1 lg:text-[14px]">{description}</p>
        <button className="w-[120px] mt-4 mb-4 lg:mt-0 xl:mt-4 text-xs border-black px-6 py-2 rounded-sm text-black bg-white font-bold">
          {btnContent}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
