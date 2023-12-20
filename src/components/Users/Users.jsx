import { Link, useLoaderData } from "react-router-dom";
import styles from "/src/components/Users/Users.module.css";

export const loader = async () => {
  const users = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div className={styles.names}>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
