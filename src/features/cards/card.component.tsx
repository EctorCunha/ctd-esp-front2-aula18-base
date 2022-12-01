import { FC } from "react";
import { Character } from "../../types/character.types";

export type CardProps = {
  character: Character;
};

const Card: FC<CardProps> = ({ character }: CardProps) => {
  
  return (
  <div>
    <h1>{character.name}</h1>
    {character.image ? <img src={character.image} alt={character.name}/> : null }
    <span>{character.followers}</span>
    <p>No followers yet</p>
    <p>{character.followers} followers</p>
  </div>
  );
};

export default Card;
