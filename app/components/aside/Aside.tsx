import Link from "next/link";
import styles from "./Aside.module.css";

export default function Aside() {
    return (
      <aside className="aside">
            <h1>Aside</h1>
            <nav className={styles.nav}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/customers">Customers</Link>
                <Link className={styles.navLink} href="/administrations">Administrators</Link>
                <Link className={styles.navLink} href="/courses">Courses</Link>
                <Link className={styles.navLink} href="/orders">Orders</Link>
                <Link className={styles.navLink} href="/newsletter-subscribers">Newsletter Subscribers</Link>
                <Link className={styles.navLink} href="/">Chat</Link>
            </nav>
      </aside>
    );
}