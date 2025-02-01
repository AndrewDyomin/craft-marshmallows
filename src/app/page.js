import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about" className={`${styles.section} ${styles.about}`}>
          <div className={styles.container}>
            <h2>Про нас</h2>
            <p>Ми виготовляємо найніжніший зефір на замовлення з натуральних інгредієнтів. Гарантуємо якість і незабутній смак!</p>
          </div>
        </section>

        <section id="products" className={`${styles.section} ${styles.products}`}>
          <div className={styles.container}>
            <h2>Наша продукція</h2>
            <div className={styles.productList}>
              <div className={styles.productItem}>
                {/* <img src="zephyr1.jpg" alt="Зефір у коробці"/> */}
                <h3>Зефір у коробці</h3>
                <p>Ідеально для подарунка або святкового столу.</p>
              </div>
              <div className={styles.productItem}>
                {/* <img src="zephyr2.jpg" alt="Асорті зефіру"/> */}
                <h3>Асорті зефіру</h3>
                <p>Різноманіття смаків в одній упаковці.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className={styles.container}>
            <h2>Контакти</h2>
            <p>Зв&apos;яжіться з нами для замовлення:</p>
            <p>Телефон: +38 (123) 456-78-90</p>
            <p>Email: zephyr@example.com</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 Зефір на замовлення. Усі права захищено.</p>
        </div>
      </footer>
    </div>
  );
}
