import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blog_container w-full h-[100vh] bg-[#262A33] rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-[#de6021]">Blog</h1>
          <button className="text-gray-400 text-sm border-b cursor-pointer  hover:scale-105  transition-transform duration-300">
            See More
          </button>
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

export default Blog;
