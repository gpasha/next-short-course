import Link from "next/link";
import styles from "../styles/A.module.css";

export const A = ({href, text}) =>(
  <Link href={href}>
    <a className={styles.link}>{text}</a>
  </Link>
)

export const ADark = ({href, text}) =>(
  <Link href={href}>
    <a className={styles.link_dark}>{text}</a>
  </Link>
)