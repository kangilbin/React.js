import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./../atoms";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  high: number;
  open: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ApexChart
            type="candlestick"
            series={[
              {
                data:
                  data?.map((price) => ({
                    x: price.time_close,
                    y: [price.open, price.high, price.low, price.close],
                  })) ?? [],
              },
            ]}
            width="100%"
            height="200px"
            options={{
              noData: {
                text: "",
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "blue",
                    downward: "red",
                  },
                  wick: {
                    useFillColor: true,
                  },
                },
              },
              fill: {
                opacity: 0,
              },
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                toolbar: {
                  show: false,
                },
                background: "transparent",
                fontFamily: '"Pretendard", sans-serif',
              },
              grid: {
                show: false,
              },
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
              xaxis: {
                labels: {
                  show: false,
                },
                type: "datetime",
                categories: data?.map((price) => price.time_close),
                axisTicks: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                tooltip: {
                  enabled: false,
                },
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              stroke: {
                width: 2,
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default Chart;
