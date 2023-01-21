import { BsThreeDots } from "react-icons/bs";

import Avatar from "../Avatar/Avatar";
import Image from "../Image/Image";
import Text from "../Text/Text";
import PostAuthor from "./PostAuthor/PostAuthor";
import "./PostItem.scss";

const PostItem = ({ authorName, date, title, iconOne, iconTwo, iconThree }) => {
  return (
    <div className="post-item-wrapper">
      <div className="post-author">
        <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" alt={authorName} />
        <PostAuthor name={authorName} date={date} />
      </div>
      <span className="dots">
        <BsThreeDots size={20} />
      </span>
      {title}
      <Image src="https://bit.ly/dan-abramov" size="full" />
      <div className="icons-wrapper">
        {iconOne}
        {iconTwo}
        {iconThree}
      </div>
    </div>
  );
};

export default PostItem;
