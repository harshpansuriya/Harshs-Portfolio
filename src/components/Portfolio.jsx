import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
      <div className="flex-row">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((project) => (
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                desc={project.desc}
              />
            ))}
          </div>
        </div>
          <div className="flex items-center justify-center mt-10">
              <a
                  className="border-2 p-1 border-stone-900 dark:text-white dark:border-white md:text-lg rounded-md"
                  href="https://github.com/harshpansuriya" target="_blank"
              >
                  More Projects
              </a>
          </div>
      </div>
  );
}

export default Portfolio;
