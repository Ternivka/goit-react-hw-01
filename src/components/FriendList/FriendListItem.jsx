import clsx from "clsx";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
export default FriendListItem;
