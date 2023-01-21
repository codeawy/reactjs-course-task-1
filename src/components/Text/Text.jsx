const Text = ({ txt, children, styles }) => {
  return <div style={styles}>{children ? children : <p>{txt}</p>}</div>;
};

export default Text;
