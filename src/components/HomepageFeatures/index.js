import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "About Me",
    description: (
      <p>
        I'm working in Red Hat in the{" "}
        <a href="https://github.com/packit">Packit team</a> and studying at{" "}
        <a href="https://fi.muni.cz">FI MUNI</a> while also tutoring some
        courses there.
      </p>
    ),
  },
  {
    title: "Content",
    description: (
      <>
        On this page you can find my blog or unofficial materials I have written
        over the course of teaching multiple courses at the FI.
      </>
    ),
  },
  {
    title: "Mastodon",
    description: (
      <>
        Feel free to contact me on any of the following Mastodon accounts:{" "}
        <a rel="me" href="https://fosstodon.org/@m4tt_314">
          Fosstodon
        </a>{" "}
        or{" "}
        <a rel="me" href="https://hachyderm.io/@m4tt_314">
          Hachyderm.io
        </a>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
