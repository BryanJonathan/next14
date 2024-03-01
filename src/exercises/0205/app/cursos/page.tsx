import Link from "next/link";

export default async function PageCursos() {

  type LinksProduto = {
    id: number;
    slug: string;
    nome: string;
  };  

  type DataProduto = Array<LinksProduto>

  const response = await fetch("https://api.origamid.online/cursos");
  const data = await response.json() as DataProduto;

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {data.map((item) => (
          <Link key={item.id} href={`/cursos/${item.slug}`}><li>{item.nome}</li></Link>
        ))}
      </ul>
    </div>
  )
}