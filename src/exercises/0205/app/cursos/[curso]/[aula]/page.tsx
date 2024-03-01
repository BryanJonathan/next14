type Aulas = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

export default async function Curso({
  params,
}: {
  params: { curso: string; aula: string };
}) {
  const response = await fetch(`https://api.origamid.online/cursos/${params.curso}/${params.aula}`);
  const data = await response.json() as Aulas;

  console.log(data)
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>{data.tempo}</p>
    </div>
  )
}