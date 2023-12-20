import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Await, Link } from "react-router-dom";
import styles from "/src/components/User/User.module.css";

export const loader = ({ params: { id } }) => {
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());

  const albumsPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  ).then((response) => response.json());

  return { userPromise, albumsPromise };
};

export default function User() {
  const { userPromise, albumsPromise } = useLoaderData();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={userPromise}>
        {(user) => (
          <div>
            <div className={styles.text}>
              <h1>{user.name}</h1>
              <div className={styles.info}>Username: {user.username}</div>
              <div className={styles.info}>Email: {user.email}</div>
              <div className={styles.info}>Phone: {user.phone}</div>
              <div className={styles.info}>Site: {user.website}</div>
            </div>

            <Await resolve={albumsPromise}>
              {(albums) => (
                <div className={styles.User}>
                  <h2>Albums:</h2>
                  {albums.map((album) => (
                    <div className={styles.albums}>
                      <Link key={album.id} to={`/albums/${album.id}`}>
                        <div>{album.title}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </Await>
          </div>
        )}
      </Await>
    </Suspense>
  );
}
