import jsonData from "./MOCK_DATA";
import "../css/Post.css";

const Post = () => {
  const data = jsonData.map((item) => {
    return (
      <div key={item.id} className="postCard">
        <div className="postImage">
          <img src={item.imageUrl} alt="" />
          <div className="postProfileImg">
            <img src={item.avatar} alt="" />
          </div>
        </div>
        <div className="postContent">
          <div className="postTitle">{item.title}</div>
          <div className="postDetails">
            <div className="postAuthor">{item.author}</div>
            <div className="postedOn">
              <div className="postDate">{item.date}</div>
              <div className="postTime">{item.time}</div>
            </div>
          </div>
          <div className="postDesc">{item.desc}</div>
          <button className="postButton">Read More</button>
        </div>
      </div>
    );
  });
  return <div className="postList">{data}</div>;
};

export default Post;
