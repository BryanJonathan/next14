'use client';

import { PostProduto } from "@/action/post-produto";
import { Produto } from "@/dynamicTypes/types";
import React from "react";

export default function FormAddProdutos() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data: Produto = {
      nome: event.currentTarget.nome.value,
      preco: Number(event.currentTarget.preco.value),
      descricao: event.currentTarget.descricao.value,
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0
    }

    //fetch para a API
    await PostProduto(data);
  }
  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div>
          <label htmlFor="preco">Preço</label>
          <input type="text" id="preco" name="preco" required />
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" required />
        </div>
        <div>
          <label htmlFor="estoque">Estoque</label>
          <input type="text" id="estoque" name="estoque" required />
        </div>
        <div className="flex">
          <input type="checkbox" name="importado" id="importado"/>
          <label htmlFor="importado">Importado</label>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
