import SearchBar from "../../components/search-bar/SearchBar";
import Blog from "./Blog";

const ListBlog = () => {
  const arr = ["1","2","2","3","4"];
  return (
    <>
    <h1 className="text-center text-4xl font-bold m-10">Blog</h1>
    <div className="max-w-full w-96 mx-auto px-2">
    <SearchBar />
    </div>
    
      <div className="list-blog mb-10">
        <div className="row mx-auto max-w-7xl">
          {arr.map((item, id) => {
            return (
              <>
                <div className="col-sm-6 col-md-4 mt-4">
                  <Blog />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListBlog;
