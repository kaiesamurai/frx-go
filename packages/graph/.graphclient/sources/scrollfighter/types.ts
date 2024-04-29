// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ScrollfighterTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type FightersRevealed = {
  id: Scalars['Bytes']['output'];
  gameId: Scalars['BigInt']['output'];
  player1: Scalars['Bytes']['output'];
  player2: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FightersRevealed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gameId?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  player1?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FightersRevealed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FightersRevealed_filter>>>;
};

export type FightersRevealed_orderBy =
  | 'id'
  | 'gameId'
  | 'player1'
  | 'player2'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type GameAccepted = {
  id: Scalars['Bytes']['output'];
  gameId: Scalars['BigInt']['output'];
  player1: Scalars['Bytes']['output'];
  player2: Scalars['Bytes']['output'];
  wageredAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GameAccepted_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gameId?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  player1?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wageredAmount?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wageredAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameAccepted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameAccepted_filter>>>;
};

export type GameAccepted_orderBy =
  | 'id'
  | 'gameId'
  | 'player1'
  | 'player2'
  | 'wageredAmount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type GameEnded = {
  id: Scalars['Bytes']['output'];
  gameId: Scalars['BigInt']['output'];
  player1: Scalars['Bytes']['output'];
  player2: Scalars['Bytes']['output'];
  winner: Scalars['Bytes']['output'];
  wageredAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GameEndedByTimeout = {
  id: Scalars['Bytes']['output'];
  gameId: Scalars['BigInt']['output'];
  player1: Scalars['Bytes']['output'];
  player2: Scalars['Bytes']['output'];
  winner: Scalars['Bytes']['output'];
  wageredAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GameEndedByTimeout_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gameId?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  player1?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  winner?: InputMaybe<Scalars['Bytes']['input']>;
  winner_not?: InputMaybe<Scalars['Bytes']['input']>;
  winner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  winner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  winner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  winner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  winner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  winner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  winner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  winner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wageredAmount?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wageredAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameEndedByTimeout_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameEndedByTimeout_filter>>>;
};

export type GameEndedByTimeout_orderBy =
  | 'id'
  | 'gameId'
  | 'player1'
  | 'player2'
  | 'winner'
  | 'wageredAmount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type GameEnded_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gameId?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  player1?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  winner?: InputMaybe<Scalars['Bytes']['input']>;
  winner_not?: InputMaybe<Scalars['Bytes']['input']>;
  winner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  winner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  winner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  winner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  winner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  winner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  winner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  winner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wageredAmount?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wageredAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameEnded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameEnded_filter>>>;
};

export type GameEnded_orderBy =
  | 'id'
  | 'gameId'
  | 'player1'
  | 'player2'
  | 'winner'
  | 'wageredAmount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type GameProposed = {
  id: Scalars['Bytes']['output'];
  gameId: Scalars['BigInt']['output'];
  player1: Scalars['Bytes']['output'];
  player2: Scalars['Bytes']['output'];
  wageredAmount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type GameProposed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  gameId?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gameId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gameId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  player1?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player1_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player1_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player1_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player1_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  player2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  player2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  player2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  player2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  wageredAmount?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wageredAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wageredAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GameProposed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GameProposed_filter>>>;
};

