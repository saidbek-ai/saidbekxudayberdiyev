// import Dropdown from "../components/Project/Dropdown";
import { useState } from "react";
import Card from "../components/Card";
import SearchField from "../components/Project/SearchField";
import ProjectsData from "../data/projects.js";

const Projects = () => {
  const [data, setData] = useState(ProjectsData);

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen bg- px-4 sm:px-8 md:px-12  text-center md:text-left py-12">
      <SearchField projects={ProjectsData} setSearchValue={setData} />

      {/* <div className="my-4">
        <Dropdown
          categories={[
            "Popular",
            "New",
            "Last Month",
            "Last Week",
            "Yesterday",
            "Today",
          ]}
        />
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {data.length > 0 ? (
          data.map((item) => {
            const { id, title, coverImage, description, srcCode, liveDemo } =
              item;
            return (
              <Card
                key={id}
                id={id}
                title={title}
                description={description}
                srcCode={srcCode}
                liveDemo={liveDemo}
                image={coverImage}
              />
            );
          })
        ) : (
          <h1 className="text-center sm:col-span-2 md:col-span-3 lg:col-span-4 font-bold text-3xl h-[50vh] flex justify-center items-center text-green">
            Project Not Found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Projects;
