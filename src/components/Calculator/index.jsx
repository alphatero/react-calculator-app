import React from "react";
import { useCalculator } from "./hooks";

function Screen({}) {
  return <div></div>;
}

function Button({}) {
  return <button></button>;
}

function Toggle({}) {
  return <div></div>;
}

function Keypad({}) {
  return (
    <div>
      <>7</>
      <>8</>
      <>9</>
      <>DEL</>

      <>4</>
      <>5</>
      <>6</>
      <>+</>

      <>1</>
      <>2</>
      <>3</>
      <>-</>

      <>.</>
      <>0</>
      <>/</>
      <>x</>

      <>RESET</>
      <>=</>
    </div>
  );
}

export function Calculator() {
  const { output, operator, actions } = useCalculator();

  return (
    <form className="flex flex-col gap-6">
      <Screen>{output}</Screen>

      <Keypad operator={operator} actions={actions} />
    </form>
  );
}
