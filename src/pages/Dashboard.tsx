import { Input } from "../components/Input";
import React, { useState } from "react";
import { Button } from "../components/Button";

import search from "../assets/search.svg";

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
    // Logic to fetch refunds based on the 'name' state
  }
  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar solicitações"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </form>

      <Button type="submit" variant="iconSmall">
        <img src={search} alt="Search Icon" className="w-5" />
      </Button>
    </div>
  );
}
