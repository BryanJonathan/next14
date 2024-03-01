import Link from "next/link";

type Aulas = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

type FetchLinksProduto = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Array<Aulas>;
};  


export default async function CursoPage({
  params,
}: {
  params: { curso: string };
}) {
  const response = await fetch(`https://api.origamid.online/cursos/${params.curso}`);
  const data = await response.json() as FetchLinksProduto;
  
  return (
    <div>
      <h1>Curso de {params.curso.toUpperCase()}</h1>
      <p>{data.nome}</p>        
      <p>{data.descricao}</p>        
      <p>{data.total_aulas}</p>        
      <p>{data.total_horas}</p>    
      <ul>
        {data.aulas.map((aula) => (
          <Link key={aula.id} href={`/cursos/${params.curso}/${aula.slug}`}>
            <li>{aula.nome}</li>
          </Link>
        ))}
      </ul>   
    </div>
  )
}