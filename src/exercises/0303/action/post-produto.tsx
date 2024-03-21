"use server";

import { Produto } from "@/dynamicTypes/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function PostProduto(objectData: Produto) {
  const call = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: objectData.nome,
      preco: objectData.preco,
      descricao: objectData.descricao,
      estoque: objectData.estoque,
      importado: objectData.importado,
    }),
  });
  if (call.ok) {
    revalidatePath("/produtos");
    redirect("/produtos");
  } else {
    console.error("DEU RUIM IRMAO");
  }
}
