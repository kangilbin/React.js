export async function fetcherCoins() {
  return fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
    response.json()
  );
}
