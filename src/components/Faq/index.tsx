import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { faqContent } from "../../utils/faq/types";
import Card from "./card";
import styles from "./faq.module.scss";
import share from "../../images/share.png";
import BreadCrumb from "../BreadCrumb";

const FaqContent = () => {
  const [data, setData] = useState<{
    sectionOne: faqContent[];
    sectionTwo: faqContent[];
    both: faqContent[];
  }>({ sectionOne: [], sectionTwo: [], both: [] });

  useEffect(() => {
    axios
      .get("https://api-dev.hesetazegi.com/FAQ/List")
      .then((res: AxiosResponse) => {
        let sectionOne = [];
        let sectionTwo = [];
        for (let index = 1; index < res?.data?.content?.items.length; index++) {
          if (index % 2 === 0) {
            sectionOne.push(res?.data?.content?.items[index]);
          } else sectionTwo.push(res?.data?.content?.items[index]);
        }
        setData({ sectionOne, sectionTwo, both: res?.data?.content?.items });
      });
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["container__title-container"]}>
        <div>
          <h1>سوالات متداول</h1>
          <BreadCrumb
            list={[
              { label: "صفحه اصلی" },
              { label: "سوالات متداول", link: "/faq" },
            ]}
          />
        </div>
        <div className={styles["container__title-container__icon"]}>
          <img src={share} alt="share" />
        </div>
      </div>

      <div className={styles["container__devider"]} />
      <div className={styles["container__items-mobile"]}>
        {data.both?.map((item, index) => {
          return <Card key={index} index={index + 1} data={item} />;
        })}
      </div>
      <div className={styles["container__items-desktop"]}>
        <div>
          {data.sectionOne?.map((item, index) => {
            return <Card key={index} index={index + 1} data={item} />;
          })}
        </div>
        <div>
          {data.sectionTwo?.map((item, index) => {
            return <Card key={index} index={index + 1} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
