const Redirect = ({ link, icon, btnStyle }) => {
  const handleLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleLink} className={btnStyle}>
      {icon}
    </div>
  );
};

export default Redirect;
