import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="https://scontent.flhe18-1.fna.fbcdn.net/v/t1.0-9/78717640_2424946197745940_825441685784756224_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=nkLIF7RaSIQAX9aKNx6&_nc_ht=scontent.flhe18-1.fna&oh=267403fbf0e4ea8c6a78a20a94b67357&oe=5FB2CDF6" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Atta Ullah Saeed</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          attaullahsaeed77@gmail.com <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="https://scontent.flhe18-1.fna.fbcdn.net/v/t1.0-9/78717640_2424946197745940_825441685784756224_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=nkLIF7RaSIQAX9aKNx6&_nc_ht=scontent.flhe18-1.fna&oh=267403fbf0e4ea8c6a78a20a94b67357&oe=5FB2CDF6" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;