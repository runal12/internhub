import styles from './UserCard.module.css';

const UserCard = ({ name, email }) => (
  <div className={styles.card}>
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);

export default UserCard;
