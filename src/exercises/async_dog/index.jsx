import { useEffect, useState } from "react";
import "./styles.css";

/**
 * Exercise: Async Dog
 * 
 * Description: Here's a component that's responsible for generating an image of a dog automatically.
 * 
 * Your job is:
 *  1. Fix the never-ending loading state
 *  2. Load a picture of a dog using the provided api as soon as the user accesses the screen
 *  3. Anytime the user clicks on "Generar Perro" a new dog image should be displayed
 */

const API_URL = "https://dog.ceo/api/breeds/image/random";

const AsyncDog = () => {
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

export default AsyncDog;
