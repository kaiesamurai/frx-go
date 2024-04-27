// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

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
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { Compoundv2Types } from './sources/compoundv2/types';
import type { Uniswapv2Types } from './sources/uniswapv2/types';
import * as importedModule$0 from "./sources/compoundv2/introspectionSchema";
import * as importedModule$1 from "./sources/uniswapv2/introspectionSchema";
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
  Bytes: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  BigDecimal: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Query = {
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryuniswapFactoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  uniswapFactory?: Maybe<UniswapFactory>;
  uniswapFactories: Array<UniswapFactory>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  pairHourData?: Maybe<PairHourData>;
  pairHourDatas: Array<PairHourData>;
  pairDayData?: Maybe<PairDayData>;
  pairDayDatas: Array<PairDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionuniswapFactoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapFactory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapFactory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
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

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

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

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
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

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type Bundle = {
  id: Scalars['ID']['output'];
  ethPrice: Scalars['BigDecimal']['output'];
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ethPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
};

export type Bundle_orderBy =
  | 'id'
  | 'ethPrice';

export type Burn = {
  id: Scalars['ID']['output'];
  transaction: Transaction;
  timestamp: Scalars['BigInt']['output'];
  pair: Pair;
  liquidity: Scalars['BigDecimal']['output'];
  sender?: Maybe<Scalars['Bytes']['output']>;
  amount0?: Maybe<Scalars['BigDecimal']['output']>;
  amount1?: Maybe<Scalars['BigDecimal']['output']>;
  to?: Maybe<Scalars['Bytes']['output']>;
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  needsComplete: Scalars['Boolean']['output'];
  feeTo?: Maybe<Scalars['Bytes']['output']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']['output']>;
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  needsComplete?: InputMaybe<Scalars['Boolean']['input']>;
  needsComplete_not?: InputMaybe<Scalars['Boolean']['input']>;
  needsComplete_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  feeTo?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_gt?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_lt?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_gte?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_lte?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Burn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Burn_filter>>>;
};

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'needsComplete'
  | 'feeTo'
  | 'feeLiquidity';

export type LiquidityPosition = {
  id: Scalars['ID']['output'];
  user: User;
  pair: Pair;
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
};

export type LiquidityPositionSnapshot = {
  id: Scalars['ID']['output'];
  liquidityPosition: LiquidityPosition;
  timestamp: Scalars['Int']['output'];
  block: Scalars['Int']['output'];
  user: User;
  pair: Pair;
  token0PriceUSD: Scalars['BigDecimal']['output'];
  token1PriceUSD: Scalars['BigDecimal']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  reserveUSD: Scalars['BigDecimal']['output'];
  liquidityTokenTotalSupply: Scalars['BigDecimal']['output'];
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
};

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidityPosition?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPositionSnapshot_filter>>>;
};

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'liquidityPosition__id'
  | 'liquidityPosition__liquidityTokenBalance'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'user__id'
  | 'user__usdSwapped'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__usdSwapped'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'liquidityTokenBalance';

export type Mint = {
  id: Scalars['ID']['output'];
  transaction: Transaction;
  timestamp: Scalars['BigInt']['output'];
  pair: Pair;
  to: Scalars['Bytes']['output'];
  liquidity: Scalars['BigDecimal']['output'];
  sender?: Maybe<Scalars['Bytes']['output']>;
  amount0?: Maybe<Scalars['BigDecimal']['output']>;
  amount1?: Maybe<Scalars['BigDecimal']['output']>;
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  feeTo?: Maybe<Scalars['Bytes']['output']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']['output']>;
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
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
  liquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeTo?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_gt?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_lt?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_gte?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_lte?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Mint_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Mint_filter>>>;
};

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity';

export type Pair = {
  id: Scalars['ID']['output'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  totalSupply: Scalars['BigDecimal']['output'];
  reserveETH: Scalars['BigDecimal']['output'];
  reserveUSD: Scalars['BigDecimal']['output'];
  trackedReserveETH: Scalars['BigDecimal']['output'];
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  pairHourData: Array<PairHourData>;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
};


export type PairpairHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourData_filter>;
};


