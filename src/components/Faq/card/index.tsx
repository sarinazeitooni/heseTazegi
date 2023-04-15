import React, { useState } from "react";
import { faqContent } from "../../../utils/faq/types";
import styles from "./card.module.scss";
const Card = (props: { data: faqContent, index:number }) => {
  const { data, index } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={
        (
        expanded
          ? styles["expanded"]
          : styles["not-expanded"])
      }
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <div className={styles["container__title"]}>{index}. {data.title}</div>
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </div>
  );
};
export default Card;
