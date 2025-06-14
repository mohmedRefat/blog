import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-[#183B4E]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam modi
            eum aut.
          </h1>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Written by</span>
            <Link className="text-[#183B4E] font-semibold">John Doe</Link>
            <span>on</span>
            <Link className="text-[#183B4E] font-semibold">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-600 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptas, quae, quidem, fugiat quos quibusdam voluptates doloribus
            ipsam doloremque repellendus. Quaerat, laborum consequuntur
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageComponent src="postIMage.jpg" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore dignissimos illum, sunt expedita rerum, eligendi ut qui
            cum a aliquam velit odit minus ea commodi ad reprehenderit fugit
            optio tempore provident autem. Inventore, amet ab. Laudantium
            tempora asperiores sed eos eius reprehenderit alias voluptas rem
            perspiciatis autem! Quas, voluptatum.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col items-center gap-8 ">
            <ImageComponent
              src="user.jpg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link>John Doe</Link>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <ImageComponent src="facebook.svg" />
              </Link>
              <Link>
                <ImageComponent src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    <Comments/>
    </div>
  );
}
