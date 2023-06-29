import React from "react";
import Button from "@/components/button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

import styles from "./page.module.css";

const getData = (cat) => {
  const data = items[cat];

  return data ? data : notFound();
};

const Category = ({ params: { category } }) => {
  const data = getData(category);

  return (
    <div>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
