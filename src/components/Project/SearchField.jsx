import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchField = ({ setSearchValue, projects }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) return setSearchValue(projects);

    const results = projects.filter(
      (project) =>
        project.category.includes(searchValue) ||
        project.title.toLowerCase().includes(searchValue)
    );

    setSearchValue(results);
  };

  return (
    <div className="w-full lg:w-1/2 md:w-3/4 mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <label htmlFor="search" className="">
          <input
            className="py-2 px-4 w-full text-gray text-lg border-b outline-0"
            type="text"
            id="search"
            placeholder="Search projects"
            onChange={handleSearchChange}
          />
        </label>
        <button
          type="submit"
          className="text-black text-2xl absolute right-0 p-2 hover:text-green"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchField;
