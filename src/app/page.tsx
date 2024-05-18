import Category_slider from "@/components/category_slider";
import HomePageContent from "@/components/home_page_content";
import HomePageFilters from "@/components/home_page_content";
import Sidebar from "@/components/sidebar/sidebar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="z-0 px-x-pad max-md:px-4 w-full mt-28">
      <Category_slider />

      <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}
