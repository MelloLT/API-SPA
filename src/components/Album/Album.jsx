import { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import { Await, Link } from "react-router-dom";
import styles from "/src/components/Album/Album.module.css";
import { useEffect, useState } from "react";
import { fetchAlbum, fetchUser } from "/src/components/utils/apiUtils";

export default function Album() {
  const { albumPromise, photosPromise, userPromise } = useLoaderData();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={albumPromise}>
        {(album) => (
          <div>
            <h1>{album.title}</h1>
            <div>
              {" "}
              <h2>
                Created by:
                <Link key={album.userId} to={`/users/${album.userId}`}>
                  {" "}
                  User name
                </Link>{" "}
              </h2>
            </div>
          </div>
        )}
      </Await>

      {/* <Await resolve={userPromise}>{(user) => <div>{user.name}</div>} </Await> */}

      <Await resolve={photosPromise}>
        {(photos) => (
          <div className={styles.photos}>
            {photos.map((photo) => (
              <img key={photo.id} src={photo.url} alt={photo.title} />
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
}
