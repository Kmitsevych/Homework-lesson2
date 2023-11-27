import fetch from 'node-fetch';

export const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

export async function get(url) {
  try {
    const response = await fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }
}

export async function post(url, data) {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to post data. Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
}