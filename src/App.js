import SVG from "./SVG";
import Test from "./Test";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* <SVG width={"290"} height={"382"} />
      <SVG width={"29"} height={"38.2"} /> */}
      <Test />
    </div>
  );
}

export default App;
