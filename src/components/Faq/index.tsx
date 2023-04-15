import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { faqContent } from "../../utils/faq/types";
import Card from "./card";
import styles from "./faq.module.scss";

const FaqContent = () => {
  const [data, setData] = useState<faqContent[]>([]);
  useEffect(() => {
    axios
      .get("https://api-dev.hesetazegi.com/FAQ/List")
      .then((res: AxiosResponse) => {
        setData(res?.data?.content?.items);
      });
  }, []);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["container__title"]}>سوالات متداول</h1>
      <div className={styles["container__devider"]} />
      {data?.map((item, index) => {
        return <Card key={index} index={index + 1} data={item} />;
      })}
    </div>
  );
};

export default FaqContent;
