// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice() public view returns(uint256) {
        // ABI 
        //address 0x447Fd5eC2D383091C22B8549cb231a3bAD6d3fAf
        AggregatorV3Interface priceFeed=AggregatorV3Interface(0x447Fd5eC2D383091C22B8549cb231a3bAD6d3fAf);
        (,int256 price,,,) = priceFeed.latestRoundData();
        return uint256(price * 1e10);
    }

    function getConversionRate(uint256 ethAmount) public view returns(uint256){
        uint256 ethPrice = getPrice();
        uint256 etrhAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return etrhAmountInUsd;
    }
}

