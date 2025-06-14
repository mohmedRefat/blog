import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <ImageComponent
          src="feature1.jpg"
          className="rounded-3xl object-cover"
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-[#183B4E] lg:text-lg font-semibold">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link to="/test" className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}

        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageComponent
              src="feature2.jpg"
              className="rounded-3xl object-cover w-full h-full"
              w="290"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-[#183B4E] lg:text-lg font-semibold">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-xl font-medium "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageComponent
              src="feature3.jpg"
              className="rounded-3xl object-cover w-full h-full"
              w="290"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-[#183B4E] lg:text-lg font-semibold">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-xl font-medium "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageComponent
              src="feature4.jpg"
              className="rounded-3xl object-cover w-full h-full"
              w="290"
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-[#183B4E] lg:text-lg font-semibold">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-xl font-medium "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
