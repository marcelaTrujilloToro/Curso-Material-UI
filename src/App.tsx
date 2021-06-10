import React from "react";
import Button from "@material-ui/core/Button";
import BotonesMaterialUI from "./components/primeros-pasos/01. botones/botones";
import { IconosMaterialUI } from "./components/primeros-pasos/02. iconos/iconos";
import { TipografiaMaterialUI } from "./components/primeros-pasos/03. tipografia/tipografia";
import { MakeStyle } from "./components/primeros-pasos/04. make-style/make-style";
import { CreateMuiTheme } from "./components/primeros-pasos/05. createMuiTheme/createMuiTheme";
import { NavBar } from "./components/primeros-pasos/06. nav-bar/NavBar";
import { ListasMaterialUI } from "./components/primeros-pasos/07. listas/listas";
import OcultoMaterialUI  from "./components/primeros-pasos/08. hidden/oculto";
import { Contenedor } from "./components/Drawer estatico/drawer/Contenedor";

// tutorial youtube
//https://www.youtube.com/playlist?list=PLPl81lqbj-4Kn-PRUvHuzh_591Euc3688

function App() {
  return (

    <div>
      <Contenedor/>
    </div>

    
    // <div className="App">
    //   <h4> Estilos Botones</h4>
    //   <BotonesMaterialUI />
    //   <hr />
    //   <h4> Iconos </h4>
    //   <IconosMaterialUI/>
    //   <hr />
    //   <h4> Typography </h4>
    //   <TipografiaMaterialUI/>
    //   <hr />
    //   <h4>Make Style</h4>
    //   <MakeStyle/>
    //   <hr />
    //   <h4>Create Mui Theme</h4>
    //   <CreateMuiTheme/>
    //   <p>se cambia el color primary por un verde, pero se comenta esa parte para que no afecte a todos los botones</p>
    //   <hr />
    //   <h4>AppBar</h4>
    //   <NavBar/>
    //   <hr />
    //   <h4>Listas</h4>
    //   <ListasMaterialUI/>
    //   <hr />
    //   <h4>Hidden</h4>
    //   <OcultoMaterialUI/>


    // </div>
  );
}

export default App;
