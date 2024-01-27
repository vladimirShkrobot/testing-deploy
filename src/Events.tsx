import { FC, useEffect, useState } from "react";

interface EventsProps {}

const Events: FC<EventsProps> = () => {
  const [data, setData] = useState<object | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle(!toggle);
  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value} </h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value.."
      />
    </div>
  );
};

export default Events;
