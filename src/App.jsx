import { Header } from "./components/Header/Header";
import { ButtonAdd } from "./components/Inputs/ButtonAdd/ButtonAdd";
import { InputCategoria } from "./components/Inputs/InputCategoria/InputCategoria";
import { InputItem } from "./components/Inputs/InputItem/InputItem";
import { InputQtd } from "./components/Inputs/InputQtd/InputQtd";
import { ItemCheckList } from "./components/ItemCheckList/ItemCheckList";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-inputs">
          <InputItem />
          <InputQtd />
          <InputCategoria />
          <ButtonAdd />
        </div>
        <div>
          <ItemCheckList />
        </div>
      </div>
    </>
  )
}


