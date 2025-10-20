{ pkgs, lib, config, inputs, ... }:

{
  packages = [
    # To be able to regenerate the graphs
    pkgs.graphviz-nox
  ];

  languages.javascript = {
    enable = true;
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
}
