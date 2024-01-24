/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IEnderBondInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "availableBondFee"
      | "calculateBondRewardAmount"
      | "deductFeesFromTransfer"
      | "endMint"
      | "epochRewardShareIndex"
      | "epochRewardShareIndexForSend"
      | "getLoopCount"
      | "resetEndMint"
      | "setAvailableBondFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "availableBondFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBondRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deductFeesFromTransfer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endMint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "epochRewardShareIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochRewardShareIndexForSend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLoopCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resetEndMint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAvailableBondFee",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "availableBondFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateBondRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deductFeesFromTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochRewardShareIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochRewardShareIndexForSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLoopCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetEndMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAvailableBondFee",
    data: BytesLike
  ): Result;
}

export interface IEnderBond extends BaseContract {
  connect(runner?: ContractRunner | null): IEnderBond;
  waitForDeployment(): Promise<this>;

  interface: IEnderBondInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  availableBondFee: TypedContractMethod<[], [bigint], "view">;

  calculateBondRewardAmount: TypedContractMethod<
    [_tokenId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  deductFeesFromTransfer: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  endMint: TypedContractMethod<[], [bigint], "nonpayable">;

  epochRewardShareIndex: TypedContractMethod<
    [_reward: BigNumberish],
    [void],
    "nonpayable"
  >;

  epochRewardShareIndexForSend: TypedContractMethod<
    [_reward: BigNumberish],
    [void],
    "nonpayable"
  >;

  getLoopCount: TypedContractMethod<[], [bigint], "nonpayable">;

  resetEndMint: TypedContractMethod<[], [void], "nonpayable">;

  setAvailableBondFee: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "availableBondFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculateBondRewardAmount"
  ): TypedContractMethod<[_tokenId: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "deductFeesFromTransfer"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "endMint"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "epochRewardShareIndex"
  ): TypedContractMethod<[_reward: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "epochRewardShareIndexForSend"
  ): TypedContractMethod<[_reward: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getLoopCount"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "resetEndMint"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAvailableBondFee"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  filters: {};
}
