import React from "react";
import { Button } from "@material-ui/core";
import { Buttonz } from "../wrapped/buttonz/buttonz";
import { Alertz } from "../wrapped/alertz";
import ThemeWrapper from "../themes/ThemeWrapper";


const App = () => {
  return (
    <div>
      123
      <ThemeWrapper toggle={true}>
        <h2>Hello I'm the App2</h2>
        <Button variant="outlined">
          Hello Friends
        </Button>

        <Buttonz
          type="primary"
          variant="outlined"
          buttonContent="Hello Friends"
          primary={true}
          backgroundColor="beige"
          compact={true}
          size="small"
          label="Hola Amigos"
        />

        <Alertz
          severity="error"
          content="qwerty"
        />

      </ThemeWrapper>
    </div>
  );
};

export default App;
