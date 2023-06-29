import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params?.id);

  return (
    <div>
      <div>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.body}</p>
            <div className={styles.author}>
              <Image
                src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>username</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            amet non dolor ipsa provident quis veritatis accusantium excepturi
            illum unde quidem mollitia enim at totam reprehenderit, ad delectus
            facilis labore. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptatibus, totam facilis autem cumque deserunt quas, fuga
            error quo, magni voluptatem dolores necessitatibus laborum dolore ad
            quisquam voluptatum sint adipisci? Dolores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
