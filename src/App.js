import logo from "./logo.svg";
import "./App.css";
import { NavSec } from "./components/NavSec";
import { Sec1 } from "./components/Sec1";
import { Sec2 } from "./components/Sec2";
import { Sec3 } from "./components/Sec3";
import { Sec4 } from "./components/Sec4";
import { Sec5 } from "./components/Sec5";
import { Sec6 } from "./components/Sec6";

function App() {
  return (
    <div>
      <NavSec />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
    </div>
  );
}

export default App;
/*
<NavSec />
<Sec1 />
<Sec2 />
<Sec3 />
<Sec4 />
<Sec5 />
*/
