import styles from "../Gallery/RoomGallery.module.css";

const RoomGallery = ({ images }) => {
  return (
    <div className={`section ${styles.section}`}>
      <h2 className={styles.title}>галерея работ</h2>
      <div className={`container ${styles.galleryContainer}`}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.galleryItem} ${styles[`item${index + 1}`]}`}
          >
            <img src={img.src} alt={img.alt || `Фото ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGallery;
