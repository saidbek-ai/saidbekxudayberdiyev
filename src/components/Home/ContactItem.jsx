const ContactItem = ({ title, value }) => {
  return (
    <li className="bg-black text-white py-2 px-4 rounded-md flex flex-wrap">
      <span className="text-green font-semibold mr-2 capitalize">{title}:</span>
      {value}
    </li>
  );
};

export default ContactItem;
