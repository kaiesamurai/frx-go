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

  return (
    <div>
      <h1>Games</h1>
      {games.map(game => (
        <div key={game.gameId}>
          <h2>Game ID: {game.gameId}</h2>
          <p>Players: {game.players.join(", ")}</p>
          <p>Fighter IDs: {game.fighterIds.join(", ")}</p>
          <p>State: {game.state}</p>
        </div>
      ))}
    </div>
  );
}
