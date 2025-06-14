import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="20px"
        height="20px"
      >
        <path
          d="M12 4C10.3 4 9 7V34l15-9 9V7c0-1.7-1.3-3-3H12Z"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
