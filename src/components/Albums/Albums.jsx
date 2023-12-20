import { useCallback } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styles from "/src/components/Albums/Albums.module.css";

export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((response) => response.json());
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div>
      <h1>Albums</h1>
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`}>
          <div className={styles.list}>{album.title}</div>
        </Link>
      ))}
    </div>
  );
}
