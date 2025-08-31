import React from "react";
import blogBanner from "../assets/asset 2.jpeg";
const SingleBlog = () => {
  return (
    <>
      <div className="blog_title w-full min-h-[30vh] bg-[#262a33] rounded-lg">
        <h1 className="text-4xl text-white text-center font-bold">
          Starting and Growing a Career in Web Design
        </h1>
        <p className="text-md text-center text-gray-600">
          From honing your skills and building your portfolio to finding clients
          and establishing yourself in the industry.
        </p>
        <p className="text-center text-gray-600">Apr 8, 2022</p>
      </div>
      <div className="blog_container w-full min-h-[100vh] bg-[#262A33] rounded-lg">
        <img src={blogBanner} alt="" />
        <p className="text-gray-400 text-sm">
          As the internet continues to develop and grow exponentially, jobs
          related to the industry do too, particularly those that relate to web
          design and development. The prediction is that by 2029, the job
          outlook for these two fields will grow by 8%—significantly faster than
          average. Whether you’re seeking salaried employment or aiming to work
          in a freelance capacity, a career in web design can offer a variety of
          employment arrangements, competitive salaries, and opportunities to
          utilize both technical and creative skill sets.
        </p>

        <h5 className="text-white text-xl">
          What does a career in web design involve?
        </h5>
        <p className="text-gray-400 text-sm">
          A career in website design can involve the design, creation, and
          coding of a range of website types. Other tasks will typically include
          liaising with clients and discussing website specifications,
          incorporating feedback, working on graphic design and image editing,
          and enabling multimedia features such as audio and video. Requiring a
          range of creative and technical skills, web designers may be involved
          in work across a range of industries, including software companies, IT
          consultancies, web design companies, corporate organizations, and
          more. In contrast with web developers, web designers tend to play a
          more creative role, crafting the overall vision and design of a site,
          and determining how to best incorporate the necessary functionality.
          However, there can be significant overlap between the roles.
        </p>
      </div>
    </>
  );
};

export default SingleBlog;
