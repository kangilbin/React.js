import { useOutletContext } from "react-router";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const coinData = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(["ohlcv", coinData.coinId], () =>
    fetchCoinHistory(coinData.coinId)
  );
  return <h1>Chart</h1>;
}

export default Chart;
