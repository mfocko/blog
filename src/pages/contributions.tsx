import React from "react";
import Layout from "@theme/Layout";

import Contribution, {
  ContributionMetadata,
} from "../components/contributions/Contribution";

const contributions: ContributionMetadata[] = [
  {
    title: "flexmock",
    description: (
      <p>
        Flexmock is a testing library for Python that makes it easy to create
        mocks, stubs, and fakes.
      </p>
    ),
    contribution: (
      <p>
        I've converted the interception for pytest after they've changed their
        internal design to use pytest's hook system.
      </p>
    ),
    repoURL: "https://github.com/flexmock/flexmock",
  },
  {
    title: "tmt",
    description: (
      <p>
        The <code>tmt</code> tool provides a user-friendly way to work with
        tests. You can comfortably create new tests, safely and easily run tests
        across different environments, review test results, debug test code and
        enable tests in the CI using a consistent and concise config.
      </p>
    ),
    contribution: (
      <p>
        Just a smallish contribution to the docs related to the changes
        implemented on the Packit side.
      </p>
    ),
    repoURL: "https://github.com/teemtee/tmt",
  },
  {
    title: "Fedora Infrastructure Ansible",
    description: (
      <p>
        Collection of Ansible playbooks that powers the Fedora Infrastructure.
      </p>
    ),
    contribution: (
      <p>
        I have adjusted the groups in the Bodhi playbooks after Packit has been
        granted the privileges to propose updates without restrictions.
      </p>
    ),
    repoURL: "https://pagure.io/fedora-infra/ansible",
  },
  {
    title: "Bodhi",
    description: (
      <p>
        Bodhi is a web-system that facilitates the process of publishing updates
        for a Fedora-based software distribution.
      </p>
    ),
    contribution: (
      <p>
        I have adjusted the client, so that it doesn't show secrets in terminal
        when you log in to the Bodhi via browser.
      </p>
    ),
    repoURL: "https://github.com/fedora-infra/bodhi",
  },
  {
    title: "Gluetool Modules Collection",
    description: (
      <p>
        Modules for <code>gluetool</code> — a command line centric framework
        usable for glueing modules into a pipeline.
      </p>
    ),
    contribution: (
      <ul>
        <li>
          I have proposed a possible implementation of git merging that was
          later on extended.
        </li>
        <li>
          I have tried to help out with Copr module after they deprecated older
          version of their API.
        </li>
      </ul>
    ),
    repoURL: "https://gitlab.com/testing-farm/gluetool-modules",
  },
  {
    title: "Pagure",
    description: (
      <p>Pagure is a git-centered forge, python based using pygit2.</p>
    ),
    contribution: (
      <p>I have added an API endpoint for reopening pull requests.</p>
    ),
    repoURL: "https://pagure.io/pagure",
  },
  {
    title: "Copr",
    description: (
      <p>
        RPM build system - upstream for{" "}
        <a target="_blank" href="https://copr.fedorainfracloud.org/">
          Copr
        </a>
        .
      </p>
    ),
    contribution: (
      <ul>
        <li>Supporting external repositories for custom SRPM build method.</li>
        <li>
          Allowing admins of Copr repositories to build without the need to ask
          for explicit <code>builder</code> permissions.
        </li>
      </ul>
    ),
    repoURL: "https://github.com/fedora-copr/copr",
  },
  {
    title: "python-gitlab",
    description: <p>A python wrapper for the GitLab API.</p>,
    contribution: (
      <p>
        I have contributed support for the <code>merge_ref</code> on merge
        requests that hasn't been supported, yet it was present in the GitLab
        API.
      </p>
    ),
    repoURL: "https://github.com/python-gitlab/python-gitlab",
  },
  {
    title: "PatternFly React",
    description: <p>A set of React components for the PatternFly project.</p>,
    contribution: (
      <p>
        When working on Packit Dashboard, I have spotted smaller bugs that were
        present in this project and fixed them upstream to provide better
        experience for our users.
      </p>
    ),
    repoURL: "https://github.com/patternfly/patternfly-react",
  },
  {
    title: "Fira Code",
    description: <p>Free monospaced font with programming ligatures.</p>,
    contribution: (
      <p>
        I have set up a GitHub Action for building the font on each push to the
        default branch allowing users to install <i>bleeding edge</i> version of
        the font.
      </p>
    ),
    repoURL: "https://github.com/tonsky/FiraCode",
  },
  {
    title: "nixpkgs",
    description: (
      <p>
        Nixpkgs is a collection of over 80,000 software packages that can be
        installed with the Nix package manager. It also implements NixOS, a
        purely-functional Linux distribution.
      </p>
    ),
    contribution: (
      <p>
        When I was trying out the nixpkgs, I have tried to bump .NET Core to the
        latest version. My changes haven't been accepted as they required
        bumping of multiple more packages that depended upon the .NET Core.
      </p>
    ),
    repoURL: "https://github.com/NixOS/nixpkgs",
  },
  {
    title: "Darcula",
    description: (
      <p>
        A theme for Visual Studio Code based on Darcula theme from Jetbrains
        IDEs.
      </p>
    ),
    contribution: (
      <p>
        I have contributed support for diff files, though the project doesn't
        seem to be live anymore, so it hasn't been accepted as of now.
      </p>
    ),
    repoURL: "https://github.com/rokoroku/vscode-theme-darcula",
  },
  {
    title: "Packit",
    description: (
      <p>
        An open source project aiming to ease the integration of your project
        with Fedora Linux, CentOS Stream and other distributions.
      </p>
    ),
    contribution: (
      <p>
        Have a look at my{" "}
        <a
          href="https://github.com/search?q=is%3Apr%20author%3Amfocko%20org%3Apackit&type=pullrequests"
          target="_blank"
        >
          pull requests
        </a>
        .
      </p>
    ),
    repoURL: "https://github.com/packit",
  },
  {
    title: "Snitch",
    description: (
      <>
        <p>
          Language agnostic tool that collects TODOs in the source code and
          reports them as Issues.
        </p>
      </>
    ),
    contribution: (
      <ul>
        <li>Environment variable support for self-hosted GitLab instances</li>
        <li>GitLab support</li>
      </ul>
    ),
    repoURL: "https://github.com/tsoding/snitch",
  },
  {
    title: "Karel the Robot",
    description: (
      <>
        <p>
          Karel the robot is in general an educational programming language for
          beginners, created by <i>Richard E. Pattis</i>. This is implementation
          of <i>Karel the Robot</i> for <i>C programming language</i>.
        </p>
        <p>
          This project is used for educational purposes at{" "}
          <a target="_blank" href="https://fei.tuke.sk">
            TUKE
          </a>
          .
        </p>
      </>
    ),
    contribution: (
      <p>
        I have contributed some refactoring tips to the author of the library.
      </p>
    ),
    repoURL: "https://git.kpi.fei.tuke.sk/kpi/karel-the-robot",
  },
];

const title = "Contributions";
const description = "Many of my contributions to open-source projects.";

export default function Contributions(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {contributions.map((contributionData) => (
            <Contribution
              key={contributionData.project}
              {...contributionData}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
