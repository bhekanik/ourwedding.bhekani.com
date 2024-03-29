import React, { Suspense, useContext, useEffect } from "react";
import { Context } from "../../App";
import projects from "../../projects/projects";
import CallToAction from "../CallToAction/CallToAction";
import "./projects.css";

const Project = React.lazy(() => import("./Project/Project"));

const Projects = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "projects" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        linkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
      },
    });
  }, [dispatch]);

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1>Some of my work</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="portfolio-items">
            {projects.map((project) => {
              return (
                <Project
                  key={project.key}
                  name={project.name}
                  imageSource={project.imageSource}
                  demoUrl={project.demoUrl}
                  demoAvailable={project.demoAvailable}
                  code={project.code}
                  codeAvailable={project.codeAvailable}
                />
              );
            })}
          </div>
        </Suspense>
      </section>
      <CallToAction />
    </>
  );
};

export default Projects;
