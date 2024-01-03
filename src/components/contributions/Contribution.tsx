import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Contribution.module.scss";
import RepositoryIcon from "./assets/icon-repository.svg";

export interface ContributionMetadata {
  title: string;
  description: React.ReactNode;
  contribution: React.ReactNode;
  repoURL: string;
}

const Contribution: FunctionComponent<ContributionMetadata> = ({
  title,
  description,
  contribution,
  repoURL,
}) => {
  return (
    <div className="col col--12">
      <div className={clsx("card", styles.card)}>
        <div className="card__header">
          <h2>{title}</h2>
        </div>
        <div className="card__body">
          <div className="row">
            <div className="col col--6">
              <h6>Description</h6>
              {description}
            </div>
            <div className={clsx("col col--6", styles.contributionsContainer)}>
              <h6>Contribution</h6>
              {contribution}
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className={styles.buttons}>
            <a
              href={repoURL}
              target="_blank"
              className="button button--secondary button--outline"
            >
              <span className="button__icon">
                <RepositoryIcon />
              </span>
              See repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
