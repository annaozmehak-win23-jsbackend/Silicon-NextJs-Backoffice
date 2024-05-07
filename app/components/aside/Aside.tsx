import Link from "next/link";
import styles from "./Aside.module.css";

export default function Aside() {
    return (
      <aside className="aside">
            <h1>Aside</h1>
            <nav className={styles.nav}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/customers">Kunder</Link>
                <Link className={styles.navLink} href="/administrations">Administratörer</Link>
                <Link className={styles.navLink} href="/courses">Kurser</Link>
                <Link className={styles.navLink} href="/orders">Orders</Link>
                <Link className={styles.navLink} href="/">Chat</Link>
            </nav>
      </aside>
    );
}