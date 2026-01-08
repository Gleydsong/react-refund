import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between gap-200">
      <img src={logo} alt="Logo" className="my-8" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Gleydson !
        </span>
        <img
          src={logout}
          alt="Logout"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
