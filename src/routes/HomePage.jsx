import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-[#183B4E]">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-[#183B4E] text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative">
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-[#DDA853] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 5v14m-7-7h14" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />

      {/* <MainCategories /> */}
      {/* FEATURED POSTS */}
      {/* <FeaturedPosts/>   */}
      <FeaturedPosts />
      {/* <FeaturedPosts /> */}
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        {/* <PostList/> */}
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
