import React from "react";
import styles from "./breadCrumbs.module.scss";
import arrowLeft from "../../images/arrow-left.png";

export interface BreadCrumbProps {
  list: {
    link?: string;
    label: string;
  }[];
}

const BreadCrumb = (props: BreadCrumbProps) => {
  const { list } = props;

  return (
    <div className={styles["breadcrumb-container"]}>
      {list.map((listItem, index) => {
        let content = listItem.link ? (
          <a href={listItem.link}>{listItem.label}</a>
        ) : (
          <span>{listItem.label}</span>
        );

        return (
          <React.Fragment key={`item-${index}`}>
            {content}{" "}
            {index + 1 !== list.length && <img src={arrowLeft} alt="icon" />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
