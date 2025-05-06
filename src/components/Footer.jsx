const Footer = () => {
  return (
    <div className="bg-sky-700">
      <div className="flex justify-center gap-2">
        <h5>Created by </h5>
        <a href="https://jenni-le-cure.netlify.app"> jennimmartin</a>
        <h5>
          | &copy;{""}
          {new Date().getFullYear()}
        </h5>
      </div>
    </div>
  );
};
export default Footer;
