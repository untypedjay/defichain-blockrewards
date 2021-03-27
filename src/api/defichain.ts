const BASE_ENDPOINT = 'https://api.defichain.io/v1';

export async function getStats() {
  const response = await fetch(`${BASE_ENDPOINT}/stats`);
  console.log(response);
  return response.json();
}