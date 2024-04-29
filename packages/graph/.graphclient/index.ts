// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ScrollfighterTypes } from './sources/scrollfighter/types';
import type { Compoundv2Types } from './sources/compoundv2/types';
import * as importedModule$0 from "./sources/scrollfighter/introspectionSchema";
import * as importedModule$1 from "./sources/compoundv2/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  comptroller?: Maybe<Comptroller>;
  comptrollers: Array<Comptroller>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  accountCToken?: Maybe<AccountCToken>;
  accountCTokens: Array<AccountCToken>;
  accountCTokenTransaction?: Maybe<AccountCTokenTransaction>;
  accountCTokenTransactions: Array<AccountCTokenTransaction>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  mintEvent?: Maybe<MintEvent>;
  mintEvents: Array<MintEvent>;
  redeemEvent?: Maybe<RedeemEvent>;
  redeemEvents: Array<RedeemEvent>;
  liquidationEvent?: Maybe<LiquidationEvent>;
  liquidationEvents: Array<LiquidationEvent>;
  borrowEvent?: Maybe<BorrowEvent>;
  borrowEvents: Array<BorrowEvent>;
  repayEvent?: Maybe<RepayEvent>;
  repayEvents: Array<RepayEvent>;
  ctokenTransfer?: Maybe<CTokenTransfer>;
  ctokenTransfers: Array<CTokenTransfer>;
  underlyingTransfer?: Maybe<UnderlyingTransfer>;
  underlyingTransfers: Array<UnderlyingTransfer>;
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


export type QuerycomptrollerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycomptrollersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Comptroller_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Comptroller_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCTokenTransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountCTokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCTokenTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RedeemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BorrowEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RepayEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryctokenTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryctokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CTokenTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CTokenTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunderlyingTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunderlyingTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnderlyingTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnderlyingTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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
  comptroller?: Maybe<Comptroller>;
  comptrollers: Array<Comptroller>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  accountCToken?: Maybe<AccountCToken>;
  accountCTokens: Array<AccountCToken>;
  accountCTokenTransaction?: Maybe<AccountCTokenTransaction>;
  accountCTokenTransactions: Array<AccountCTokenTransaction>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  mintEvent?: Maybe<MintEvent>;
  mintEvents: Array<MintEvent>;
  redeemEvent?: Maybe<RedeemEvent>;
  redeemEvents: Array<RedeemEvent>;
  liquidationEvent?: Maybe<LiquidationEvent>;
  liquidationEvents: Array<LiquidationEvent>;
  borrowEvent?: Maybe<BorrowEvent>;
  borrowEvents: Array<BorrowEvent>;
  repayEvent?: Maybe<RepayEvent>;
  repayEvents: Array<RepayEvent>;
  ctokenTransfer?: Maybe<CTokenTransfer>;
  ctokenTransfers: Array<CTokenTransfer>;
  underlyingTransfer?: Maybe<UnderlyingTransfer>;
  underlyingTransfers: Array<UnderlyingTransfer>;
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


export type SubscriptioncomptrollerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncomptrollersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Comptroller_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Comptroller_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCTokenTransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountCTokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCTokenTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MintEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MintEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RedeemEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RedeemEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BorrowEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RepayEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionctokenTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionctokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CTokenTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CTokenTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunderlyingTransferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunderlyingTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnderlyingTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnderlyingTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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

/** The Comptroller type has protocol level variables stored */
export type Comptroller = {
  /** ID is set to 1 */
  id: Scalars['ID']['output'];
  /** Address of price oracle the comptroller uses */
  priceOracle?: Maybe<Scalars['Bytes']['output']>;
  /** Factor used to determine repayAmount for liquidating */
  closeFactor?: Maybe<Scalars['BigInt']['output']>;
  /** The percent bonus liquidators get for liquidating */
  liquidationIncentive?: Maybe<Scalars['BigInt']['output']>;
  /** Max assets a single user can enter */
  maxAssets?: Maybe<Scalars['BigInt']['output']>;
};

export type Comptroller_orderBy =
  | 'id'
  | 'priceOracle'
  | 'closeFactor'
  | 'liquidationIncentive'
  | 'maxAssets';

export type Comptroller_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  priceOracle?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  priceOracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  priceOracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  closeFactor?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationIncentive?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationIncentive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationIncentive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxAssets?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxAssets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxAssets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Comptroller_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Comptroller_filter>>>;
};

