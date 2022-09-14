import { useRecoilState } from "recoil";
import { hourSelector, minutesState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // '+'는 String => Number로 변환
  };
  const onHoursChagne = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value); // '+'는 String => Number로 변환
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChagne}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
