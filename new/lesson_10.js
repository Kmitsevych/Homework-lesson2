/* 1. Cтворити модуль api_helper.js, в якому будуть реалізовані функції посилання get та post запитів
та десеріалізація респонсу у json об'єкт, який вони будуть повертати (при реалізації поста зверніть увагу на хедери, 
які вказані у інструкції під блоком Post with JSON). Для створення запитів використати пакет
node-fetch, інструкця по використанню тут https://www.npmjs.com/package/node-fetch?activeTab=readme, для 
реалізації асинхронності використати async/await */

import * as apiHelper from "./api_helper.js";


(async () => {
  try {
    const getResponse = await apiHelper.get('some-endpoint');
    console.log('GET response:', getResponse);

    const postData = { /* Ваші дані для POST запиту */ };
    const postResponse = await apiHelper.post('another-endpoint', postData);
    console.log('POST response:', postResponse);
  } catch (error) {
    console.error('Error:', error);
  }
})();



/* 2. Реалізувати функцію getPostsByUsedId, яка буде знаходити пости з ресурсу https://jsonplaceholder.typicode.com/posts та робити 
вибірку постів за id користувача. Також у всіх відфільтрованих постів повинна бути відсутня властивість title */
async function getPostsByUserId(url, userId) {
  try {
    // Отримуємо пости за вказаним URL
    const response = await fetch(url);
    const posts = await response.json();

    // Фільтруємо пости за userId та вилучаємо властивість title
    const filteredPosts = posts
      .filter(post => post.userId === userId)
      .map(({ title, ...rest }) => rest);

    return filteredPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const userId = 5;

// Виклик функції та вивід результату
getPostsByUserId(baseUrl, userId)
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */

import fetch from 'node-fetch';

const myBaseUrl = 'https://jsonplaceholder.typicode.com/posts';

const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};

async function createNewPost(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to create a new post. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during createNewPost:', error);
    throw error;
  }
}

// Приклад використання
(async () => {
  try {
    const result = await createNewPost(myBaseUrl, body);
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
})();

/* 4. Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з 
результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */

function generateRandomNumber() {
  return Math.floor(Math.random() * 11); 
}

function resolveNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = generateRandomNumber();

    setTimeout(() => {
      if (randomNumber > 5) {
        resolve(`Resolved ${randomNumber}`);
      } else {
        reject(`Rejected ${randomNumber}`);
      }
    }, 3000); 
  });
}

resolveNumber()
  .then(result => {
    console.log(result); 
  })
  .catch(error => {
    console.error(error); 
  });