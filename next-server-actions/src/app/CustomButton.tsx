"use client";

import { useTransition } from "react";
import { testCustomAction } from "./action";

export default function CustomButton() {
  const [, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await testCustomAction();
    });
  };

  return <button onClick={handleClick}>Custom Invocation</button>;
}
