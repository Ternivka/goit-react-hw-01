import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="User avatar" className={styles.profileImg} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileText}>@{tag}</p>
        <p className={styles.profileText}>{location}</p>
      </div>
      <ul className={styles.profileList}>
        <li className={styles.profileItem}>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>

        <li className={styles.profileItem}>
          <span>Views</span> <span>{stats.views}</span>
        </li>

        <li className={styles.profileItem}>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
