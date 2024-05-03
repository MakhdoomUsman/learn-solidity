const { ethers } = require("hardhat");
const { assert, expect } = require("chai")

describe("SimpleStorage", function () {
  let simpleStorage, simpleStorageFacotry;
  beforeEach(async function () {
    simpleStorageFacotry = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFacotry.deploy()
  })
  it("Should start with a favorite number of 0", async function () {
    const currenValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert.equal(currenValue.toString(), expectedValue)
    expect(currenValue.toString()).to.equal(expectedValue)
  })
  it("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1)
    const currenValue = await simpleStorage.retrieve()
    assert.equal(currenValue.toString(), expectedValue)
  })
})