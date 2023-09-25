
import RedesSociales from "./RedesSociales";
import Formulario from "./Formulario"
import Alerta from "./Alerta"
import {useState} from "react"


const Registro = () => {

const [alert, setAlert] = useState ({
  error:"", msg:"", color:""
});

  return (
    <>

      <RedesSociales />
      <Formulario setAlert={setAlert}/>
      {alert.msg && <Alerta color={alert.color}>{alert.msg}</Alerta>}
    </>
  );
};

export default Registro