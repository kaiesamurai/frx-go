"use client";

import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

interface Game {
  gameId: string;
  players: string[];
  fighterIds: string[];
  state: string;
}

interface QueryData {
  games: Game[];
}

interface QueryError {
  message: string;
}

export function QueryGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<QueryError | null>(null);
  const fighterImages: { [key: string]: string } = {
    "1": "biker.png",
    "2": "punk.png",
    "3": "cyborg.png",
  };

  const APIURL = "https://api.studio.thegraph.com/query/72991/scrollfighter/version/latest";

  const tokensQuery = gql`
    query {
      games(first: 5) {
        gameId
        players
        fighterIds
        state
      }
    }
  `;

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client
      .query<QueryData>({
        query: tokensQuery,
      })
      .then(response => {
        setGames(response.data.games);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  const shortenAddress = (address: string) => `${address.slice(0, 4)}...${address.slice(-4)}`;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {games.map(game => (
        <div key={game.gameId} style={{ border: "1px solid gray", padding: "20px", borderRadius: "8px" }}>
          <h2>Game ID: {game.gameId}</h2>
          <p>
            {game.players.length === 2
              ? `${shortenAddress(game.players[0])} VS ${shortenAddress(game.players[1])}`
              : "Not enough players"}
          </p>{" "}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {game.fighterIds.map((fighterId, index) => (
              <img
                key={fighterId}
                src={`sprites/${fighterImages[fighterId]}`}
                alt="Fighter"
                style={{
                  width: "100px",
                  height: "100px",
                  transform: index === 1 ? "scaleX(-1)" : "scaleX(1)",
                }}
              />
            ))}
          </div>
          <button className={`btn btn-primary btn-sm font-light hover:border-transparent `}>Join Game</button>
        </div>
      ))}
    </div>
  );
}
