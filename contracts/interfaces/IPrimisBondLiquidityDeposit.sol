// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IPrimisBondLiquidityDeposit {
    function depositedIntoBond(uint256 index, address _bond) external  returns(address user, uint256 principal, uint256 bonfees, uint256 maturity);
}
