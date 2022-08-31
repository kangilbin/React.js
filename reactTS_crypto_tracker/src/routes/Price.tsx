import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 6rem;
  gap: 1rem;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  div {
    font-size: 15px;
  }
`;
interface PriceProps {
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { quotes } = useOutletContext<PriceProps>();
  return (
    <GridContainer>
      <GridItem>
        <div>1시간 전</div>
        {quotes.USD.percent_change_1h}
      </GridItem>
      <GridItem>
        <div>6시간 전</div>
        {quotes.USD.percent_change_6h}
      </GridItem>
      <GridItem>
        <div>12시간 전</div>
        {quotes.USD.percent_change_12h}
      </GridItem>
      <GridItem>
        <div>24시간 전</div>
        {quotes.USD.percent_change_24h}
      </GridItem>
      <GridItem>
        <div>7일 전</div>
        {quotes.USD.percent_change_7d}
      </GridItem>
      <GridItem>
        <div>30일 전</div>
        {quotes.USD.percent_change_30d}
      </GridItem>
    </GridContainer>
  );
}

export default Price;
