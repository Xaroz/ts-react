import React, { useState, useRef } from "react";
import { string } from "prop-types";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text, person, ok, handleChange }) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  const [obj, setObj] = useState<{ text: string }>({ text: "hello" });
  const [text2, setText2] = useState<TextNode>({ text: "hello" });
  //   setCount(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref = {inputRef} onChange={handleChange}/>
      <p>{text}</p>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{ok}</p>
    </div>
  );
};
