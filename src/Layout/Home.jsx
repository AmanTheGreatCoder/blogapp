import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Post />
    </div>
  );
};

export default Home;
