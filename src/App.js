import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [moneda1, setMoneda1] = useState('10');
  const [moneda2, setMoneda2] = useState('10');
  const [monto, setMonto] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const handleConvert = () => {
    let dolar = 6.89;
    let pesochileno = 0.0079;
    let pesoargentino = 0.019;
    let sol = 1.85;
    let pesocolombiano = 0.0017;
    let resultado = 0;

    // Conversión de Bolivianos a:
    if (moneda1==10 && moneda2==20) // Peso argentino
    {
      resultado = monto/pesoargentino;
    } else 
    if (moneda1==10 && moneda2==30) // Peso colombiano
    {
      resultado = monto/pesocolombiano;
    } else
    if (moneda1==10 && moneda2==40) // Peso chileno
    {
      resultado = monto/pesochileno;
    } else
    if (moneda1==10 && moneda2==50) // Dolares
    {
      resultado = monto/dolar;
    }
    else
    if (moneda1==10 && moneda2==60) // Soles
    {
      resultado = monto/sol;
    } else  // De Pesos argentinos a:
    if(moneda1==20 && moneda2==10) // Bolivianos
    {
      resultado = monto*pesoargentino;
    } else
    if(moneda1==20 && moneda2==30) // Peso colombiano
    {
      resultado = monto*(pesoargentino/pesocolombiano);
    } else
    if(moneda1==20 && moneda2==40) // Peso chileno
    {
      resultado = monto*(pesoargentino/pesochileno); 
    } else
    if(moneda1==20 && moneda2==50) // Dolares
    {
      resultado = monto*(pesoargentino/dolar); 
    } else
    if(moneda1==20 && moneda2==60) // Soles
    {
      resultado = monto*(pesoargentino/sol);
    } else // De Pesos colombianos a:
    if(moneda1==30 && moneda2==10) // Bolivianos
    {
      resultado = monto*pesocolombiano;
    } else
    if(moneda1==30 && moneda2==20) // Pesos argentinos 
    {
      resultado = monto*(pesocolombiano/pesoargentino);
    } else
    if(moneda1==30 && moneda2==40) // Peso chileno
    {
      resultado = monto*(pesocolombiano/pesochileno);
    } else
    if(moneda1==30 && moneda2==50) // Dolares 
    {
      resultado = monto*(pesocolombiano/dolar);
    } else
    if(moneda1==30 && moneda2==60) // Soles
    {
      resultado = monto*(pesocolombiano/sol);
    } else // De Peso chileno a:
    if(moneda1==40 && moneda2==10) // Bolivianos
    {
      resultado = monto*pesochileno;
    } else
    if(moneda1==40 && moneda2==20) // Pesos argentinos
    {
      resultado = monto*(pesochileno/pesoargentino);
    } else
    if(moneda1==40 && moneda2==30) // Pesos colombianos
    {
      resultado = monto*(pesochileno/pesocolombiano);
    } else
    if(moneda1==40 && moneda2==50) // Dolares
    {
      resultado = monto*(pesochileno/dolar);
    } else
    if(moneda1==40 && moneda2==60) // Soles
    {
      resultado = monto*(pesochileno/sol);
    } else // De Dolares a:
    if(moneda1==50 && moneda2==10) // Bolivianos
    {
      resultado = monto*dolar;
    } else
    if(moneda1==50 && moneda2==20) // Pesos argentinos
    {
      resultado = monto*(dolar/pesoargentino);
    } else
    if(moneda1==50 && moneda2==30) // Pesos colombianos
    {
      resultado = monto*(dolar/pesocolombiano);
    } else
    if(moneda1==50 && moneda2==40) // Peso chileno
    {
      resultado = monto*(dolar/pesochileno);
    } else
    if(moneda1==50 && moneda2==60) // Soles
    {
      resultado = monto*(dolar/sol);
    } else // De Soles a:
    if(moneda1==60 && moneda2==10) // Bolivianos
    {
      resultado = monto*sol;
    } else
    if(moneda1==60 && moneda2==20) // Pesos argentinos
    {
      resultado = monto*(sol/pesoargentino);
    } else
    if(moneda1==60 && moneda2==30) // Peso colombiano
    {
      resultado = monto*(sol/pesocolombiano);
    } else
    if(moneda1==60 && moneda2==40) // Peso chileno
    {
      resultado = monto*(sol/pesochileno);
    } else
    if(moneda1==60 && moneda2==50) // Dolares 
    {
      resultado = monto*(sol/dolar);
    } else
    if(moneda1===moneda2) // Cuando son iguales 
    {
        resultado = monto;
    }

    setResult(resultado.toFixed(2));

  };

  return (
    <div className="background">
      <div className="container">
        <div className="selects-container">

          <select value={moneda1} name="moneda-1" id="moneda-1" onChange={(e) => setMoneda1(e.target.value)}>
            <option value="10">Bolivianos</option>
            <option value="20">Pesos Argentinos</option>
            <option value="30">Peso Colombiano</option>
            <option value="40">Peso Chileno</option>
            <option value="50">Dolares</option>
            <option value="60">Soles</option>
          </select>

          <select value={moneda2} name="moneda-2" id="moneda-2" onChange={(e) => setMoneda2(e.target.value)}
          >
            <option value="10">Bolivianos</option>
            <option value="20">Pesos Argentinos</option>
            <option value="30">Peso Colombiano</option>
            <option value="40">Peso Chileno</option>
            <option value="50">Dolares</option>
            <option value="60">Soles</option>
          </select>
        </div>
        <div className="inputs-container">
          <input
            className=""
            type="text"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <p className=""> Resultado: {result}</p>
        </div>
        <div>
          <button onClick={handleConvert}>Convertir</button>
        </div>
      </div>
    </div>
  );
}
