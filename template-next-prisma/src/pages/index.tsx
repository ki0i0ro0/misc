import React from "react";
import styles from "../styles/Home.module.css";
import BookList from "./list";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BookList></BookList>
      </main>
    </div>
  );
}
