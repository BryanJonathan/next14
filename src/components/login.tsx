'use client'

import { Login } from "@/actions/login";

export default function LoginForm() {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;  


    await Login(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input type="text" name="username" id="username" />

      <label htmlFor="password">Senha</label>
      <input type="password" name="password" id="password" />

      <button>Login</button>
    </form>
  )
}