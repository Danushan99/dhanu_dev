/* eslint-disable react/no-unescaped-entities */
import myImage from "../assets/me2.png";

import React from "react";

function AboutPage() {
  return (
    <section className="bg-home">
      <div className="grid gap-8 p-20  md:items-center    ">
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="mb-2 text-2xl font-Jost font-medium">About Me</h1>
        </div>
        <p className="text-base text-gray-1 leading-relaxed mb-4 px-4">
          I am a highly self-motivated and enthusiastic individual with
          excellent communication and interpersonal skills. I strive to achieve
          the best I can through hard work and perseverance. I am also a strong
          team player who can blend into many work environments to achieve
          success as a team. I'm also interested in new technologies and have
          the mindset to learn and adapt to new things.
        </p>
        <div className="">
          <img
            src={myImage}
            alt="Photo "
            className="object-contain md:object-scale-down "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
