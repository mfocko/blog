import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

const talks: TalkMetadata[] = [
  {
    title: "Even more release automation",
    description: (
      <>
        Let's go through the most recent features and improvements that enable
        you to automate boring and menial tasks you have to do regularly. We
        will show you how you can automate releases even for upstreams that are
        not based on git. You will get to see a demo of support for Koji
        sidetags in Packit for downstream releases. And also we will go through
        some of the recent internal changes that you can benefit from, e.g.,
        customization for specific ecosystems (like Go), or distro aliases that
        you can use even in your own projects. And many other subtle changes
        that improve both user experience and the release workflow.
      </>
    ),
    events: [
      {
        name: "Flock to Fedora 2025",
        location: "Prague, Czechia",
        date: new Date(2025, 5, 5),
      },
    ],
    // recordingURL: "TODO",
    slidesURL:
      "https://cfp.fedoraproject.org/media/flock-to-fedora-2025/submissions/VZETQA/resources/Even_more_release_automation_hGzItYc.pdf",
  },
  {
    title: "Shift Left Testing with Packit and Testing Farm",
    description: (
      <>
        <p>
          In today's fast-paced software development landscape, ensuring the
          quality and reliability of upstream contributions is crucial. The
          traditional approach of testing at the end of the development cycle is
          no longer sufficient. To address this challenge, we present "Shift
          Left Your Testing with Packit and Testing Farm", a talk that
          introduces two powerful tools designed to simplify and enhance the
          testing process for the upstream contributions.
        </p>

        <p>
          Packit and Testing Farm provide a dead simple way to build and test
          your upstream contributions against both public or internal Red Hat
          testing infrastructure. In this talk, we will explore the capabilities
          of both tools and demonstrate how they can be seamlessly integrated
          into your development workflow.
        </p>

        <p>
          In addition to the current capabilities, we will share our plans for
          Packit and Testing.
        </p>
      </>
    ),
    events: [
      {
        name: "QEcamp23",
        location: "virtual",
        date: new Date(2023, 10, 19),
      },
    ],
  },
  {
    title: "Packit: RPM integration, all in one",
    description: (
      <>
        Do you want to automate how you build and test your RPM packages? Do you
        maintain any package in Fedora and want to automate the releases? Or are
        you just interested in CI/CD on GitHub or GitLab, Fedora and integration
        of upstream projects with RPM-based Linux distributions? In this
        session, we are going to deep-dive into features of Packit that can help
        you do your day-to-day job.
      </>
    ),
    events: [
      {
        name: "DevConf.cz",
        location: "Brno, Czechia",
        date: new Date(2023, 5, 17),
      },
      {
        name: "DevConf.cz Mini",
        location: "Brno, Czechia",
        date: new Date(2023, 2, 31),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=FxhXzgxWO18",
    slidesURL:
      "https://static.sched.com/hosted_files/devconfcz2023/37/DevConf.cz%20June%202023%20Packit%20talk-1.pdf",
  },
];

const title = "Talks";
const description = "Featured talks I presented on various events.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>

        <hr />
        <p>
          Credits to{" "}
          <a href="https://kosiec.dev/" target="_blank">
            Paweł Kosiec
          </a>{" "}
          for implementing his own React components for talks.
        </p>
      </main>
    </Layout>
  );
}
