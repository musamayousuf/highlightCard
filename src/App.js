import logo from "./logo.svg";
import "@fontsource/manrope";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Header from "./components/dashboard/header/header";

function App() {
  return (
    <>
      <div style={{ fontFamily: "'Manrope'" }}>
        {/* <div>
          <h1>HELLO WORLD!</h1>
        </div> */}
        <Dashboard />
      </div>
    </>
  );
}

export default App;
