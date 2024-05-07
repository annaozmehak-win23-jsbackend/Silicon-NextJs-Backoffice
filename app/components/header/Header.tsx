import styles from './Header.module.css';

export default function Header() {
    return (
      <header className={`${styles.header} header`}>
        <div className={styles.leftHeaderContainer}>
            <i className="fa-light fa-bars"></i>
        </div>
        <div className={styles.rightHeaderContainer}>
            <div className={styles.avatar}>
                <img className={styles.avatarImage} src="/images/JAG.jpg" alt="logo" />
            </div>
            <h1>Anna Özmehak</h1>
            <i className="fa-light fa-messages"></i>
        </div>
           
      </header>
    );
}