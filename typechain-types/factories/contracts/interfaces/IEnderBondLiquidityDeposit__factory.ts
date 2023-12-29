/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEnderBondLiquidityDeposit,
  IEnderBondLiquidityDepositInterface,
} from "../../../contracts/interfaces/IEnderBondLiquidityDeposit";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_bond",
        type: "address",
      },
    ],
    name: "depositedIntoBond",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "principal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bonfees",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IEnderBondLiquidityDeposit__factory {
  static readonly abi = _abi;
  static createInterface(): IEnderBondLiquidityDepositInterface {
    return new Interface(_abi) as IEnderBondLiquidityDepositInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEnderBondLiquidityDeposit {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IEnderBondLiquidityDeposit;
  }
}
