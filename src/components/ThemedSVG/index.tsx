import React from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

export default function ThemedSVG(props): JSX.Element {
  const { source, className: parentClassName, alt, ...propsRest } = props;

  return (
    <>
      <img
        className={clsx("light-mode-only", parentClassName, styles.themed_svg)}
        src={`${source}_light.svg`}
      />
      <img
        className={clsx("dark-mode-only", parentClassName, styles.themed_svg)}
        src={`${source}_dark.svg`}
      />
    </>
  );
}
