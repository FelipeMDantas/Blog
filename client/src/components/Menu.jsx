import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Some title",
  //     desc: "Some description",
  //     img: "https://images.pexels.com/photos/13437426/pexels-photo-13437426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Some title",
  //     desc: "Some description",
  //     img: "https://images.pexels.com/photos/13437426/pexels-photo-13437426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title: "Some title",
  //     desc: "Some description",
  //     img: "https://images.pexels.com/photos/13437426/pexels-photo-13437426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 4,
  //     title: "Some title",
  //     desc: "Some description",
  //     img: "https://images.pexels.com/photos/13437426/pexels-photo-13437426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
