import "./PostAuthor.scss";

const PostAuthor = ({ name, date }) => {
  return (
    <div className="post-author-name">
      <h3>{name}</h3>
      <span>{date}</span>
    </div>
  );
};

export default PostAuthor;
