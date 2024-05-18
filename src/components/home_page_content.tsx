import React from "react";
import HomeFilters from "./filters_home";
import HomeDealCard from "./home_deal_card";

const HomePageContent = () => {
  return (
    <div className="md_lg:col-span-5 md:col-span-7   border-gray-300 rounded-lg">
      <div className="flex md:items-end justify-between md:flex-row flex-col items-start   gap-2 md:mb-0   min-h-11 ">
        <div className=" ">
          <h1 className="text-[1.5rem] not-italic text-dealguru-black font-bold">
            Bästa dealsen just nu
          </h1>
        </div>
        <HomeFilters />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 mt-3 gap-4">
        <HomeDealCard />
        <HomeDealCard />
        <HomeDealCard />
        <HomeDealCard />
      </div>
    </div>
  );
};

export default HomePageContent;
