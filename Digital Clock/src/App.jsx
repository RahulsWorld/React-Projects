import ClockHeading from "./component/ClockHeading";
import ClockTime from "./component/ClockTime";
import ClockSlogan from "./component/ClockSlogan";
import Container from "./component/container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <ClockTime></ClockTime>
      </Container>
    </>
  );
}
export default App;
