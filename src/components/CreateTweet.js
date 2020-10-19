import React from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="https://scontent.flhe18-1.fna.fbcdn.net/v/t1.0-9/78717640_2424946197745940_825441685784756224_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=nkLIF7RaSIQAX9aKNx6&_nc_ht=scontent.flhe18-1.fna&oh=267403fbf0e4ea8c6a78a20a94b67357&oe=5FB2CDF6" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happing?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;