export type PairliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};


export type PairliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
};


export type PairmintsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type PairburnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type PairswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};

export type PairDayData = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  pairAddress: Scalars['Bytes']['output'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  totalSupply?: Maybe<Scalars['BigDecimal']['output']>;
  reserveUSD: Scalars['BigDecimal']['output'];
  dailyVolumeToken0: Scalars['BigDecimal']['output'];
  dailyVolumeToken1: Scalars['BigDecimal']['output'];
  dailyVolumeUSD: Scalars['BigDecimal']['output'];
  dailyTxns: Scalars['BigInt']['output'];
};

export type PairDayData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pairAddress?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pairAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pairAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PairDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PairDayData_filter>>>;
};

export type PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pairAddress'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__tradeVolume'
  | 'token0__tradeVolumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__totalLiquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__tradeVolume'
  | 'token1__tradeVolumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__totalLiquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'dailyVolumeToken0'
  | 'dailyVolumeToken1'
  | 'dailyVolumeUSD'
  | 'dailyTxns';

export type PairHourData = {
  id: Scalars['ID']['output'];
  hourStartUnix: Scalars['Int']['output'];
  pair: Pair;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  totalSupply?: Maybe<Scalars['BigDecimal']['output']>;
  reserveUSD: Scalars['BigDecimal']['output'];
  hourlyVolumeToken0: Scalars['BigDecimal']['output'];
  hourlyVolumeToken1: Scalars['BigDecimal']['output'];
  hourlyVolumeUSD: Scalars['BigDecimal']['output'];
  hourlyTxns: Scalars['BigInt']['output'];
};

export type PairHourData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  hourStartUnix?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  hourlyTxns?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PairHourData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PairHourData_filter>>>;
};

export type PairHourData_orderBy =
  | 'id'
  | 'hourStartUnix'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'hourlyVolumeToken0'
  | 'hourlyVolumeToken1'
  | 'hourlyVolumeUSD'
  | 'hourlyTxns';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  trackedReserveETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pairHourData_?: InputMaybe<PairHourData_filter>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  liquidityPositionSnapshots_?: InputMaybe<LiquidityPositionSnapshot_filter>;
  mints_?: InputMaybe<Mint_filter>;
  burns_?: InputMaybe<Burn_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pair_filter>>>;
};

export type Pair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__totalSupply'
  | 'token0__tradeVolume'
  | 'token0__tradeVolumeUSD'
  | 'token0__untrackedVolumeUSD'
  | 'token0__txCount'
  | 'token0__totalLiquidity'
  | 'token0__derivedETH'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__totalSupply'
  | 'token1__tradeVolume'
  | 'token1__tradeVolumeUSD'
  | 'token1__untrackedVolumeUSD'
  | 'token1__txCount'
  | 'token1__totalLiquidity'
  | 'token1__derivedETH'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'pairHourData'
  | 'liquidityPositions'
  | 'liquidityPositionSnapshots'
  | 'mints'
  | 'burns'
  | 'swaps';

