with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "mfocko/blog";
  buildInputs = [
    # To be able to regenerate the graphs
    pkgs.graphviz-nox

    # JS package manager
    pkgs.yarn
  ];
}
