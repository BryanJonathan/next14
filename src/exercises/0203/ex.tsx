'use client';
// - Crie uma página `/imc`
// - Crie um link para a página
// - Crie um componente para fazer o cálculo do IMC
// - O componente deve conter inputs (altura e peso) e um botão calcular
// - Ao clicar em calcular, deve mostrar o IMC na tela
// - Índice de Massa Corporal = peso / altura * altura

import React from "react";

export default function Imc() {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [dado, setDado] = React.useState(0);

  const setValor = (e: any) => {
    e.preventDefault();
    let alturaValue = Number(altura) / 100;
    let pesoValue = Number(peso);

    const imc = pesoValue / (alturaValue * alturaValue);
    setDado(imc);
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="altura">Altura cm</label>
          <input id="altura" onChange={e => setAltura(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="peso">Peso kg</label>
          <input id="peso" onChange={e => setPeso(e.target.value)}/>
        </div>
        <button onClick={setValor}>Calcular</button>
      </form>
      <span>Imc: {dado}</span>
    </div>
  )
}