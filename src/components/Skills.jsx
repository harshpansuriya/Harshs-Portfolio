import React from "react";
import Title from "./Title";
import skills from "../data/skills";

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Skills</Title>
        <div className="">
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            {skills.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {item.skill}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
