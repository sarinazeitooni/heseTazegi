import React, { useState } from "react";
import { faqContent } from "../../../utils/faq/types";
import styles from "./card.module.scss";
import arrowLeft from "../../../images/arrow-left.png";
import arrowDown from "../../../images/arrow-down.png";
const Card = (props: { data: faqContent; index: number }) => {
  const { data, index } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      key={index}
      className={styles["container"]}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div className={styles["container__title"]}>
        {index}. {data.title}
        <img className={styles['container__icon']} src={expanded ? arrowDown : arrowLeft} alt="icon" />
      </div>
      <div
        className={
          expanded
            ? styles["container__expanded-description"]
            : styles["container__description"]
        }
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  );
};
export default Card;
