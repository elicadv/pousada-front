import S from "./Header.module.css";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <div className={S.divisaoHeader}>
      <header>
        
        <h1 className={S.tituloPrincipal}>Bom Descanso!</h1>
        <p className={S.p}>A melhor pousada para você!!!</p>

        <div className={S.botao}>
          <Button name="Login" />
          <Button name="Cadastro" />
        </div>

      </header>
    </div>
  );
}

export default Header;