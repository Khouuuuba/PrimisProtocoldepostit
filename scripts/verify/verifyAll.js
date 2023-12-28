const EndToken =  "0xd476de2e6e4b93ba7dc1dfc2051dc4e69ace66a1"
const EnderBond =   "0x6364bda1d80697c8260c75408db345ddc86ba44b"
const SEndToken ="0xa57daa4136bfd8a0059b30b2652e906412a09426"
const BondNFT =   "0xa760f4caf70b14c3d3fa03317b6a93ac973486d1"
const EnderTreasury =   "0x55b6f413159d0eaaff1d8f290bd51bec1f343495"
const EnderStaking =   "0xf2ac820b4c6bf23ab5d82c819f6684ea9e3cb601"
const Weth =   "0x58Ec768d6454190e4e43F99F865F00c46563fd5F"
const MockStEth = "0x63fcbA043697Ddad15412f880c075cA9E6683f81"
const EnderLidoStrategy =   "0x9F306B7119F24e78A286265905E80af7a318f3AD"
const EnderOracle = "0x4CE5090196f000C6C486af65af8b55A98bBC728a"
const depositContract = "0xdf573d08fca3ad8625f2391eba603c19da7201ed"
 
async function main() {
    try {
        await hre.run("verify:verify", {
        address: Weth,
        constructorArguments: ["wrappedEth", "weth", "0xEe7CA89760a3425Bc06d8aFA201e80C22E5B94E9"],
        contract: "contracts/ERC20/StEth.sol:mockWETH",
        });  
        await hre.run("verify:verify", {
            address: MockStEth,
            constructorArguments: [Weth, "0xEe7CA89760a3425Bc06d8aFA201e80C22E5B94E9"],
            contract: "contracts/ERC20/StEth.sol:MockStEth",
        });

        await hre.run("verify:verify", {
            address: depositContract,
            contract: "contracts/EnderPreLounchDeposit.sol:enderPreLounchDeposit",
        });
        // await hre.run("verify:verify", {
        //     address: EnderLidoStrategy,
        //     constructorArguments: ["InstaToken", "Inst", "0xEe7CA89760a3425Bc06d8aFA201e80C22E5B94E9", MockStEth],
        //     contract: "contracts/strategy/instadapp/instadappLite.sol:StinstaToken",
        // });
        // await hre.run("verify:verify", {
        //     address: EndToken,
        //     contract: "contracts/ERC20/EndToken.sol:EndToken",
        // });
        // await hre.run("verify:verify", {
        //     address: SEndToken,
        //     contract: "contracts/ERC20/SEndToken.sol:SEndToken",
        // });

        // await hre.run("verify:verify", {
        //     address: EnderBond,
        //     contract: "contracts/EnderBond.sol:EnderBond",
        // });

        // await hre.run("verify:verify", {
        //     address: BondNFT,
        //     contract: "contracts/NFT/BondNFT.sol:BondNFT",
        // });;

        // await hre.run("verify:verify", {
        //     address: EnderTreasury,
        //     contract: "contracts/EnderTreasury.sol:EnderTreasury",
        // });

        // await hre.run("verify:verify", {
        //     address: EnderStaking,
        //     contract: "contracts/EnderStaking.sol:EnderStaking",
        // });
        // await hre.run("verify:verify", {
        //     address: EnderOracle,
        //     contract: "contracts/oracle/EnderOracle.sol:EnderOracle",
        // });
    } catch (err) {
        console.log(err);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});