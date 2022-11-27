import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Harsh's
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Computer Programmer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Computer Programmer with an excellent problem-solving skills and ability
        to perform well in team. Passionate about coding and enjoy writing blogs
        You can read some of them on{" "}
        <code className="underline">
          <a href="https://realharsh.medium.com" target="blank_">
            Medium
          </a>
        </code>
        .
      </p>
    </div>
  );
}

export default Intro;
