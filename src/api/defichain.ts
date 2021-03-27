const BASE_ENDPOINT = 'https://api.defichain.io/v1';

export async function getStats() {
  const response = await fetch(`${BASE_ENDPOINT}/stats`);
  if (response.status === 200) {
    return response.json();
  } else {
    console.log(response);
    return null;
  }
}