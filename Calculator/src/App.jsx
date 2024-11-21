import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";

function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("Muh me lele");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newDisplayval = calVal + buttonText;
      setCalval(newDisplayval);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
