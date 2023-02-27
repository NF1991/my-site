import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4">About Me</h2>
          <p className="py-2 text-gray-600">Hi, I’m Nicole.</p>
          <p className="py-2 text-gray-600">Web development is my passion.</p>
          <p className="py-2 text-gray-600">
            It started when I studied HTML and CSS, and soon grew into my life
            ambition. I discovered the Bath Spa University Web Development Boot
            Camp, and used this opportunity to futher my abilities.
          </p>
          <p className="py-2 text-gray-600">
            I’ve gained many new skills, and my aim is to use them in my dream
            of becoming a professional web developer. I enjoy making visually
            appealing and accessible websites, and plan to gain experience in
            back-end development and UI/UX design.
          </p>
          <p className="py-2 text-gray-600 cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto flex items-center justify-center p=4 hover:scale-105 ease-in duration-300">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
