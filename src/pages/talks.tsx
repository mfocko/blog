import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

const talks: TalkMetadata[] = [
    {
        title: "Packit: RPM integration, all in one",
        description: (
            <>
                Do you want to automate how you build and test your RPM packages?
                Do you maintain any package in Fedora and want to automate the
                releases? Or are you just interested in CI/CD on GitHub or GitLab,
                Fedora and integration of upstream projects with RPM-based Linux
                distributions? In this session, we are going to deep-dive into
                features of Packit that can help you do your day-to-day job.
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
        slidesURL: "https://static.sched.com/hosted_files/devconfcz2023/37/DevConf.cz%20June%202023%20Packit%20talk-1.pdf",
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

                <hr/>
                <p>
                    Credits to <a href="https://kosiec.dev/" target="_blank">
                    Paweł Kosiec</a> for implementing his own React components
                    for talks.
                </p>
            </main>
        </Layout>
    );
}