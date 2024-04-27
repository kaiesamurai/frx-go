// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Compoundv2Types {
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

export type Aggregation_interval =
  | 'hour'
  | 'day';

  export type QuerySdk = {
      /**  **/
  comptroller: InContextSdkMethod<Query['comptroller'], QuerycomptrollerArgs, MeshContext>,
  /**  **/
  comptrollers: InContextSdkMethod<Query['comptrollers'], QuerycomptrollersArgs, MeshContext>,
  /**  **/
  market: InContextSdkMethod<Query['market'], QuerymarketArgs, MeshContext>,
  /**  **/
  markets: InContextSdkMethod<Query['markets'], QuerymarketsArgs, MeshContext>,
  /**  **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /**  **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /**  **/
  accountCToken: InContextSdkMethod<Query['accountCToken'], QueryaccountCTokenArgs, MeshContext>,
  /**  **/
  accountCTokens: InContextSdkMethod<Query['accountCTokens'], QueryaccountCTokensArgs, MeshContext>,
  /**  **/
  accountCTokenTransaction: InContextSdkMethod<Query['accountCTokenTransaction'], QueryaccountCTokenTransactionArgs, MeshContext>,
  /**  **/
  accountCTokenTransactions: InContextSdkMethod<Query['accountCTokenTransactions'], QueryaccountCTokenTransactionsArgs, MeshContext>,
  /**  **/
  transferEvent: InContextSdkMethod<Query['transferEvent'], QuerytransferEventArgs, MeshContext>,
  /**  **/
  transferEvents: InContextSdkMethod<Query['transferEvents'], QuerytransferEventsArgs, MeshContext>,
  /**  **/
  mintEvent: InContextSdkMethod<Query['mintEvent'], QuerymintEventArgs, MeshContext>,
  /**  **/
  mintEvents: InContextSdkMethod<Query['mintEvents'], QuerymintEventsArgs, MeshContext>,
  /**  **/
  redeemEvent: InContextSdkMethod<Query['redeemEvent'], QueryredeemEventArgs, MeshContext>,
  /**  **/
  redeemEvents: InContextSdkMethod<Query['redeemEvents'], QueryredeemEventsArgs, MeshContext>,
  /**  **/
  liquidationEvent: InContextSdkMethod<Query['liquidationEvent'], QueryliquidationEventArgs, MeshContext>,
  /**  **/
  liquidationEvents: InContextSdkMethod<Query['liquidationEvents'], QueryliquidationEventsArgs, MeshContext>,
  /**  **/
  borrowEvent: InContextSdkMethod<Query['borrowEvent'], QueryborrowEventArgs, MeshContext>,
  /**  **/
  borrowEvents: InContextSdkMethod<Query['borrowEvents'], QueryborrowEventsArgs, MeshContext>,
  /**  **/
  repayEvent: InContextSdkMethod<Query['repayEvent'], QueryrepayEventArgs, MeshContext>,
  /**  **/
  repayEvents: InContextSdkMethod<Query['repayEvents'], QueryrepayEventsArgs, MeshContext>,
  /**  **/
  ctokenTransfer: InContextSdkMethod<Query['ctokenTransfer'], QueryctokenTransferArgs, MeshContext>,
  /**  **/
  ctokenTransfers: InContextSdkMethod<Query['ctokenTransfers'], QueryctokenTransfersArgs, MeshContext>,
  /**  **/
  underlyingTransfer: InContextSdkMethod<Query['underlyingTransfer'], QueryunderlyingTransferArgs, MeshContext>,
  /**  **/
  underlyingTransfers: InContextSdkMethod<Query['underlyingTransfers'], QueryunderlyingTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /**  **/
  comptroller: InContextSdkMethod<Subscription['comptroller'], SubscriptioncomptrollerArgs, MeshContext>,
  /**  **/
  comptrollers: InContextSdkMethod<Subscription['comptrollers'], SubscriptioncomptrollersArgs, MeshContext>,
  /**  **/
  market: InContextSdkMethod<Subscription['market'], SubscriptionmarketArgs, MeshContext>,
  /**  **/
  markets: InContextSdkMethod<Subscription['markets'], SubscriptionmarketsArgs, MeshContext>,
  /**  **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /**  **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /**  **/
  accountCToken: InContextSdkMethod<Subscription['accountCToken'], SubscriptionaccountCTokenArgs, MeshContext>,
  /**  **/
  accountCTokens: InContextSdkMethod<Subscription['accountCTokens'], SubscriptionaccountCTokensArgs, MeshContext>,
  /**  **/
  accountCTokenTransaction: InContextSdkMethod<Subscription['accountCTokenTransaction'], SubscriptionaccountCTokenTransactionArgs, MeshContext>,
  /**  **/
  accountCTokenTransactions: InContextSdkMethod<Subscription['accountCTokenTransactions'], SubscriptionaccountCTokenTransactionsArgs, MeshContext>,
  /**  **/
  transferEvent: InContextSdkMethod<Subscription['transferEvent'], SubscriptiontransferEventArgs, MeshContext>,
  /**  **/
  transferEvents: InContextSdkMethod<Subscription['transferEvents'], SubscriptiontransferEventsArgs, MeshContext>,
  /**  **/
  mintEvent: InContextSdkMethod<Subscription['mintEvent'], SubscriptionmintEventArgs, MeshContext>,
  /**  **/
  mintEvents: InContextSdkMethod<Subscription['mintEvents'], SubscriptionmintEventsArgs, MeshContext>,
  /**  **/
  redeemEvent: InContextSdkMethod<Subscription['redeemEvent'], SubscriptionredeemEventArgs, MeshContext>,
  /**  **/
  redeemEvents: InContextSdkMethod<Subscription['redeemEvents'], SubscriptionredeemEventsArgs, MeshContext>,
  /**  **/
  liquidationEvent: InContextSdkMethod<Subscription['liquidationEvent'], SubscriptionliquidationEventArgs, MeshContext>,
  /**  **/
  liquidationEvents: InContextSdkMethod<Subscription['liquidationEvents'], SubscriptionliquidationEventsArgs, MeshContext>,
  /**  **/
  borrowEvent: InContextSdkMethod<Subscription['borrowEvent'], SubscriptionborrowEventArgs, MeshContext>,
  /**  **/
  borrowEvents: InContextSdkMethod<Subscription['borrowEvents'], SubscriptionborrowEventsArgs, MeshContext>,
  /**  **/
  repayEvent: InContextSdkMethod<Subscription['repayEvent'], SubscriptionrepayEventArgs, MeshContext>,
  /**  **/
  repayEvents: InContextSdkMethod<Subscription['repayEvents'], SubscriptionrepayEventsArgs, MeshContext>,
  /**  **/
  ctokenTransfer: InContextSdkMethod<Subscription['ctokenTransfer'], SubscriptionctokenTransferArgs, MeshContext>,
  /**  **/
  ctokenTransfers: InContextSdkMethod<Subscription['ctokenTransfers'], SubscriptionctokenTransfersArgs, MeshContext>,
  /**  **/
  underlyingTransfer: InContextSdkMethod<Subscription['underlyingTransfer'], SubscriptionunderlyingTransferArgs, MeshContext>,
  /**  **/
  underlyingTransfers: InContextSdkMethod<Subscription['underlyingTransfers'], SubscriptionunderlyingTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["compoundv2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
