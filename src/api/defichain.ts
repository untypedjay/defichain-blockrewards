const BASE_ENDPOINT = "https://ocean.defichain.com/v0.9/mainnet";

export async function getStats() {
  const response = await fetch(`${BASE_ENDPOINT}/stats`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`An error occurred fetching data: ${response}`);
  }
}
