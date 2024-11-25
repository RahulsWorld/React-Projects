function ClockTime() {
  let time = new Date();

  return (
    <form>
      This is the current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
      <button>Refresh</button>
    </form>
  );
}
export default ClockTime;