/** Market stores all high level variables for a cToken market */
export type Market = {
  /** Yearly borrow rate. With 2102400 blocks per year */
  borrowRate: Scalars['BigDecimal']['output'];
  /** The cToken contract balance of ERC20 or ETH */
  cash: Scalars['BigDecimal']['output'];
  /** Collateral factor determining how much one can borrow */
  collateralFactor: Scalars['BigDecimal']['output'];
  /** Exchange rate of tokens / cTokens */
  exchangeRate: Scalars['BigDecimal']['output'];
  /** Address of the interest rate model */
  interestRateModelAddress: Scalars['Bytes']['output'];
  /** Name of the cToken */
  name: Scalars['String']['output'];
  /** Reserves stored in the contract */
  reserves: Scalars['BigDecimal']['output'];
  /** Yearly supply rate. With 2104400 blocks per year */
  supplyRate: Scalars['BigDecimal']['output'];
  /** CToken symbol */
  symbol: Scalars['String']['output'];
  /** CToken address */
  id: Scalars['ID']['output'];
  /** Borrows in the market */
  totalBorrows: Scalars['BigDecimal']['output'];
  /** CToken supply. CTokens have 8 decimals */
  totalSupply: Scalars['BigDecimal']['output'];
  /** Underlying token address */
  underlyingAddress: Scalars['Bytes']['output'];
  /** Underlying token name */
  underlyingName: Scalars['String']['output'];
  /** Underlying price of token in ETH (ex. 0.007 DAI) */
  underlyingPrice: Scalars['BigDecimal']['output'];
  /** Underlying token symbol */
  underlyingSymbol: Scalars['String']['output'];
  /** Block the market is updated to */
  accrualBlockNumber: Scalars['Int']['output'];
  /** Timestamp the market was most recently updated */
  blockTimestamp: Scalars['Int']['output'];
  /** The history of the markets borrow index return (Think S&P 500) */
  borrowIndex: Scalars['BigDecimal']['output'];
  /** The factor determining interest that goes to reserves */
  reserveFactor: Scalars['BigInt']['output'];
  /** Underlying token price in USD */
  underlyingPriceUSD: Scalars['BigDecimal']['output'];
  /** Underlying token decimal length */
  underlyingDecimals: Scalars['Int']['output'];
};

export type Market_orderBy =
  | 'borrowRate'
  | 'cash'
  | 'collateralFactor'
  | 'exchangeRate'
  | 'interestRateModelAddress'
  | 'name'
  | 'reserves'
  | 'supplyRate'
  | 'symbol'
  | 'id'
  | 'totalBorrows'
  | 'totalSupply'
  | 'underlyingAddress'
  | 'underlyingName'
  | 'underlyingPrice'
  | 'underlyingSymbol'
  | 'accrualBlockNumber'
  | 'blockTimestamp'
  | 'borrowIndex'
  | 'reserveFactor'
  | 'underlyingPriceUSD'
  | 'underlyingDecimals';

export type Market_filter = {
  borrowRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  borrowRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cash?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cash_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cash_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collateralFactor?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  interestRateModelAddress?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  interestRateModelAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  interestRateModelAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  interestRateModelAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserves?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserves_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  supplyRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supplyRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  supplyRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  totalBorrows?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingName?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not?: InputMaybe<Scalars['String']['input']>;
  underlyingName_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingName_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingName_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingName_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingName_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  accrualBlockNumber?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  borrowIndex?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  borrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  borrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveFactor?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_not?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingPriceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingDecimals?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  underlyingDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Market_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Market_filter>>>;
};

/**
 * Account is an ETH address, with a list of all cToken markets the account has
 * participated in, along with liquidation information.
 */
export type Account = {
  /** User ETH address */
  id: Scalars['ID']['output'];
  /** Array of CTokens user is in */
  tokens: Array<AccountCToken>;
  /** Count user has been liquidated */
  countLiquidated: Scalars['Int']['output'];
  /** Count user has liquidated others */
  countLiquidator: Scalars['Int']['output'];
  /** True if user has ever borrowed */
  hasBorrowed: Scalars['Boolean']['output'];
  health?: Maybe<Scalars['BigDecimal']['output']>;
  totalBorrowValueInEth: Scalars['BigDecimal']['output'];
  totalCollateralValueInEth: Scalars['BigDecimal']['output'];
};


/**
 * Account is an ETH address, with a list of all cToken markets the account has
 * participated in, along with liquidation information.
 */
export type AccounttokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCToken_filter>;
};

export type AccountCToken_orderBy =
  | 'id'
  | 'market'
  | 'market__borrowRate'
  | 'market__cash'
  | 'market__collateralFactor'
  | 'market__exchangeRate'
  | 'market__interestRateModelAddress'
  | 'market__name'
  | 'market__reserves'
  | 'market__supplyRate'
  | 'market__symbol'
  | 'market__id'
  | 'market__totalBorrows'
  | 'market__totalSupply'
  | 'market__underlyingAddress'
  | 'market__underlyingName'
  | 'market__underlyingPrice'
  | 'market__underlyingSymbol'
  | 'market__accrualBlockNumber'
  | 'market__blockTimestamp'
  | 'market__borrowIndex'
  | 'market__reserveFactor'
  | 'market__underlyingPriceUSD'
  | 'market__underlyingDecimals'
  | 'symbol'
  | 'account'
  | 'account__id'
  | 'account__countLiquidated'
  | 'account__countLiquidator'
  | 'account__hasBorrowed'
  | 'transactions'
  | 'accrualBlockNumber'
  | 'enteredMarket'
  | 'cTokenBalance'
  | 'totalUnderlyingSupplied'
  | 'totalUnderlyingRedeemed'
  | 'accountBorrowIndex'
  | 'totalUnderlyingBorrowed'
  | 'totalUnderlyingRepaid'
  | 'storedBorrowBalance';

