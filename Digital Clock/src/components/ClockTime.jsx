function ClockTime() {
  let time = new Date();

  return (
    <p>
      This is the current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
      <button>Refresh</button>
    </p>
  );
}
export default ClockTime;
