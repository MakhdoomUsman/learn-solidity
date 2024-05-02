// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract SimpleStorage {
    uint256 public favoriteNumber;
    // Person public people = Person({
    // favoriteNumber:5,
    // name:"usman"
    // });
    mapping(string => uint256) public nameToFavoriteNumber;
    struct Person { 
        uint256 favoriteNumber;
        string name;
    }
    Person[] public people;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
        // favoriteNumber=favoriteNumber+5;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function add() public pure returns (uint256) {
        return 1 + 1;
    }

    //calldata, memory, storage:: One of them should be assign to string, array or struct when we passes it to function perameters
    //  memory:: Tempory variable that can be modified
    //  calldata:: Tempory variable that can not be modified
    //  storage:: permanent variable that can be modified
    function addArrayData(uint256 _favoriteNumber, string memory _name) public {
        people.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
