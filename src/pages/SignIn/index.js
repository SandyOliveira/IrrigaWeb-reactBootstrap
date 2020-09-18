import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <form>
      <input type="email" placeholder="Seu e-mail" />
      <input type="password" placeholder="Sua senha" />

      <button type="submit">Acessar</button>
      <Link to="/dashboard">Criar conta</Link>
    </form>
  );
}
