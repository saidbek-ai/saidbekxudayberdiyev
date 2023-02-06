const Dropdown = ({ categories }) => {
  return (
    <div className="relative w-full sm:w-32">
      <select className="w-full p-2 text-white bg-green border border-transparent rounded-md shadow-sm outline-none appearance-none text-center sm:text-left">
        {categories.map((item, index) => (
          <option key={index} value={item.split(" ").join().toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
