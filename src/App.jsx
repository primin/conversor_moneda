import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [monedas, setMonedas] = useState([]);
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
      resultado = valor*(pesoargentino/pesocolombiano);
    } else
    if(moneda1==20 && moneda2==40) // Peso chileno
    {
      resultado = valor*(pesoargentino/pesochileno); 
    } else
    if(moneda1==20 && moneda2==50) // Dolares
    {
      resultado = valor*(pesoargentino/dolar); 
    } else
    if(moneda1==20 && moneda2==60) // Soles
    {
      resultado = valor*(pesoargentino/sol);
    } else // De Pesos colombianos a:
    if(moneda1==30 && moneda2==10) // Bolivianos
    {
      resultado = valor*pesocolombiano;
    } else
    if(moneda1==30 && moneda2==20) // Pesos argentinos 
    {
      resultado = valor*(pesocolombiano/pesoargentino);
    } else
    if(moneda1==30 && moneda2==40) // Peso chileno
    {
      resultado = valor*(pesocolombiano/pesochileno);
    } else
    if(moneda1==30 && moneda2==50) // Dolares 
    {
      resultado = valor*(pesocolombiano/dolar);
    } else
    if(moneda1==30 && moneda2==60) // Soles
    {
      resultado = valor*(pesocolombiano/sol);
    } else // De Peso chileno a:
    if(moneda1==40 && moneda2==10) // Bolivianos
    {
      resultado = valor*pesochileno;
    } else
    if(moneda1==40 && moneda2==20) // Pesos argentinos
    {
      resultado = valor*(pesochileno/pesoargentino);
    } else
    if(moneda1==40 && moneda2==30) // Pesos colombianos
    {
      resultado = valor*(pesochileno/pesocolombiano);
    } else
    if(moneda1==40 && moneda2==50) // Dolares
    {
      resultado = valor*(pesochileno/dolar);
    } else
    if(moneda1==40 && moneda2==60) // Soles
    {
      resultado = valor*(pesochileno/sol);
    } else // De Dolares a:
    if(moneda1==50 && moneda2==10) // Bolivianos
    {
      resultado = valor*dolar;
    } else
    if(moneda1==50 && moneda2==20) // Pesos argentinos
    {
      resultado = valor*(dolar/pesoargentino);
    } else
    if(moneda1==50 && moneda2==30) // Pesos colombianos
    {
      resultado = valor*(dolar/pesocolombiano);
    } else
    if(moneda1==50 && moneda2==40) // Peso chileno
    {
      resultado = valor*(dolar/pesochileno);
    } else
    if(moneda1==50 && moneda2==60) // Soles
    {
      resultado = valor*(dolar/sol);
    } else // De Soles a:
    if(moneda1==60 && moneda2==10) // Bolivianos
    {
      resultado = valor*sol;
    } else
    if(moneda1==60 && moneda2==20) // Pesos argentinos
    {
      resultado = valor*(sol/pesoargentino);
    } else
    if(moneda1==60 && moneda2==30) // Peso colombiano
    {
      resultado = valor*(sol/pesocolombiano);
    } else
    if(moneda1==60 && moneda2==40) // Peso chileno
    {
      resultado = valor*(sol/pesochileno);
    } else
    if(moneda1==60 && moneda2==50) // Dolares 
    {
      resultado = valor*(sol/dolar);
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
