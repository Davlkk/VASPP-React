import BlueButton from "../components/BlueButton";
import vaspp from "../pictures/vaspp-logo.svg";

function Header() {
  return (
    <header className="bg-gradient-to-b from-[#001DD9]/40 to-[#000E6B]/10 justify-center items-center w-full grid grid-cols-1 p-4 mb-8">
      <div className="h-auto flex gap-[9vw] p-2 text-white justify-evenly items-center">
        <div className="flex justify-center items-center">
          <a href="/home">
            <img src={vaspp} alt="vaspp" className="h-[1.5vw]" />
          </a>
        </div>
        <a href="/home" className="flex justify-center items-center">
          Dashboard
        </a>
        <a href="" className="flex justify-center items-center">
          Sobre nós
        </a>
        <a href="/planos" className="flex justify-center items-center">
          Planos
        </a>
        <a href="" className="flex justify-center items-center">
          <BlueButton className="rounded-3xl w-[9vw] h-[4vh] border border-white/40 flex justify-center items-center ">
            <a href="/login">Entrar</a>
          </BlueButton>
        </a>
      </div>
    </header>
  );
}

export default Header;