export type Swap = {
  id: Scalars['ID']['output'];
  transaction: Transaction;
  timestamp: Scalars['BigInt']['output'];
  pair: Pair;
  sender: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  amount0In: Scalars['BigDecimal']['output'];
  amount1In: Scalars['BigDecimal']['output'];
  amount0Out: Scalars['BigDecimal']['output'];
  amount1Out: Scalars['BigDecimal']['output'];
  to: Scalars['Bytes']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  amountUSD: Scalars['BigDecimal']['output'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<Pair_filter>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  amount0In?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1In?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0Out?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1Out?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__blockNumber'
  | 'transaction__timestamp'
  | 'timestamp'
  | 'pair'
  | 'pair__id'
  | 'pair__reserve0'
  | 'pair__reserve1'
  | 'pair__totalSupply'
  | 'pair__reserveETH'
  | 'pair__reserveUSD'
  | 'pair__trackedReserveETH'
  | 'pair__token0Price'
  | 'pair__token1Price'
  | 'pair__volumeToken0'
  | 'pair__volumeToken1'
  | 'pair__volumeUSD'
  | 'pair__untrackedVolumeUSD'
  | 'pair__txCount'
  | 'pair__createdAtTimestamp'
  | 'pair__createdAtBlockNumber'
  | 'pair__liquidityProviderCount'
  | 'sender'
  | 'from'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD';

export type Token = {
  id: Scalars['ID']['output'];
  symbol: Scalars['String']['output'];
  name: Scalars['String']['output'];
  decimals: Scalars['BigInt']['output'];
  totalSupply: Scalars['BigInt']['output'];
  tradeVolume: Scalars['BigDecimal']['output'];
  tradeVolumeUSD: Scalars['BigDecimal']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  totalLiquidity: Scalars['BigDecimal']['output'];
  derivedETH?: Maybe<Scalars['BigDecimal']['output']>;
  tokenDayData: Array<TokenDayData>;
  pairDayDataBase: Array<PairDayData>;
  pairDayDataQuote: Array<PairDayData>;
  pairBase: Array<Pair>;
  pairQuote: Array<Pair>;
};


export type TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};


export type TokenpairDayDataBaseArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};


export type TokenpairDayDataQuoteArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PairDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDayData_filter>;
};


export type TokenpairBaseArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
};


export type TokenpairQuoteArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
};

export type TokenDayData = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  token: Token;
  dailyVolumeToken: Scalars['BigDecimal']['output'];
  dailyVolumeETH: Scalars['BigDecimal']['output'];
  dailyVolumeUSD: Scalars['BigDecimal']['output'];
  dailyTxns: Scalars['BigInt']['output'];
  totalLiquidityToken: Scalars['BigDecimal']['output'];
  totalLiquidityETH: Scalars['BigDecimal']['output'];
  totalLiquidityUSD: Scalars['BigDecimal']['output'];
  priceUSD: Scalars['BigDecimal']['output'];
};

export type TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyTxns?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenDayData_filter>>>;
};

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__totalSupply'
  | 'token__tradeVolume'
  | 'token__tradeVolumeUSD'
  | 'token__untrackedVolumeUSD'
  | 'token__txCount'
  | 'token__totalLiquidity'
  | 'token__derivedETH'
  | 'dailyVolumeToken'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyTxns'
  | 'totalLiquidityToken'
  | 'totalLiquidityETH'
  | 'totalLiquidityUSD'
  | 'priceUSD';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
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
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenDayData_?: InputMaybe<TokenDayData_filter>;
  pairDayDataBase_?: InputMaybe<PairDayData_filter>;
  pairDayDataQuote_?: InputMaybe<PairDayData_filter>;
  pairBase_?: InputMaybe<Pair_filter>;
  pairQuote_?: InputMaybe<Pair_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'tradeVolume'
  | 'tradeVolumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'totalLiquidity'
  | 'derivedETH'
  | 'tokenDayData'
  | 'pairDayDataBase'
  | 'pairDayDataQuote'
  | 'pairBase'
  | 'pairQuote';

export type Transaction = {
  id: Scalars['ID']['output'];
  blockNumber: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mints?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_not?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  mints_?: InputMaybe<Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_not?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  burns_?: InputMaybe<Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  swaps_?: InputMaybe<Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'mints'
  | 'burns'
  | 'swaps';

export type UniswapDayData = {
  id: Scalars['ID']['output'];
  date: Scalars['Int']['output'];
  dailyVolumeETH: Scalars['BigDecimal']['output'];
  dailyVolumeUSD: Scalars['BigDecimal']['output'];
  dailyVolumeUntracked: Scalars['BigDecimal']['output'];
  totalVolumeETH: Scalars['BigDecimal']['output'];
  totalLiquidityETH: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
  totalLiquidityUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
};

export type UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniswapDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniswapDayData_filter>>>;
};

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyVolumeUntracked'
  | 'totalVolumeETH'
  | 'totalLiquidityETH'
  | 'totalVolumeUSD'
  | 'totalLiquidityUSD'
  | 'txCount';

