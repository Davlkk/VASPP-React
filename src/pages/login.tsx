import Background from "../components/Background";
import BlueButton from "../components/BlueButton";
import InputTransparent from "../components/InputTransparent";
import vaspp from "../pictures/vaspp-logo.svg";
import facebook from "../pictures/facebook.png";
import google from "../pictures/google.png";

function Login() {
  return (
    <Background>
      <div className="py-[15vh] min-h-screen min-w-screen flex flex-col items-center">
        <div>
          <img src={vaspp} alt="vaspp-logo" className="h-auto w-[20vh]" />
        </div>
        <div className="min-w-screen mt-32 w-[45vh]">
          <h1 className="text-white text-5xl font-semibold text-center">
            Insira seu e-mail para entrar
          </h1>
        </div>

        <div className="mt-12 w-auto h-auto flex flex-col gap-4 items-center">
          <InputTransparent placeholder="nome@gmail.com" className="w-[45vh]" />
          <a href="/home">
            <BlueButton type="submit" className="w-[45vh]" children="ENTRAR" />
          </a>

          <div className="w-[45vh] h-auto flex justify-center items-center gap-2 text-white">
            <hr className="w-full" />
            <p className="w-full text-md text-center">OU ENTRE COM</p>
            <hr className="w-full" />
          </div>

          <div className="w-[45vh] h-auto gap-5 flex items-center">
            <div className="w-full h-auto p-2 rounded-md bg-white flex justify-center items-center cursor-pointer hover:bg-slate-300 transition-colors duration-200">
              <img src={google} alt="google" className="w-[3vh]" />
            </div>
            <div className="w-full h-auto p-2 rounded-md bg-white flex justify-center items-center cursor-pointer hover:bg-slate-300 transition-colors duration-200">
              <img src={facebook} alt="facebook" className="w-[3vh]" />
            </div>
          </div>

          <div>
            <p>
              Não tem uma conta?{" "}
              <a href="/cadastro" className="text-[#4665FF]">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Login;