export type AccountCToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_filter>;
  transactions_?: InputMaybe<AccountCTokenTransaction_filter>;
  accrualBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  enteredMarket?: InputMaybe<Scalars['Boolean']['input']>;
  enteredMarket_not?: InputMaybe<Scalars['Boolean']['input']>;
  enteredMarket_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  enteredMarket_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cTokenBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingSupplied?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingSupplied_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingSupplied_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingRedeemed?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRedeemed_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingRedeemed_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrowIndex?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingBorrowed?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingBorrowed_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingBorrowed_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingRepaid?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalUnderlyingRepaid_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalUnderlyingRepaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  storedBorrowBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  storedBorrowBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  storedBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountCToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountCToken_filter>>>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tokens_?: InputMaybe<AccountCToken_filter>;
  countLiquidated?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_not?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_gt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_lt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_gte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_lte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidated_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidated_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidator?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_not?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_gt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_lt?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_gte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_lte?: InputMaybe<Scalars['Int']['input']>;
  countLiquidator_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  countLiquidator_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hasBorrowed?: InputMaybe<Scalars['Boolean']['input']>;
  hasBorrowed_not?: InputMaybe<Scalars['Boolean']['input']>;
  hasBorrowed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hasBorrowed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type AccountCTokenTransaction_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<AccountCToken_filter>;
  tx_hash?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountCTokenTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountCTokenTransaction_filter>>>;
};

/**
 * AccountCToken is a single account within a single cToken market, with data such
 * as interest earned or paid
 */
export type AccountCToken = {
  /** Concatenation of CToken address and user address */
  id: Scalars['ID']['output'];
  /** Relation to market */
  market: Market;
  /** Symbol of the cToken */
  symbol: Scalars['String']['output'];
  /** Relation to user */
  account: Account;
  /** Transactions data */
  transactions: Array<AccountCTokenTransaction>;
  /** Block number this asset was updated at in the contract */
  accrualBlockNumber: Scalars['BigInt']['output'];
  /** True if user is entered, false if they are exited */
  enteredMarket: Scalars['Boolean']['output'];
  /** CToken balance of the user */
  cTokenBalance: Scalars['BigDecimal']['output'];
  /** Total amount of underlying supplied */
  totalUnderlyingSupplied: Scalars['BigDecimal']['output'];
  /** Total amount of underling redeemed */
  totalUnderlyingRedeemed: Scalars['BigDecimal']['output'];
  /** The value of the borrow index upon users last interaction */
  accountBorrowIndex: Scalars['BigDecimal']['output'];
  /** Total amount underlying borrowed, exclusive of interest */
  totalUnderlyingBorrowed: Scalars['BigDecimal']['output'];
  /** Total amount underlying repaid */
  totalUnderlyingRepaid: Scalars['BigDecimal']['output'];
  /** Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber) */
  storedBorrowBalance: Scalars['BigDecimal']['output'];
  supplyBalanceUnderlying: Scalars['BigDecimal']['output'];
  lifetimeSupplyInterestAccrued: Scalars['BigDecimal']['output'];
  borrowBalanceUnderlying: Scalars['BigDecimal']['output'];
  lifetimeBorrowInterestAccrued: Scalars['BigDecimal']['output'];
};


/**
 * AccountCToken is a single account within a single cToken market, with data such
 * as interest earned or paid
 */
export type AccountCTokentransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountCTokenTransaction_filter>;
};

export type AccountCTokenTransaction_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__symbol'
  | 'account__accrualBlockNumber'
  | 'account__enteredMarket'
  | 'account__cTokenBalance'
  | 'account__totalUnderlyingSupplied'
  | 'account__totalUnderlyingRedeemed'
  | 'account__accountBorrowIndex'
  | 'account__totalUnderlyingBorrowed'
  | 'account__totalUnderlyingRepaid'
  | 'account__storedBorrowBalance'
  | 'tx_hash'
  | 'timestamp'
  | 'block'
  | 'logIndex';

/** Auxiliary entity for AccountCToken */
export type AccountCTokenTransaction = {
  id: Scalars['ID']['output'];
  account: AccountCToken;
  tx_hash: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  block: Scalars['BigInt']['output'];
  logIndex: Scalars['BigInt']['output'];
};

export type Account_orderBy =
  | 'id'
  | 'tokens'
  | 'countLiquidated'
  | 'countLiquidator'
  | 'hasBorrowed';

/**
 * TransferEvent will be stored for every mint, redeem, liquidation, and any normal
 * transfer between two accounts.
 */
export type TransferEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** cTokens transferred */
  amount: Scalars['BigDecimal']['output'];
  /** Account that received tokens */
  to: Scalars['Bytes']['output'];
  /** Account that sent tokens */
  from: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']['output'];
};

/**
 * An interface for a transfer of any cToken. TransferEvent, MintEvent,
 * RedeemEvent, and LiquidationEvent all use this interface
 */
export type CTokenTransfer = {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** cTokens transferred */
  amount: Scalars['BigDecimal']['output'];
  /** Account that received tokens */
  to: Scalars['Bytes']['output'];
  /** Account that sent tokens */
  from: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']['output'];
};

export type TransferEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol';

export type TransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TransferEvent_filter>>>;
};

/**
 * MintEvent stores information for mints. From address will always be a cToken
 * market address
 */
export type MintEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** cTokens transferred */
  amount: Scalars['BigDecimal']['output'];
  /** Account that received tokens (minter) */
  to: Scalars['Bytes']['output'];
  /** Account that sent tokens (CToken contract) */
  from: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']['output'];
  /** Underlying token amount transferred */
  underlyingAmount?: Maybe<Scalars['BigDecimal']['output']>;
};

export type MintEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingAmount';

export type MintEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MintEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MintEvent_filter>>>;
};

/**
 * RedeemEvent stores information for redeems. To address will always be a
 * cToken market address
 */
export type RedeemEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** cTokens transferred */
  amount: Scalars['BigDecimal']['output'];
  /** Account that received tokens (CToken contract) */
  to: Scalars['Bytes']['output'];
  /** Account that sent tokens (redeemer) */
  from: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']['output'];
  /** Underlying token amount transferred */
  underlyingAmount?: Maybe<Scalars['BigDecimal']['output']>;
};

