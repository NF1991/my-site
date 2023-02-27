import React from "react";
import Image from "next/image";
import Link from "next/link";
import EcommercePreview from "../public/assets/projects/ecommerce.png";
import ProjectItem from "./ProjectItem";
import PlaceholderImg from "../public/assets/projects/placeholder.jpg";
import DictionaryPreview from "../public/assets/projects/dictionarypreview.png";
import SunReadingPreview from "../public/assets/projects/sunreadingpreview.png";
import WhiteNoisePreview from "../public/assets/projects/whitenoisepreview.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto pt-2 py-16">
        <h2 className="py-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecommerce - Clothing Store"
            backgroundImg={EcommercePreview}
            tools="HTML, CSS, Javascript"
            projectUrl="/ecommerce"
          />

          <ProjectItem
            title="Dictionary App"
            backgroundImg={DictionaryPreview}
            tools="HTML, Tailwind CSS, Javascript, API"
            projectUrl="/dictionary"
          />

          <ProjectItem
            title="Clow Card Sun Reading"
            backgroundImg={SunReadingPreview}
            tools="HTML, CSS, Javascript"
            projectUrl="/sunreading"
          />

          <ProjectItem
            title="White Noise App"
            backgroundImg={WhiteNoisePreview}
            tools="HTML, CSS, Javascript"
            projectUrl="/whitenoise"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
