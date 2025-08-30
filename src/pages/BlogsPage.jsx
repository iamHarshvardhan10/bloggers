import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const BlogsPage = () => {
  return (
    <>
      <div className="bg-[#262a33] h-[10vh] blog_category relative">
        <CarouselSize />
      </div>

      <div className="blog_container w-full h-[100vh] bg-[#262A33] rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-[#de6021]">All Blogs</h1>
        </div>
        <div className="blog_list">
          <div className="blog_content">
            <div>
              <h1 className="text-lg text-white">
                Starting and Growing a Career in Web Design
              </h1>
              <p className="text-gray-600 w-[80%]">
                From honing your skills and building your portfolio to finding
                clients and establishing yourself in the industry.
              </p>
            </div>
            <div className="flex item-center justify-between">
              <span className="text-[12px] text-gray-400">Apr 31, 2025</span>
              <span className="text-[12px] text-gray-400">5 min read</span>
            </div>
          </div>
          <div className="blog_content">
            <div>
              <h1 className="text-lg text-white">
                Starting and Growing a Career in Web Design
              </h1>
              <p className="text-gray-600 w-[80%]">
                From honing your skills and building your portfolio to finding
                clients and establishing yourself in the industry.
              </p>
            </div>
            <div className="flex item-center justify-between">
              <span className="text-[12px] text-gray-400">Apr 31, 2025</span>
              <span className="text-[12px] text-gray-400">5 min read</span>
            </div>
          </div>
          <div className="blog_content">
            <div>
              <h1 className="text-lg text-white">
                Starting and Growing a Career in Web Design
              </h1>
              <p className="text-gray-600 w-[80%]">
                From honing your skills and building your portfolio to finding
                clients and establishing yourself in the industry.
              </p>
            </div>
            <div className="flex item-center justify-between">
              <span className="text-[12px] text-gray-400">Apr 31, 2025</span>
              <span className="text-[12px] text-gray-400">5 min read</span>
            </div>
          </div>
          <div className="blog_content">
            <div>
              <h1 className="text-lg text-white">
                Starting and Growing a Career in Web Design
              </h1>
              <p className="text-gray-600 w-[80%]">
                From honing your skills and building your portfolio to finding
                clients and establishing yourself in the industry.
              </p>
            </div>
            <div className="flex item-center justify-between">
              <span className="text-[12px] text-gray-400">Apr 31, 2025</span>
              <span className="text-[12px] text-gray-400">5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;

const CarouselSize = () => {
  return (
    <Carousel className="w-full absolute top-[-25px]">
      <CarouselContent>
        {["All", "Education", "Sports", "Tech", "Life", "Science"].map(
          (item, index) => (
            <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/5">
              <div className="">
                <div className="flex  aspect-square items-center justify-center gap-0">
                  <span
                    className={`text-lg  ${
                      item == "All" ? "text-[#de6021]" : "text-white"
                    } cursor-pointer`}
                  >
                    {item}
                  </span>
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className={"absolute top-[125px] left-[85%]"} />
      <CarouselNext className={"absolute  top-[125px] right-[3%]"} />
    </Carousel>
  );
};