export type RedeemEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingAmount';

export type RedeemEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RedeemEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RedeemEvent_filter>>>;
};

/**
 * LiquidationEvent stores information for liquidations. The event is emitted from
 * the cToken market address.
 */
export type LiquidationEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** cTokens seized */
  amount: Scalars['BigDecimal']['output'];
  /** Liquidator receiving tokens */
  to: Scalars['Bytes']['output'];
  /** Account being liquidated (borrower) */
  from: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** cToken that was sezied as collateral */
  cTokenSymbol: Scalars['String']['output'];
  /** Symbol of the underlying asset repaid through liquidation */
  underlyingSymbol: Scalars['String']['output'];
  /** Underlying cToken amount that was repaid by liquidator */
  underlyingRepayAmount: Scalars['BigDecimal']['output'];
};

export type LiquidationEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingSymbol'
  | 'underlyingRepayAmount';

export type LiquidationEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingRepayAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  underlyingRepayAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  underlyingRepayAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidationEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidationEvent_filter>>>;
};

/** BorrowEvent stores information for borrows */
export type BorrowEvent = UnderlyingTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** Amount of underlying borrowed */
  amount: Scalars['BigDecimal']['output'];
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']['output'];
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']['output'];
};

/**
 * Underlying transfers are transfers of underlying collateral for both borrows
 * and repays
 */
export type UnderlyingTransfer = {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** Amount of underlying borrowed */
  amount: Scalars['BigDecimal']['output'];
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']['output'];
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']['output'];
};

export type BorrowEvent_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol';

export type BorrowEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  borrower?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BorrowEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BorrowEvent_filter>>>;
};

/**
 * RepayEvent stores information for repays. Payer is not always the same as
 * borrower, such as in the event of a Liquidation
 */
export type RepayEvent = UnderlyingTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']['output'];
  /** Amount of underlying repaid */
  amount: Scalars['BigDecimal']['output'];
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']['output'];
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']['output'];
  /** Block number */
  blockNumber: Scalars['Int']['output'];
  /** Block time */
  blockTime: Scalars['Int']['output'];
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']['output'];
  /** Payer of the borrow funds */
  payer: Scalars['Bytes']['output'];
};

export type RepayEvent_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol'
  | 'payer';

export type RepayEvent_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  borrower?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payer?: InputMaybe<Scalars['Bytes']['input']>;
  payer_not?: InputMaybe<Scalars['Bytes']['input']>;
  payer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  payer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  payer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  payer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  payer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  payer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  payer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  payer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RepayEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RepayEvent_filter>>>;
};

export type CTokenTransfer_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol';

export type CTokenTransfer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cTokenSymbol?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cTokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cTokenSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CTokenTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CTokenTransfer_filter>>>;
};

export type UnderlyingTransfer_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol';

