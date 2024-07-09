// import ScrollSlider from "@/components/homepage/custom_slider";
// import HomePageContent from "@/components/homepage/homePage";
// import Sidebar from "@/components/sidebar/sidebar";
import BlogPage from "@/components/blogspage/blogsPage";
import SubBlogPage from "@/components/subBlogPage/SubBlogPage";
import DiscoverShop from "@/components/discovershop/discoverShop";
import dynamic from "next/dynamic";
import DiscoverExclusive from "@/components/discoverexclusive/discoverExclusive";

const CustomSlider = dynamic(
  () => import("@/components/homepage/custom_slider"),
  {
    suspense: true,
  }
);
export default function Home() {
  return (
    <main className="z-0 px-4 bg-white 2xl:px-x-pad md:px-8 w-full mt-24 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      {/* <Responsive_profile_name /> */}
      {/* <BlogPage /> */}
      {/* <SubBlogPage /> */}
      <DiscoverShop />
      {/* <DiscoverExclusive /> */}
      {/* <ScrollSlider /> */}

      {/* <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <HomePageContent />
        <Sidebar />
      </div> */}
    </main>
  );
}
