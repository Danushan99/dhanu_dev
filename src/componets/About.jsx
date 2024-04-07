/* eslint-disable react/no-unescaped-entities */
import myImage from "../assets/me2.png";

import React from "react";

function AboutPage() {
  return (
<section className="bg-home ">
      <div className="grid gap-8 md:p-20 p-10  md:items-center bg-home">
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="mb-2 text-2xl font-Jost font-medium">About Me</h1>
        </div>
        <p className=" bg-white md:text-[26px] text-[16px] lg:p-20 p-10 rounded-[10px] text-center flex flex-col">
          <span className="text-[20px] pb-6">Welcom to Dhanu</span>
          <span className=" font-EB-Garamond">
            I am a highly self-motivated and enthusiastic individual with
            excellent communication and interpersonal skills. I strive to
            achieve the best I can through hard work and perseverance. I am also
            a strong team player who can blend into many work environments to
            achieve success as a team. I'm also interested in new technologies
            and have the mindset to learn and adapt to new
          </span>
          <span className="pt-10 text-[14px]">By Dhanu</span>
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
