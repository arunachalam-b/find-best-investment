import Link from "next/link";
import styles from "./page.module.css";

const year = new Date().getFullYear();

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Welcome to Investment Finder</h1>
        <p>Your one-stop solution to find the best investment options</p>
      </header>
      <main className={styles.main}>
        <div className={styles.buttons}>
          <Link href="/sip_calculator">
            <button className={styles.button}>SIP Calculator</button>
          </Link>
          <Link href="/find_your_best_investment">
            <button className={styles.button}>Find Your Best Investment</button>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© {year} Best Investment Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}
