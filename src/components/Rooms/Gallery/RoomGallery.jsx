import styles from "../Gallery/RoomGallery.module.css";

const RoomGallery = ({ images, layout = "default" }) => {
  return (
    <section id="gallery" className={`section ${styles.section}`}>
      <h2 className={styles.title}>галерея работ</h2>
      <div className={`container ${styles.galleryContainer} ${styles[layout]}`}>
        {images.map((img, index) => {
          const dynamicClass = styles[`item${index + 1}`] || "";
          return (
            <div
              key={index}
              className={`${styles.galleryItem} ${dynamicClass}`}
            >
              <img
                src={img.src}
                alt={img.alt ? img.alt : `Изображение ${index + 1}`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomGallery;