export type UnderlyingTransfer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  borrower?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime?: InputMaybe<Scalars['Int']['input']>;
  blockTime_not?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  blockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  blockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  underlyingSymbol?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  underlyingSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnderlyingTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnderlyingTransfer_filter>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  CTokenTransfer: ( TransferEvent ) | ( MintEvent ) | ( RedeemEvent ) | ( LiquidationEvent );
  UnderlyingTransfer: ( BorrowEvent ) | ( RepayEvent );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  FightersRevealed: ResolverTypeWrapper<FightersRevealed>;
  FightersRevealed_filter: FightersRevealed_filter;
  FightersRevealed_orderBy: FightersRevealed_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GameAccepted: ResolverTypeWrapper<GameAccepted>;
  GameAccepted_filter: GameAccepted_filter;
  GameAccepted_orderBy: GameAccepted_orderBy;
  GameEnded: ResolverTypeWrapper<GameEnded>;
  GameEndedByTimeout: ResolverTypeWrapper<GameEndedByTimeout>;
  GameEndedByTimeout_filter: GameEndedByTimeout_filter;
  GameEndedByTimeout_orderBy: GameEndedByTimeout_orderBy;
  GameEnded_filter: GameEnded_filter;
  GameEnded_orderBy: GameEnded_orderBy;
  GameProposed: ResolverTypeWrapper<GameProposed>;
  GameProposed_filter: GameProposed_filter;
  GameProposed_orderBy: GameProposed_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  OrderDirection: OrderDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Comptroller: ResolverTypeWrapper<Comptroller>;
  Comptroller_orderBy: Comptroller_orderBy;
  Comptroller_filter: Comptroller_filter;
  Market: ResolverTypeWrapper<Market>;
  Market_orderBy: Market_orderBy;
  Market_filter: Market_filter;
  Account: ResolverTypeWrapper<Account>;
  AccountCToken_orderBy: AccountCToken_orderBy;
  AccountCToken_filter: AccountCToken_filter;
  Account_filter: Account_filter;
  AccountCTokenTransaction_filter: AccountCTokenTransaction_filter;
  AccountCToken: ResolverTypeWrapper<AccountCToken>;
  AccountCTokenTransaction_orderBy: AccountCTokenTransaction_orderBy;
  AccountCTokenTransaction: ResolverTypeWrapper<AccountCTokenTransaction>;
  Account_orderBy: Account_orderBy;
  TransferEvent: ResolverTypeWrapper<TransferEvent>;
  CTokenTransfer: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CTokenTransfer']>;
  TransferEvent_orderBy: TransferEvent_orderBy;
  TransferEvent_filter: TransferEvent_filter;
  MintEvent: ResolverTypeWrapper<MintEvent>;
  MintEvent_orderBy: MintEvent_orderBy;
  MintEvent_filter: MintEvent_filter;
  RedeemEvent: ResolverTypeWrapper<RedeemEvent>;
  RedeemEvent_orderBy: RedeemEvent_orderBy;
  RedeemEvent_filter: RedeemEvent_filter;
  LiquidationEvent: ResolverTypeWrapper<LiquidationEvent>;
  LiquidationEvent_orderBy: LiquidationEvent_orderBy;
  LiquidationEvent_filter: LiquidationEvent_filter;
  BorrowEvent: ResolverTypeWrapper<BorrowEvent>;
  UnderlyingTransfer: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['UnderlyingTransfer']>;
  BorrowEvent_orderBy: BorrowEvent_orderBy;
  BorrowEvent_filter: BorrowEvent_filter;
  RepayEvent: ResolverTypeWrapper<RepayEvent>;
  RepayEvent_orderBy: RepayEvent_orderBy;
  RepayEvent_filter: RepayEvent_filter;
  CTokenTransfer_orderBy: CTokenTransfer_orderBy;
  CTokenTransfer_filter: CTokenTransfer_filter;
  UnderlyingTransfer_orderBy: UnderlyingTransfer_orderBy;
  UnderlyingTransfer_filter: UnderlyingTransfer_filter;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  FightersRevealed: FightersRevealed;
  FightersRevealed_filter: FightersRevealed_filter;
  Float: Scalars['Float']['output'];
  GameAccepted: GameAccepted;
  GameAccepted_filter: GameAccepted_filter;
  GameEnded: GameEnded;
  GameEndedByTimeout: GameEndedByTimeout;
  GameEndedByTimeout_filter: GameEndedByTimeout_filter;
  GameEnded_filter: GameEnded_filter;
  GameProposed: GameProposed;
  GameProposed_filter: GameProposed_filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  String: Scalars['String']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  _Block_: _Block_;
  _Meta_: _Meta_;
  Comptroller: Comptroller;
  Comptroller_filter: Comptroller_filter;
  Market: Market;
  Market_filter: Market_filter;
  Account: Account;
  AccountCToken_filter: AccountCToken_filter;
  Account_filter: Account_filter;
  AccountCTokenTransaction_filter: AccountCTokenTransaction_filter;
  AccountCToken: AccountCToken;
  AccountCTokenTransaction: AccountCTokenTransaction;
  TransferEvent: TransferEvent;
  CTokenTransfer: ResolversInterfaceTypes<ResolversParentTypes>['CTokenTransfer'];
  TransferEvent_filter: TransferEvent_filter;
  MintEvent: MintEvent;
  MintEvent_filter: MintEvent_filter;
  RedeemEvent: RedeemEvent;
  RedeemEvent_filter: RedeemEvent_filter;
  LiquidationEvent: LiquidationEvent;
  LiquidationEvent_filter: LiquidationEvent_filter;
  BorrowEvent: BorrowEvent;
  UnderlyingTransfer: ResolversInterfaceTypes<ResolversParentTypes>['UnderlyingTransfer'];
  BorrowEvent_filter: BorrowEvent_filter;
  RepayEvent: RepayEvent;
  RepayEvent_filter: RepayEvent_filter;
  CTokenTransfer_filter: CTokenTransfer_filter;
  UnderlyingTransfer_filter: UnderlyingTransfer_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fightersRevealed?: Resolver<Maybe<ResolversTypes['FightersRevealed']>, ParentType, ContextType, RequireFields<QueryfightersRevealedArgs, 'id' | 'subgraphError'>>;
  fightersRevealeds?: Resolver<Array<ResolversTypes['FightersRevealed']>, ParentType, ContextType, RequireFields<QueryfightersRevealedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameAccepted?: Resolver<Maybe<ResolversTypes['GameAccepted']>, ParentType, ContextType, RequireFields<QuerygameAcceptedArgs, 'id' | 'subgraphError'>>;
  gameAccepteds?: Resolver<Array<ResolversTypes['GameAccepted']>, ParentType, ContextType, RequireFields<QuerygameAcceptedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameEnded?: Resolver<Maybe<ResolversTypes['GameEnded']>, ParentType, ContextType, RequireFields<QuerygameEndedArgs, 'id' | 'subgraphError'>>;
  gameEndeds?: Resolver<Array<ResolversTypes['GameEnded']>, ParentType, ContextType, RequireFields<QuerygameEndedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameEndedByTimeout?: Resolver<Maybe<ResolversTypes['GameEndedByTimeout']>, ParentType, ContextType, RequireFields<QuerygameEndedByTimeoutArgs, 'id' | 'subgraphError'>>;
  gameEndedByTimeouts?: Resolver<Array<ResolversTypes['GameEndedByTimeout']>, ParentType, ContextType, RequireFields<QuerygameEndedByTimeoutsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameProposed?: Resolver<Maybe<ResolversTypes['GameProposed']>, ParentType, ContextType, RequireFields<QuerygameProposedArgs, 'id' | 'subgraphError'>>;
  gameProposeds?: Resolver<Array<ResolversTypes['GameProposed']>, ParentType, ContextType, RequireFields<QuerygameProposedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  comptroller?: Resolver<Maybe<ResolversTypes['Comptroller']>, ParentType, ContextType, RequireFields<QuerycomptrollerArgs, 'id' | 'subgraphError'>>;
  comptrollers?: Resolver<Array<ResolversTypes['Comptroller']>, ParentType, ContextType, RequireFields<QuerycomptrollersArgs, 'skip' | 'first' | 'subgraphError'>>;
  market?: Resolver<Maybe<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketArgs, 'id' | 'subgraphError'>>;
  markets?: Resolver<Array<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountCToken?: Resolver<Maybe<ResolversTypes['AccountCToken']>, ParentType, ContextType, RequireFields<QueryaccountCTokenArgs, 'id' | 'subgraphError'>>;
  accountCTokens?: Resolver<Array<ResolversTypes['AccountCToken']>, ParentType, ContextType, RequireFields<QueryaccountCTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountCTokenTransaction?: Resolver<Maybe<ResolversTypes['AccountCTokenTransaction']>, ParentType, ContextType, RequireFields<QueryaccountCTokenTransactionArgs, 'id' | 'subgraphError'>>;
  accountCTokenTransactions?: Resolver<Array<ResolversTypes['AccountCTokenTransaction']>, ParentType, ContextType, RequireFields<QueryaccountCTokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferEvent?: Resolver<Maybe<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QuerytransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: Resolver<Array<ResolversTypes['TransferEvent']>, ParentType, ContextType, RequireFields<QuerytransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintEvent?: Resolver<Maybe<ResolversTypes['MintEvent']>, ParentType, ContextType, RequireFields<QuerymintEventArgs, 'id' | 'subgraphError'>>;
  mintEvents?: Resolver<Array<ResolversTypes['MintEvent']>, ParentType, ContextType, RequireFields<QuerymintEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  redeemEvent?: Resolver<Maybe<ResolversTypes['RedeemEvent']>, ParentType, ContextType, RequireFields<QueryredeemEventArgs, 'id' | 'subgraphError'>>;
  redeemEvents?: Resolver<Array<ResolversTypes['RedeemEvent']>, ParentType, ContextType, RequireFields<QueryredeemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidationEvent?: Resolver<Maybe<ResolversTypes['LiquidationEvent']>, ParentType, ContextType, RequireFields<QueryliquidationEventArgs, 'id' | 'subgraphError'>>;
  liquidationEvents?: Resolver<Array<ResolversTypes['LiquidationEvent']>, ParentType, ContextType, RequireFields<QueryliquidationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrowEvent?: Resolver<Maybe<ResolversTypes['BorrowEvent']>, ParentType, ContextType, RequireFields<QueryborrowEventArgs, 'id' | 'subgraphError'>>;
  borrowEvents?: Resolver<Array<ResolversTypes['BorrowEvent']>, ParentType, ContextType, RequireFields<QueryborrowEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repayEvent?: Resolver<Maybe<ResolversTypes['RepayEvent']>, ParentType, ContextType, RequireFields<QueryrepayEventArgs, 'id' | 'subgraphError'>>;
  repayEvents?: Resolver<Array<ResolversTypes['RepayEvent']>, ParentType, ContextType, RequireFields<QueryrepayEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ctokenTransfer?: Resolver<Maybe<ResolversTypes['CTokenTransfer']>, ParentType, ContextType, RequireFields<QueryctokenTransferArgs, 'id' | 'subgraphError'>>;
  ctokenTransfers?: Resolver<Array<ResolversTypes['CTokenTransfer']>, ParentType, ContextType, RequireFields<QueryctokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  underlyingTransfer?: Resolver<Maybe<ResolversTypes['UnderlyingTransfer']>, ParentType, ContextType, RequireFields<QueryunderlyingTransferArgs, 'id' | 'subgraphError'>>;
  underlyingTransfers?: Resolver<Array<ResolversTypes['UnderlyingTransfer']>, ParentType, ContextType, RequireFields<QueryunderlyingTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  fightersRevealed?: SubscriptionResolver<Maybe<ResolversTypes['FightersRevealed']>, "fightersRevealed", ParentType, ContextType, RequireFields<SubscriptionfightersRevealedArgs, 'id' | 'subgraphError'>>;
  fightersRevealeds?: SubscriptionResolver<Array<ResolversTypes['FightersRevealed']>, "fightersRevealeds", ParentType, ContextType, RequireFields<SubscriptionfightersRevealedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameAccepted?: SubscriptionResolver<Maybe<ResolversTypes['GameAccepted']>, "gameAccepted", ParentType, ContextType, RequireFields<SubscriptiongameAcceptedArgs, 'id' | 'subgraphError'>>;
  gameAccepteds?: SubscriptionResolver<Array<ResolversTypes['GameAccepted']>, "gameAccepteds", ParentType, ContextType, RequireFields<SubscriptiongameAcceptedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameEnded?: SubscriptionResolver<Maybe<ResolversTypes['GameEnded']>, "gameEnded", ParentType, ContextType, RequireFields<SubscriptiongameEndedArgs, 'id' | 'subgraphError'>>;
  gameEndeds?: SubscriptionResolver<Array<ResolversTypes['GameEnded']>, "gameEndeds", ParentType, ContextType, RequireFields<SubscriptiongameEndedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameEndedByTimeout?: SubscriptionResolver<Maybe<ResolversTypes['GameEndedByTimeout']>, "gameEndedByTimeout", ParentType, ContextType, RequireFields<SubscriptiongameEndedByTimeoutArgs, 'id' | 'subgraphError'>>;
  gameEndedByTimeouts?: SubscriptionResolver<Array<ResolversTypes['GameEndedByTimeout']>, "gameEndedByTimeouts", ParentType, ContextType, RequireFields<SubscriptiongameEndedByTimeoutsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gameProposed?: SubscriptionResolver<Maybe<ResolversTypes['GameProposed']>, "gameProposed", ParentType, ContextType, RequireFields<SubscriptiongameProposedArgs, 'id' | 'subgraphError'>>;
  gameProposeds?: SubscriptionResolver<Array<ResolversTypes['GameProposed']>, "gameProposeds", ParentType, ContextType, RequireFields<SubscriptiongameProposedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  comptroller?: SubscriptionResolver<Maybe<ResolversTypes['Comptroller']>, "comptroller", ParentType, ContextType, RequireFields<SubscriptioncomptrollerArgs, 'id' | 'subgraphError'>>;
  comptrollers?: SubscriptionResolver<Array<ResolversTypes['Comptroller']>, "comptrollers", ParentType, ContextType, RequireFields<SubscriptioncomptrollersArgs, 'skip' | 'first' | 'subgraphError'>>;
  market?: SubscriptionResolver<Maybe<ResolversTypes['Market']>, "market", ParentType, ContextType, RequireFields<SubscriptionmarketArgs, 'id' | 'subgraphError'>>;
  markets?: SubscriptionResolver<Array<ResolversTypes['Market']>, "markets", ParentType, ContextType, RequireFields<SubscriptionmarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountCToken?: SubscriptionResolver<Maybe<ResolversTypes['AccountCToken']>, "accountCToken", ParentType, ContextType, RequireFields<SubscriptionaccountCTokenArgs, 'id' | 'subgraphError'>>;
  accountCTokens?: SubscriptionResolver<Array<ResolversTypes['AccountCToken']>, "accountCTokens", ParentType, ContextType, RequireFields<SubscriptionaccountCTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  accountCTokenTransaction?: SubscriptionResolver<Maybe<ResolversTypes['AccountCTokenTransaction']>, "accountCTokenTransaction", ParentType, ContextType, RequireFields<SubscriptionaccountCTokenTransactionArgs, 'id' | 'subgraphError'>>;
  accountCTokenTransactions?: SubscriptionResolver<Array<ResolversTypes['AccountCTokenTransaction']>, "accountCTokenTransactions", ParentType, ContextType, RequireFields<SubscriptionaccountCTokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferEvent?: SubscriptionResolver<Maybe<ResolversTypes['TransferEvent']>, "transferEvent", ParentType, ContextType, RequireFields<SubscriptiontransferEventArgs, 'id' | 'subgraphError'>>;
  transferEvents?: SubscriptionResolver<Array<ResolversTypes['TransferEvent']>, "transferEvents", ParentType, ContextType, RequireFields<SubscriptiontransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mintEvent?: SubscriptionResolver<Maybe<ResolversTypes['MintEvent']>, "mintEvent", ParentType, ContextType, RequireFields<SubscriptionmintEventArgs, 'id' | 'subgraphError'>>;
  mintEvents?: SubscriptionResolver<Array<ResolversTypes['MintEvent']>, "mintEvents", ParentType, ContextType, RequireFields<SubscriptionmintEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  redeemEvent?: SubscriptionResolver<Maybe<ResolversTypes['RedeemEvent']>, "redeemEvent", ParentType, ContextType, RequireFields<SubscriptionredeemEventArgs, 'id' | 'subgraphError'>>;
  redeemEvents?: SubscriptionResolver<Array<ResolversTypes['RedeemEvent']>, "redeemEvents", ParentType, ContextType, RequireFields<SubscriptionredeemEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidationEvent?: SubscriptionResolver<Maybe<ResolversTypes['LiquidationEvent']>, "liquidationEvent", ParentType, ContextType, RequireFields<SubscriptionliquidationEventArgs, 'id' | 'subgraphError'>>;
  liquidationEvents?: SubscriptionResolver<Array<ResolversTypes['LiquidationEvent']>, "liquidationEvents", ParentType, ContextType, RequireFields<SubscriptionliquidationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrowEvent?: SubscriptionResolver<Maybe<ResolversTypes['BorrowEvent']>, "borrowEvent", ParentType, ContextType, RequireFields<SubscriptionborrowEventArgs, 'id' | 'subgraphError'>>;
  borrowEvents?: SubscriptionResolver<Array<ResolversTypes['BorrowEvent']>, "borrowEvents", ParentType, ContextType, RequireFields<SubscriptionborrowEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repayEvent?: SubscriptionResolver<Maybe<ResolversTypes['RepayEvent']>, "repayEvent", ParentType, ContextType, RequireFields<SubscriptionrepayEventArgs, 'id' | 'subgraphError'>>;
  repayEvents?: SubscriptionResolver<Array<ResolversTypes['RepayEvent']>, "repayEvents", ParentType, ContextType, RequireFields<SubscriptionrepayEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ctokenTransfer?: SubscriptionResolver<Maybe<ResolversTypes['CTokenTransfer']>, "ctokenTransfer", ParentType, ContextType, RequireFields<SubscriptionctokenTransferArgs, 'id' | 'subgraphError'>>;
  ctokenTransfers?: SubscriptionResolver<Array<ResolversTypes['CTokenTransfer']>, "ctokenTransfers", ParentType, ContextType, RequireFields<SubscriptionctokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  underlyingTransfer?: SubscriptionResolver<Maybe<ResolversTypes['UnderlyingTransfer']>, "underlyingTransfer", ParentType, ContextType, RequireFields<SubscriptionunderlyingTransferArgs, 'id' | 'subgraphError'>>;
  underlyingTransfers?: SubscriptionResolver<Array<ResolversTypes['UnderlyingTransfer']>, "underlyingTransfers", ParentType, ContextType, RequireFields<SubscriptionunderlyingTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FightersRevealedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FightersRevealed'] = ResolversParentTypes['FightersRevealed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  player2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameAcceptedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameAccepted'] = ResolversParentTypes['GameAccepted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  player2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  wageredAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameEndedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameEnded'] = ResolversParentTypes['GameEnded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  player2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  winner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  wageredAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameEndedByTimeoutResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameEndedByTimeout'] = ResolversParentTypes['GameEndedByTimeout']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  player2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  winner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  wageredAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameProposedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GameProposed'] = ResolversParentTypes['GameProposed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gameId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  player1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  player2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  wageredAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComptrollerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Comptroller'] = ResolversParentTypes['Comptroller']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  priceOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  closeFactor?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  liquidationIncentive?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  maxAssets?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Market'] = ResolversParentTypes['Market']> = ResolversObject<{
  borrowRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cash?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collateralFactor?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  exchangeRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  interestRateModelAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reserves?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  supplyRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  underlyingAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accrualBlockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  borrowIndex?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  underlyingPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  underlyingDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['AccountCToken']>, ParentType, ContextType, RequireFields<AccounttokensArgs, 'skip' | 'first'>>;
  countLiquidated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countLiquidator?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasBorrowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  health?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  totalBorrowValueInEth?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalCollateralValueInEth?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountCToken'] = ResolversParentTypes['AccountCToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  transactions?: Resolver<Array<ResolversTypes['AccountCTokenTransaction']>, ParentType, ContextType, RequireFields<AccountCTokentransactionsArgs, 'skip' | 'first'>>;
  accrualBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  enteredMarket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalUnderlyingSupplied?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalUnderlyingRedeemed?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  accountBorrowIndex?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalUnderlyingBorrowed?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalUnderlyingRepaid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  storedBorrowBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  supplyBalanceUnderlying?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lifetimeSupplyInterestAccrued?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  borrowBalanceUnderlying?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lifetimeBorrowInterestAccrued?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCTokenTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountCTokenTransaction'] = ResolversParentTypes['AccountCTokenTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['AccountCToken'], ParentType, ContextType>;
  tx_hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferEvent'] = ResolversParentTypes['TransferEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CTokenTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CTokenTransfer'] = ResolversParentTypes['CTokenTransfer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TransferEvent' | 'MintEvent' | 'RedeemEvent' | 'LiquidationEvent', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MintEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MintEvent'] = ResolversParentTypes['MintEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingAmount?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedeemEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RedeemEvent'] = ResolversParentTypes['RedeemEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingAmount?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidationEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidationEvent'] = ResolversParentTypes['LiquidationEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingRepayAmount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BorrowEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BorrowEvent'] = ResolversParentTypes['BorrowEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnderlyingTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnderlyingTransfer'] = ResolversParentTypes['UnderlyingTransfer']> = ResolversObject<{
  __resolveType: TypeResolveFn<'BorrowEvent' | 'RepayEvent', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type RepayEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RepayEvent'] = ResolversParentTypes['RepayEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  FightersRevealed?: FightersRevealedResolvers<ContextType>;
  GameAccepted?: GameAcceptedResolvers<ContextType>;
  GameEnded?: GameEndedResolvers<ContextType>;
  GameEndedByTimeout?: GameEndedByTimeoutResolvers<ContextType>;
  GameProposed?: GameProposedResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Comptroller?: ComptrollerResolvers<ContextType>;
  Market?: MarketResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AccountCToken?: AccountCTokenResolvers<ContextType>;
  AccountCTokenTransaction?: AccountCTokenTransactionResolvers<ContextType>;
  TransferEvent?: TransferEventResolvers<ContextType>;
  CTokenTransfer?: CTokenTransferResolvers<ContextType>;
  MintEvent?: MintEventResolvers<ContextType>;
  RedeemEvent?: RedeemEventResolvers<ContextType>;
  LiquidationEvent?: LiquidationEventResolvers<ContextType>;
  BorrowEvent?: BorrowEventResolvers<ContextType>;
  UnderlyingTransfer?: UnderlyingTransferResolvers<ContextType>;
  RepayEvent?: RepayEventResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ScrollfighterTypes.Context & Compoundv2Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/scrollfighter/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/compoundv2/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const scrollfighterTransforms = [];
const compoundv2Transforms = [];
const additionalTypeDefs = [] as any[];
const scrollfighterHandler = new GraphqlHandler({
              name: "scrollfighter",
              config: {"endpoint":"https://api.studio.thegraph.com/query/72991/scrollfighter/v0.1"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("scrollfighter"),
              logger: logger.child("scrollfighter"),
              importFn,
            });
const compoundv2Handler = new GraphqlHandler({
              name: "compoundv2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("compoundv2"),
              logger: logger.child("compoundv2"),
              importFn,
            });
sources[0] = {
          name: 'scrollfighter',
          handler: scrollfighterHandler,
          transforms: scrollfighterTransforms
        }
sources[1] = {
          name: 'compoundv2',
          handler: compoundv2Handler,
          transforms: compoundv2Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));