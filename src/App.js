import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
     
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

            

            <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces " mode={mode}  showAlert={showAlert} />

        </div>
        {/* </BrowserRouter> */}
    </>
  );
}

export default App;
