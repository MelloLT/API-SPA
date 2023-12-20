export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
}

// Функция для загрузки информации об альбоме по его ID
export async function fetchAlbum(albumId) {
  const url = `https://jsonplaceholder.typicode.com/albums/${albumId}`;
  return await fetchData(url);
}

// Функция для загрузки информации о пользователе по его ID
export async function fetchUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return await fetchData(url);
}
