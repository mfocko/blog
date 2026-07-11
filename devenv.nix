{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  packages = [
    # To be able to regenerate the graphs
    pkgs.graphviz-nox
  ];

  languages.javascript = {
    enable = true;

    nodejs.enable = true;
    npm.enable = true;
    yarn = {
      enable = true;
      install.enable = true;
    };
  };

  processes.serve.exec = "URL=http://localhost BASE_URL=/ yarn run start --no-open";

  tasks = {
    "assets:archives".exec = "sh regenerate-archives.sh";
    "assets:dots".exec = "sh regenerate-dots.sh";

    "blog:build" = {
      exec = "yarn run build";
      after = [
        "assets:dots"
        "assets:archives"
      ];
    };
  };

  git-hooks.hooks = {
    commitizen.enable = true;

    # Linting for Docusaurus pages
    html-tidy.enable = true;
    # biome.enable = true;

    # Nix
    alejandra.enable = true;

    # Basic linting
    check-yaml.enable = true;
    check-added-large-files.enable = true;
    end-of-file-fixer.enable = true;
    trim-trailing-whitespace.enable = true;
  };
}