export type UniswapFactory = {
  id: Scalars['ID']['output'];
  pairCount: Scalars['Int']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
  totalVolumeETH: Scalars['BigDecimal']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  totalLiquidityUSD: Scalars['BigDecimal']['output'];
  totalLiquidityETH: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
};

export type UniswapFactory_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pairCount?: InputMaybe<Scalars['Int']['input']>;
  pairCount_not?: InputMaybe<Scalars['Int']['input']>;
  pairCount_gt?: InputMaybe<Scalars['Int']['input']>;
  pairCount_lt?: InputMaybe<Scalars['Int']['input']>;
  pairCount_gte?: InputMaybe<Scalars['Int']['input']>;
  pairCount_lte?: InputMaybe<Scalars['Int']['input']>;
  pairCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniswapFactory_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniswapFactory_filter>>>;
};

export type UniswapFactory_orderBy =
  | 'id'
  | 'pairCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'untrackedVolumeUSD'
  | 'totalLiquidityUSD'
  | 'totalLiquidityETH'
  | 'txCount';

export type User = {
  id: Scalars['ID']['output'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
  usdSwapped: Scalars['BigDecimal']['output'];
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  usdSwapped?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'liquidityPositions'
  | 'usdSwapped';

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
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Block_height: Block_height;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Comptroller: ResolverTypeWrapper<Comptroller>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Comptroller_orderBy: Comptroller_orderBy;
  OrderDirection: OrderDirection;
  Comptroller_filter: Comptroller_filter;
  BlockChangedFilter: BlockChangedFilter;
  Market: ResolverTypeWrapper<Market>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Market_orderBy: Market_orderBy;
  Market_filter: Market_filter;
  Account: ResolverTypeWrapper<Account>;
  AccountCToken_orderBy: AccountCToken_orderBy;
  AccountCToken_filter: AccountCToken_filter;
  Account_filter: Account_filter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
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
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _Block_: ResolverTypeWrapper<_Block_>;
  Aggregation_interval: Aggregation_interval;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  Burn: ResolverTypeWrapper<Burn>;
  Burn_filter: Burn_filter;
  Burn_orderBy: Burn_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPositionSnapshot: ResolverTypeWrapper<LiquidityPositionSnapshot>;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPositionSnapshot_orderBy: LiquidityPositionSnapshot_orderBy;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  Mint: ResolverTypeWrapper<Mint>;
  Mint_filter: Mint_filter;
  Mint_orderBy: Mint_orderBy;
  Pair: ResolverTypeWrapper<Pair>;
  PairDayData: ResolverTypeWrapper<PairDayData>;
  PairDayData_filter: PairDayData_filter;
  PairDayData_orderBy: PairDayData_orderBy;
  PairHourData: ResolverTypeWrapper<PairHourData>;
  PairHourData_filter: PairHourData_filter;
  PairHourData_orderBy: PairHourData_orderBy;
  Pair_filter: Pair_filter;
  Pair_orderBy: Pair_orderBy;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenDayData: ResolverTypeWrapper<TokenDayData>;
  TokenDayData_filter: TokenDayData_filter;
  TokenDayData_orderBy: TokenDayData_orderBy;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  UniswapDayData: ResolverTypeWrapper<UniswapDayData>;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapDayData_orderBy: UniswapDayData_orderBy;
  UniswapFactory: ResolverTypeWrapper<UniswapFactory>;
  UniswapFactory_filter: UniswapFactory_filter;
  UniswapFactory_orderBy: UniswapFactory_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  ID: Scalars['ID']['output'];
  Block_height: Block_height;
  Bytes: Scalars['Bytes']['output'];
  Int: Scalars['Int']['output'];
  Comptroller: Comptroller;
  BigInt: Scalars['BigInt']['output'];
  Comptroller_filter: Comptroller_filter;
  BlockChangedFilter: BlockChangedFilter;
  Market: Market;
  BigDecimal: Scalars['BigDecimal']['output'];
  String: Scalars['String']['output'];
  Market_filter: Market_filter;
  Account: Account;
  AccountCToken_filter: AccountCToken_filter;
  Account_filter: Account_filter;
  Boolean: Scalars['Boolean']['output'];
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
  _Meta_: _Meta_;
  _Block_: _Block_;
  Int8: Scalars['Int8']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  Burn: Burn;
  Burn_filter: Burn_filter;
  Float: Scalars['Float']['output'];
  LiquidityPosition: LiquidityPosition;
  LiquidityPositionSnapshot: LiquidityPositionSnapshot;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Mint: Mint;
  Mint_filter: Mint_filter;
  Pair: Pair;
  PairDayData: PairDayData;
  PairDayData_filter: PairDayData_filter;
  PairHourData: PairHourData;
  PairHourData_filter: PairHourData_filter;
  Pair_filter: Pair_filter;
  Swap: Swap;
  Swap_filter: Swap_filter;
  Token: Token;
  TokenDayData: TokenDayData;
  TokenDayData_filter: TokenDayData_filter;
  Token_filter: Token_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  UniswapDayData: UniswapDayData;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapFactory: UniswapFactory;
  UniswapFactory_filter: UniswapFactory_filter;
  User: User;
  User_filter: User_filter;
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
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  uniswapFactory?: Resolver<Maybe<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: Resolver<Array<ResolversTypes['UniswapFactory']>, ParentType, ContextType, RequireFields<QueryuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairArgs, 'id' | 'subgraphError'>>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundleArgs, 'id' | 'subgraphError'>>;
  bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: Resolver<Maybe<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: Resolver<Array<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: Resolver<Maybe<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: Resolver<Array<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<QuerypairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: Resolver<Maybe<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<QuerypairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
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
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  uniswapFactory?: SubscriptionResolver<Maybe<ResolversTypes['UniswapFactory']>, "uniswapFactory", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoryArgs, 'id' | 'subgraphError'>>;
  uniswapFactories?: SubscriptionResolver<Array<ResolversTypes['UniswapFactory']>, "uniswapFactories", ParentType, ContextType, RequireFields<SubscriptionuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: SubscriptionResolver<Maybe<ResolversTypes['Pair']>, "pair", ParentType, ContextType, RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>>;
  pairs?: SubscriptionResolver<Array<ResolversTypes['Pair']>, "pairs", ParentType, ContextType, RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "bundle", ParentType, ContextType, RequireFields<SubscriptionbundleArgs, 'id' | 'subgraphError'>>;
  bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "bundles", ParentType, ContextType, RequireFields<SubscriptionbundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: SubscriptionResolver<Maybe<ResolversTypes['UniswapDayData']>, "uniswapDayData", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: SubscriptionResolver<Array<ResolversTypes['UniswapDayData']>, "uniswapDayDatas", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourData?: SubscriptionResolver<Maybe<ResolversTypes['PairHourData']>, "pairHourData", ParentType, ContextType, RequireFields<SubscriptionpairHourDataArgs, 'id' | 'subgraphError'>>;
  pairHourDatas?: SubscriptionResolver<Array<ResolversTypes['PairHourData']>, "pairHourDatas", ParentType, ContextType, RequireFields<SubscriptionpairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDayData?: SubscriptionResolver<Maybe<ResolversTypes['PairDayData']>, "pairDayData", ParentType, ContextType, RequireFields<SubscriptionpairDayDataArgs, 'id' | 'subgraphError'>>;
  pairDayDatas?: SubscriptionResolver<Array<ResolversTypes['PairDayData']>, "pairDayDatas", ParentType, ContextType, RequireFields<SubscriptionpairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['TokenDayData']>, "tokenDayData", ParentType, ContextType, RequireFields<SubscriptiontokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['TokenDayData']>, "tokenDayDatas", ParentType, ContextType, RequireFields<SubscriptiontokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ComptrollerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Comptroller'] = ResolversParentTypes['Comptroller']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  priceOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  closeFactor?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  liquidationIncentive?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  maxAssets?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

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

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

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

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ethPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  needsComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPositionSnapshot'] = ResolversParentTypes['LiquidityPositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPosition?: Resolver<ResolversTypes['LiquidityPosition'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token0PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenTotalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  trackedReserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pairHourData?: Resolver<Array<ResolversTypes['PairHourData']>, ParentType, ContextType, RequireFields<PairpairHourDataArgs, 'skip' | 'first'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<PairliquidityPositionsArgs, 'skip' | 'first'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<PairliquidityPositionSnapshotsArgs, 'skip' | 'first'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<PairmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<PairburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<PairswapsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairDayData'] = ResolversParentTypes['PairDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pairAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairHourData'] = ResolversParentTypes['PairHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hourStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalSupply?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tradeVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tradeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedETH?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  tokenDayData?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<TokentokenDayDataArgs, 'skip' | 'first'>>;
  pairDayDataBase?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<TokenpairDayDataBaseArgs, 'skip' | 'first'>>;
  pairDayDataQuote?: Resolver<Array<ResolversTypes['PairDayData']>, ParentType, ContextType, RequireFields<TokenpairDayDataQuoteArgs, 'skip' | 'first'>>;
  pairBase?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<TokenpairBaseArgs, 'skip' | 'first'>>;
  pairQuote?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<TokenpairQuoteArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  dailyVolumeToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLiquidityToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['Mint']>>, ParentType, ContextType, RequireFields<TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<Maybe<ResolversTypes['Burn']>>, ParentType, ContextType, RequireFields<TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['Swap']>>, ParentType, ContextType, RequireFields<TransactionswapsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapDayData'] = ResolversParentTypes['UniswapDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapFactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapFactory'] = ResolversParentTypes['UniswapFactory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  usdSwapped?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Comptroller?: ComptrollerResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Market?: MarketResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
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
  _Meta_?: _Meta_Resolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  Bundle?: BundleResolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  LiquidityPositionSnapshot?: LiquidityPositionSnapshotResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  Pair?: PairResolvers<ContextType>;
  PairDayData?: PairDayDataResolvers<ContextType>;
  PairHourData?: PairHourDataResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenDayData?: TokenDayDataResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  UniswapDayData?: UniswapDayDataResolvers<ContextType>;
  UniswapFactory?: UniswapFactoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = Compoundv2Types.Context & Uniswapv2Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/compoundv2/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/uniswapv2/introspectionSchema":
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
const uniswapv2Transforms = [];
const compoundv2Transforms = [];
const additionalTypeDefs = [] as any[];
const uniswapv2Handler = new GraphqlHandler({
              name: "uniswapv2",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswapv2"),
              logger: logger.child("uniswapv2"),
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
          name: 'uniswapv2',
          handler: uniswapv2Handler,
          transforms: uniswapv2Transforms
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
const documentHashMap = {
        4524bdd74b38d1d642bead367da058cd2b4fe42ec467eed4e167d5c9a2b474b9: ExampleQueryDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
      }))

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
      {
        document: ExampleQueryDocument,
        get rawSDL() {
          return printWithCache(ExampleQueryDocument);
        },
        location: 'ExampleQueryDocument.graphql',
        sha256Hash: '4524bdd74b38d1d642bead367da058cd2b4fe42ec467eed4e167d5c9a2b474b9'
      }
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
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { markets: Array<Pick<Market, 'borrowRate' | 'cash' | 'collateralFactor'>>, pair?: Maybe<(
    Pick<Pair, 'id'>
    & { token0: Pick<Token, 'id' | 'symbol' | 'name'>, token1: Pick<Token, 'id' | 'symbol' | 'name'> }
  )> };


export const ExampleQueryDocument = gql`
    query ExampleQuery {
  markets(first: 7) {
    borrowRate
    cash
    collateralFactor
  }
  pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
    id
    token0 {
      id
      symbol
      name
    }
    token1 {
      id
      symbol
      name
    }
  }
}
    ` as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ExampleQuery(variables?: ExampleQueryQueryVariables, options?: C): Promise<ExampleQueryQuery> {
      return requester<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, variables, options) as Promise<ExampleQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;