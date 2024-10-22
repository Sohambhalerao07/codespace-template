/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Quiz App",
    description:
      "Developed a user friendly and interactive quiz application with effective response to answers and scoring system to make it fun.",
    url: "https://sohambhalerao07.github.io/Quiz-React/",
  },
  {
    title: "Video Call Application",
    description:
      "This video call and messaging application leverages the power of WebRTC to provide seamless real-time communication.",
    url: "https://github.com/Sohambhalerao07/Video-Call-app.git",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Overleaf using Latex and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://sohambhalerao07.github.io/Resume-website/",
  },
  {
    title: "Video Resume",
    description: "A brief introduction to my skills and projects as a frontend developer, showcasing my experience with React, JavaScript, and web technologies.",
    url: "https://youtu.be/owkxpZRoCpo?feature=shared"
  },
  {
    title: "Personal Blog Application",
    description: "This personal blog application is designed to provide users with a platform to share their thoughts, experiences, and creative ideas.",
    url: "https://github.com/Sohambhalerao07/React-projects/tree/personalblog"
  },
  {
    title: "Github",
    description:"Showcase of my other works that I like and enhance my knowledge experience",
    url: "https://github.com/Sohambhalerao07"
  }

  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
