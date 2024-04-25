// send currency 
// withdraw currency  
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./PriceConverter.sol";
contract FundMe{
    using PriceConverter for uint256;
uint256 public constant MIN_USD_PRICE=50*1e18;
address[] public funders;
address public immutable i_owner;
constructor(){
    i_owner=msg.sender;
}


mapping(address=>uint256) public addressToamountFunded;
    function fund() public payable {

        require(msg.value.getConversionRate() >= MIN_USD_PRICE,"Didn't send enough!");
        funders.push(msg.sender);
        addressToamountFunded[msg.sender]=msg.value;
    }

    
    function withdraw() public onlyOwner {
        for(uint256 funderIndex=0; funderIndex<funders.length;funderIndex++){
            address funder=funders[funderIndex];
            addressToamountFunded[funder]=0;

        }
        funders=new address[](0);
        // withdraw the money 
        //transfer
        // payable(msg.sender).transfer(address(this).balance);
        // bool sendSuccess=payable(msg.sender).send(address(this).balance);
        (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess,"Call failed!");

    }
    modifier onlyOwner{
        require(msg.sender==i_owner,"Sender is not Owner!");
        _;
    }

    receive() external payable {
        fund();
     }
     fallback() external payable {
        fund();
      }
}