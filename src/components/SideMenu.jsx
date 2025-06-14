import { Link } from "react-router-dom";
import Search from "./Search";
export default function SideMenu() {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to="/posts?cat=all">
          All
        </Link>
        <Link className="underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="underline" to="/posts?cat=databases">
          Databases
        </Link>
        <Link className="underline" to="/posts?cat=seo">
          Search Engines
        </Link>
        <Link className="underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
}
