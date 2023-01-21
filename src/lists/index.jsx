import {
  AiOutlineLike,
  AiFillAndroid,
  AiFillChrome,
  AiFillCustomerService,
  AiFillFire,
  AiFillGithub,
  AiFillHeart,
} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import Text from "../components/Text/Text";

const postList = [
  {
    authorName: "John",
    date: "Today at 19:33",
    title: (
      <Text>
        <p>Lorem ipsum dolor sit. </p>
        <a href="/">Link</a>
      </Text>
    ),
    iconOne: (
      <Text styles={{ display: "flex", alignItem: "center" }}>
        <AiOutlineLike size={25} style={{ marginRight: 5 }} /> Like
      </Text>
    ),
    iconTwo: <BiComment size={25} />,
    iconThree: <IoIosShareAlt size={25} />,
  },
  {
    authorName: "Naga",
    date: "Today at 19:33",
    title: (
      <Text>
        <p>Lorem ipsum dolor sit. </p>
        <a href="/">Google</a>
      </Text>
    ),
    iconOne: <AiFillAndroid size={25} />,
    iconTwo: <AiFillChrome size={25} />,
    iconThree: <AiFillCustomerService size={25} />,
  },
  {
    authorName: "Ahmed",
    date: "Today at 19:33",
    title: <Text txt="Lorem ipsum dolor sit." />,
    iconOne: <AiFillFire size={25} />,
    iconTwo: <AiFillGithub size={25} />,
    iconThree: <AiFillHeart size={25} />,
  },
];

export default postList;
