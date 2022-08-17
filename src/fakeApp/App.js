import React from "react";
import { Button } from "@material-ui/core";
import { Boton } from "../components/boton/Boton";
import ThemeWrapper from "../themes/ThemeWrapper";

const App1 = () => {
  return (
    <div>
      123ABC
      <h2>Hello I'm the App1</h2>
        <Button variant="outlined">
          Hello Friends1
        </Button>

        <Boton
          type="primary"
          variant="outlined"
          buttonContent="Hello Friends"
          primary={true}
          backgroundColor="beige"
          compact={true}
          size="small"
          label="Hola Amigos"
        />
      
    </div>
  );
};


const App = () => {
  return (
    <div>
      123
      <ThemeWrapper toggle={true}>
        <h2>Hello I'm the App2</h2>
        <Button variant="outlined">
          Hello Friends
        </Button>

        <Boton
          type="primary"
          variant="outlined"
          buttonContent="Hello Friends"
          primary={true}
          backgroundColor="beige"
          compact={true}
          size="small"
          label="Hola Amigos"
        />
      </ThemeWrapper>
    </div>
  );
};

export default App;
