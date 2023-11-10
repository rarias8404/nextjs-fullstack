"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
