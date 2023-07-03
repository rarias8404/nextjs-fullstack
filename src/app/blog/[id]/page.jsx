import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const post = await getPost(params?.id);

  return (
    <div>
      <div>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            <div className={styles.author}>
              <Image
                src={post.img}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>{post.username}</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill={true} className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
