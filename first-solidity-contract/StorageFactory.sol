// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
 import "./SimpleStorage.sol";
contract StorageFactory{
    // SimpleStorage public simpleStorage;
    // array of simplestorage contract 
    SimpleStorage[] public simpleStorageArray;
    function createSimpleStorageContract() public {
    SimpleStorage simpleStorage = new SimpleStorage();
    simpleStorageArray.push(simpleStorage); 
    }
    function ssStore( uint256 _simpleStorageINdex,uint256 _simpleStorage ) public  { 
        SimpleStorage simpleStorage=simpleStorageArray[_simpleStorageINdex];
        simpleStorage.store(_simpleStorage);
    }
    function ssGet(uint256 _SimpleStorageIndex) public view returns (uint256){
       return  simpleStorageArray[_SimpleStorageIndex].retrieve();
    }
}