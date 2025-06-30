import Image from "next/image";
import styles from "./page.module.css";
import  Front  from "@/components/home/front";

export default function Home() {
  return (
    <main className={styles.main}>


      <Front></Front>
    </main>
  );
}
