import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

export default function ThemedSVG(props): JSX.Element {
    const { source, className: parentClassName, alt, ...propsRest } = props;

    return (
        <>
            <embed
                className={clsx("light-mode-only", parentClassName, styles.themed_svg)}
                type="image/svg+xml"
                src={`${source}_light.svg`}
            />
            <embed
                className={clsx("dark-mode-only", parentClassName, styles.themed_svg)}
                type="image/svg+xml"
                src={`${source}_dark.svg`}
            />
        </>
    );
}