export type GameProposed_orderBy =
  | 'id'
  | 'gameId'
  | 'player1'
  | 'player2'
  | 'wageredAmount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  fightersRevealed?: Maybe<FightersRevealed>;
  fightersRevealeds: Array<FightersRevealed>;
  gameAccepted?: Maybe<GameAccepted>;
  gameAccepteds: Array<GameAccepted>;
  gameEnded?: Maybe<GameEnded>;
  gameEndeds: Array<GameEnded>;
  gameEndedByTimeout?: Maybe<GameEndedByTimeout>;
  gameEndedByTimeouts: Array<GameEndedByTimeout>;
  gameProposed?: Maybe<GameProposed>;
  gameProposeds: Array<GameProposed>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryfightersRevealedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfightersRevealedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FightersRevealed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FightersRevealed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameAcceptedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameAcceptedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameAccepted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameAccepted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameEndedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameEndedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameEnded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameEnded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameEndedByTimeoutArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameEndedByTimeoutsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameEndedByTimeout_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameEndedByTimeout_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameProposedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygameProposedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameProposed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameProposed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  fightersRevealed?: Maybe<FightersRevealed>;
  fightersRevealeds: Array<FightersRevealed>;
  gameAccepted?: Maybe<GameAccepted>;
  gameAccepteds: Array<GameAccepted>;
  gameEnded?: Maybe<GameEnded>;
  gameEndeds: Array<GameEnded>;
  gameEndedByTimeout?: Maybe<GameEndedByTimeout>;
  gameEndedByTimeouts: Array<GameEndedByTimeout>;
  gameProposed?: Maybe<GameProposed>;
  gameProposeds: Array<GameProposed>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionfightersRevealedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfightersRevealedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FightersRevealed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FightersRevealed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameAcceptedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameAcceptedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameAccepted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameAccepted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameEndedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameEndedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameEnded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameEnded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameEndedByTimeoutArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameEndedByTimeoutsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameEndedByTimeout_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameEndedByTimeout_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameProposedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongameProposedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GameProposed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GameProposed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  fightersRevealed: InContextSdkMethod<Query['fightersRevealed'], QueryfightersRevealedArgs, MeshContext>,
  /** null **/
  fightersRevealeds: InContextSdkMethod<Query['fightersRevealeds'], QueryfightersRevealedsArgs, MeshContext>,
  /** null **/
  gameAccepted: InContextSdkMethod<Query['gameAccepted'], QuerygameAcceptedArgs, MeshContext>,
  /** null **/
  gameAccepteds: InContextSdkMethod<Query['gameAccepteds'], QuerygameAcceptedsArgs, MeshContext>,
  /** null **/
  gameEnded: InContextSdkMethod<Query['gameEnded'], QuerygameEndedArgs, MeshContext>,
  /** null **/
  gameEndeds: InContextSdkMethod<Query['gameEndeds'], QuerygameEndedsArgs, MeshContext>,
  /** null **/
  gameEndedByTimeout: InContextSdkMethod<Query['gameEndedByTimeout'], QuerygameEndedByTimeoutArgs, MeshContext>,
  /** null **/
  gameEndedByTimeouts: InContextSdkMethod<Query['gameEndedByTimeouts'], QuerygameEndedByTimeoutsArgs, MeshContext>,
  /** null **/
  gameProposed: InContextSdkMethod<Query['gameProposed'], QuerygameProposedArgs, MeshContext>,
  /** null **/
  gameProposeds: InContextSdkMethod<Query['gameProposeds'], QuerygameProposedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  fightersRevealed: InContextSdkMethod<Subscription['fightersRevealed'], SubscriptionfightersRevealedArgs, MeshContext>,
  /** null **/
  fightersRevealeds: InContextSdkMethod<Subscription['fightersRevealeds'], SubscriptionfightersRevealedsArgs, MeshContext>,
  /** null **/
  gameAccepted: InContextSdkMethod<Subscription['gameAccepted'], SubscriptiongameAcceptedArgs, MeshContext>,
  /** null **/
  gameAccepteds: InContextSdkMethod<Subscription['gameAccepteds'], SubscriptiongameAcceptedsArgs, MeshContext>,
  /** null **/
  gameEnded: InContextSdkMethod<Subscription['gameEnded'], SubscriptiongameEndedArgs, MeshContext>,
  /** null **/
  gameEndeds: InContextSdkMethod<Subscription['gameEndeds'], SubscriptiongameEndedsArgs, MeshContext>,
  /** null **/
  gameEndedByTimeout: InContextSdkMethod<Subscription['gameEndedByTimeout'], SubscriptiongameEndedByTimeoutArgs, MeshContext>,
  /** null **/
  gameEndedByTimeouts: InContextSdkMethod<Subscription['gameEndedByTimeouts'], SubscriptiongameEndedByTimeoutsArgs, MeshContext>,
  /** null **/
  gameProposed: InContextSdkMethod<Subscription['gameProposed'], SubscriptiongameProposedArgs, MeshContext>,
  /** null **/
  gameProposeds: InContextSdkMethod<Subscription['gameProposeds'], SubscriptiongameProposedsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["scrollfighter"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
