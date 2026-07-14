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
    "assets:archives".exec = ''
      # remove preexisting archives
      echo "[INFO] Removing pre-existing archives"
      find ./static/files -name '*.tar.gz' -exec rm {} \;
      find ./static/files -name '*.tar.bz2' -exec rm {} \;

      ROOT_DIR=$PWD

      for relative_path in $(find ./static/files -name '.archive' -print); do
          echo;

          relative_path=$(dirname $relative_path)
          base=$(basename $relative_path)
          cd $relative_path/..

          all_files=$(find $base/** ! -name '.archive' -print)

          echo "[INFO] Compressing $base.tar.gz"
          tar caf $base.tar.gz $all_files

          echo "[INFO] Compressing $base.tar.bz2"
          tar caf $base.tar.bz2 $all_files

          cd $ROOT_DIR
      done;
    '';
    "assets:dots".exec = ''
      FONT="'Cascadia Code PL', 'JetBrains Mono', 'Iosevka', 'Fira Code', 'Hack', monospace"

      for pic in $(find ./static/files -name '*.dot' -print); do
          SVG_NAME=".$(echo $pic | cut -d'.' -f2)"

          # light mode
          dot $pic -Tsvg \
            -Gfontname="$FONT" -Nfontname="$FONT" -Efontname="$FONT" > ''${SVG_NAME}_light.svg

          # dark mode
          dot $pic -Tsvg \
            -Gfontname="$FONT" -Nfontname="$FONT" -Efontname="$FONT" \
            -Gbgcolor="#1b1b1d" -Gcolor="white" -Gfontcolor="white" \
            -Nfillcolor="none" -Ncolor="white" -Nfontcolor="white" \
            -Efillcolor="none" -Ecolor="white" -Efontcolor="white" > ''${SVG_NAME}_dark.svg
      done;
    '';

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
