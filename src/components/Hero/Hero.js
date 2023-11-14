import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>The Shawshank Redemption</h2>
          <h3 className={styles.hero__genre}>
            Genre: Drama
          </h3>
          <p className={styles.hero__description}>
          Dua orang budak dipenjarakan selama beberapa tahun, menemukan pelipur lara & tindakan penebusan dengan kesusilaan umum. Mereka menunjukan pentingnya "Harapan" yang terkadang kita semua membutuhkan.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://m.media-amazon.com/images/I/71+l6VMgw2L.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
