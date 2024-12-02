import { useGenres } from "./hooks/useData";

const GameGeneres = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <ul>
      {data?.map((generes) => (
        <li key={generes.id}>{generes.name}</li>
      ))}
    </ul>
  );
};

export default GameGeneres;
