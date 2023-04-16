import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { faqContent } from "../../utils/faq/types";
import Card from "./card";
import styles from "./faq.module.scss";
import share from "../../images/share.png";

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
      <div className={styles["container__title-container"]}>
        <div>
          <h1>سوالات متداول</h1>
          
        </div>
        <div className={styles["container__title-container__icon"]}>
          <img src={share} alt="share" />
        </div>
      </div>

      <div className={styles["container__devider"]} />
      <div className={styles["container__items"]}>
        {data?.map((item, index) => {
          return <Card key={index} index={index + 1} data={item} />;
        })}
      </div>
    </div>
  );
};

export default FaqContent;
