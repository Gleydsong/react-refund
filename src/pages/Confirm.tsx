import { Navigate, useLocation } from "react-router";
import ok from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();
  if (!location.state || !location.state.fromSubmit) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="bg-gray-500 w-full rouded-xl flex flex-col p-10 gap-6 lg:min-w[512px] items-center text-center">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitacao Enviada
      </h1>

      <img src={ok} alt="ok" className="w-28" />
      <p>Sua solicitação de reembolso foi enviada com sucesso!</p>

      <a
        href="/"
        className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear"
      >
        Voltar para a solicitação
      </a>
    </div>
  );
}
