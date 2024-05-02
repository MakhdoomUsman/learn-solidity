const { ethers } = require("hardhat")

async function main() {
    const SimpleStorageFacotry = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying!!")
    const simpleStorage = await SimpleStorageFacotry.deploy()
    await simpleStorage.deployed()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(0)
    })
