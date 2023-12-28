/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockStEth,
  MockStEthInterface,
} from "../../../../contracts/ERC20/StEth.sol/MockStEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_WETH",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_allowances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
    ],
    name: "mintShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mockWeth",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011fd380380620011fd833981016040819052620000349162000166565b604080518082018252600981526809adec6d6a6e88ae8d60bb1b6020808301919091528251808401909352600683526509aa6a88ae8d60d31b908301529082806001600160a01b038116620000a357604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000ae81620000f9565b506004620000bd848262000243565b506005620000cc838262000243565b5050600780546001600160a01b0319166001600160a01b039590951694909417909355506200030f915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200016157600080fd5b919050565b600080604083850312156200017a57600080fd5b620001858362000149565b9150620001956020840162000149565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001c957607f821691505b602082108103620001ea57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023e57600081815260208120601f850160051c81016020861015620002195750805b601f850160051c820191505b818110156200023a5782815560010162000225565b5050505b505050565b81516001600160401b038111156200025f576200025f6200019e565b6200027781620002708454620001b4565b84620001f0565b602080601f831160018114620002af5760008415620002965750858301515b600019600386901b1c1916600185901b1785556200023a565b600085815260208120601f198616915b82811015620002e057888601518255948401946001909101908401620002bf565b5085821015620002ff5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ede806200031f6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063a9059cbb11610071578063a9059cbb1461027d578063b58b6e2914610290578063dd62ed3e146102a3578063e126d022146102dc578063f2fde38b146102ef57600080fd5b806370a0823114610222578063715018a6146102355780638da5cb5b1461023d57806395d89b4114610262578063a457c2d71461026a57600080fd5b806323b872dd116100f457806323b872dd146101b8578063313ce567146101cb57806339509351146101da57806340c10f19146101ed5780636ebcf6071461020257600080fd5b8063024c2ddd14610131578063026c42071461016f57806306fdde0314610178578063095ea7b31461018d57806318160ddd146101b0575b600080fd5b61015c61013f366004610cb6565b600260209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61015c60065481565b610180610302565b6040516101669190610ce9565b6101a061019b366004610d37565b610394565b6040519015158152602001610166565b60065461015c565b6101a06101c6366004610d61565b6103ab565b60405160128152602001610166565b6101a06101e8366004610d37565b61045a565b6102006101fb366004610d37565b610496565b005b61015c610210366004610d9d565b60016020526000908152604090205481565b61015c610230366004610d9d565b6104a4565b610200610590565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610166565b6101806105a4565b6101a0610278366004610d37565b6105b3565b6101a061028b366004610d37565b61064c565b61020061029e366004610db8565b610659565b61015c6102b1366004610cb6565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60075461024a906001600160a01b031681565b6102006102fd366004610d9d565b61075f565b60606004805461031190610dd1565b80601f016020809104026020016040519081016040528092919081815260200182805461033d90610dd1565b801561038a5780601f1061035f5761010080835404028352916020019161038a565b820191906000526020600020905b81548152906001019060200180831161036d57829003601f168201915b5050505050905090565b60006103a133848461079d565b5060015b92915050565b60006103b8848484610885565b6001600160a01b0384166000908152600260209081526040808320338452909152902054828110156104425760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61044f853385840361079d565b506001949350505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916103a1918590610491908690610e21565b61079d565b6104a0828261096f565b5050565b60006001600160a01b0382166104eb5760405162461bcd60e51b815260206004820152600c60248201526b5a65726f204164647265737360a01b6044820152606401610439565b6006546007546040516370a0823160e01b8152306004820152600092916001600160a01b0316906370a0823190602401602060405180830381865afa158015610538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055c9190610e34565b6001600160a01b03851660009081526001602052604090205461057f9190610e4d565b6105899190610e64565b9392505050565b610598610a4e565b6105a26000610a7b565b565b60606005805461031190610dd1565b3360009081526002602090815260408083206001600160a01b0386168452909152812054828110156106355760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610439565b610642338585840361079d565b5060019392505050565b60006103a1338484610885565b600081116106a95760405162461bcd60e51b815260206004820152601f60248201527f5368617265206d7573742062652067726561746572207468616e207a65726f006044820152606401610439565b80600660008282546106bb9190610e21565b909155505033600090815260016020526040812080548392906106df908490610e21565b90915550506007546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561073b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a09190610e86565b610767610a4e565b6001600160a01b03811661079157604051631e4fbdf760e01b815260006004820152602401610439565b61079a81610a7b565b50565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156107e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108099190610e34565b6006546108169083610e4d565b6108209190610e64565b6001600160a01b038481166000818152600260209081526040808320948816808452948252918290209490945551848152919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610890846104a4565b9050818110156108d75760405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e7420536861726560701b6044820152606401610439565b6007546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610920573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109449190610e34565b6006546109519085610e4d565b61095b9190610e64565b9050610968858583610acb565b5050505050565b6001600160a01b0382166109c55760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610439565b80600360008282546109d79190610e21565b90915550506001600160a01b03821660009081526001602052604081208054839290610a04908490610e21565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000546001600160a01b031633146105a25760405163118cdaa760e01b8152336004820152602401610439565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038316610b2f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610439565b6001600160a01b038216610b915760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610439565b6001600160a01b03831660009081526001602052604090205481811015610c095760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610439565b6001600160a01b03808516600090815260016020526040808220858503905591851681529081208054849290610c40908490610e21565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c8c91815260200190565b60405180910390a350505050565b80356001600160a01b0381168114610cb157600080fd5b919050565b60008060408385031215610cc957600080fd5b610cd283610c9a565b9150610ce060208401610c9a565b90509250929050565b600060208083528351808285015260005b81811015610d1657858101830151858201604001528201610cfa565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060408385031215610d4a57600080fd5b610d5383610c9a565b946020939093013593505050565b600080600060608486031215610d7657600080fd5b610d7f84610c9a565b9250610d8d60208501610c9a565b9150604084013590509250925092565b600060208284031215610daf57600080fd5b61058982610c9a565b600060208284031215610dca57600080fd5b5035919050565b600181811c90821680610de557607f821691505b602082108103610e0557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103a5576103a5610e0b565b600060208284031215610e4657600080fd5b5051919050565b80820281158282048414176103a5576103a5610e0b565b600082610e8157634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610e9857600080fd5b8151801515811461058957600080fdfea26469706673582212205d55dc9fa2d95c9a747aa3ceaae95e2f252556d0ad120c1c156576e74b41abdf64736f6c63430008120033";

type MockStEthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStEthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStEth__factory extends ContractFactory {
  constructor(...args: MockStEthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _WETH: AddressLike,
    owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_WETH, owner, overrides || {});
  }
  override deploy(
    _WETH: AddressLike,
    owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_WETH, owner, overrides || {}) as Promise<
      MockStEth & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockStEth__factory {
    return super.connect(runner) as MockStEth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStEthInterface {
    return new Interface(_abi) as MockStEthInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockStEth {
    return new Contract(address, _abi, runner) as unknown as MockStEth;
  }
}
