import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";

interface HelloWorldProps {}

const HelloWorld: FC<HelloWorldProps> = ({}) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => value === "hello" && setVisible(!visible);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} id="search" type="text" />
      <button onClick={toggle} id="toggle">toggle</button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
};

export default HelloWorld;
