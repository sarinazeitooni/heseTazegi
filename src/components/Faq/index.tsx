import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { faqContent } from "../../utils/faq/types";
import Card from "./card";
import styles from "./faq.module.scss";
import share from "../../images/share.png";
import BreadCrumb from "../BreadCrumb";

const FaqContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    sectionOne: faqContent[];
    sectionTwo: faqContent[];
    both: faqContent[];
  }>({ sectionOne: [], sectionTwo: [], both: [] });

  useEffect(() => {
    axios
      .get("https://api-dev.hesetazegi.com/FAQ/List")
      .then((res: AxiosResponse) => {
        let sectionOne: faqContent[] = [];
        let sectionTwo: faqContent[] = [];
        res.data.content.items.forEach((item: faqContent, index: number) => {
          item.order = index + 1;
          if (index % 2 === 0) {
            sectionOne.push(item);
          } else {
            sectionTwo.push(item);
          }
        })
        setData({ sectionOne, sectionTwo, both: res?.data?.content?.items });
        setIsLoading(false);
      }).catch((err) => { console.error(err) })
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles['loader-container']}><div className={styles['loader-container__loader']} /></div>
      ) : (
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
              console.log(item);
              return <Card key={index} index={index + 1} data={item} />;
            })}
          </div>
          <div className={styles["container__items-desktop"]}>
            <div className={styles["container__items-desktop__grow"]}>
              {data.sectionOne?.map((item, index) => {
                return <Card key={index} index={item.order} data={item} />;
              })}
            </div>
            <div className={styles["container__items-desktop__grow"]}>
              {data.sectionTwo?.map((item, index) => {
                return <Card key={index} index={item.order} data={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqContent;
