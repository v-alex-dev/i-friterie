import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import Friteries from "./components/friterie"

import{Button} from "primereact/button";
import { useEffect } from "react";
import friterieService from "./core/services/friterieService";

function App() {
  

  return (
    <div >
      <Friteries/>
    </div>
  );
}

export default App;
