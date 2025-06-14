import ImageComponent from "./ImageComponent";
import { Link } from "react-router-dom";
export default function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 ">
      {/* image */}
      <div className="md:hidden xl:block xl:w-2/3">
        <ImageComponent
          src="postIMage.jpg"
          className="rounded-3xl object-cover   "
          w="735"
        />{" "}
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-3xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi
          eum aut.
        </Link>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <span>Written by</span>
          <Link className="text-[#183B4E] font-semibold">John Doe</Link>
          <span>on</span>
          <Link className="text-[#183B4E] font-semibold">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          reprehenderit hic consequatur ad rem, accusamus doloribus aspernatur
          dolorem facilis ut quam minus ex illo accusantium laudantium dolorum,
          quisquam sequi at.
        </p>
        <Link
          to="/test"
          className="underline text-blue-800 text-sm font-bold hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
