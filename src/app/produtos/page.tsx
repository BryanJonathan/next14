import { Produto } from "@/dynamicTypes/types";

export default async function ProdutosPage() {
  const req = await fetch('https://api.origamid.online/produtos');
  const data = await req.json() as Array<Produto>;
  
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>{item.nome}: R$ {item.preco}</li>
          )
        })}
      </ul>
    </div>
  )
}