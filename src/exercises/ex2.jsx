import { useEffect, useState } from "react";
import "./exercise.css";

const API_URL = "https://dog.ceo/api/breeds/image/random";

/*Segundo ejercicio:
Tenemos un componente cuya responsabilidad es generar una imagen de un perro aleatoriamente.
    Objetivos a cumplir:
- Solucionar que la imagen siempre esta en estado "Cargando".
- Cargar una imagén de un perro al inicio automaticamente.
- Al presionar el botón "Generar Perro" el usuario debe generar una imagen aleatoria cada vez
que este sea presionado.
Suerte 😎🥳🧐!!
*/

const Exercise2 = () => {
  const [loading, setLoading] = useState(false);
  const [randomDogImage, setRandomDog] = useState();

  const getRandomDog = () => {
    try {
      setLoading(true);
      const dog = fetch(API_URL);
      if (dog) {
        const jsonDog = dog.json?.();
        if (jsonDog?.message) {
          setRandomDog(jsonDog.message);
        }
      }
    } catch (error) {
      console.error("Ocurrió un error", error);
    }
  };

  useEffect(() => {
    getRandomDog();
  }, []);

  return (
    <div className="exerciseContainer">
      <div className="dog_card">
        {randomDogImage ? (
          <img src={randomDogImage} className="dog" />
        ) : loading ? (
          <p className="loading_text">Cargando imagen...</p>
        ) : null}
      </div>
      <button
        onClick={getRandomDog}
        className="generate_button"
        disabled={loading}
      >
        <p>{loading ? "Cargando..." : "Generar Perro"}</p>
      </button>
    </div>
  );
};

export default Exercise2;
