import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    if (isNaN(pageNumber)) {
      setCurrentPage((currentPage) =>
        pageNumber === "prev" ? currentPage - 1 : currentPage + 1
      );
    } else {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="App">
      <Posts loading={loading} posts={currentPosts} />
      <Pagination
        totalPosts={posts.length}
        postPerPage={postsPerPage}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
