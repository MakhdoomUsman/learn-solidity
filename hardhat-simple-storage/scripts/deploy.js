const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFacotry = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying!!")
    const simpleStorage = await SimpleStorageFacotry.deploy()
    console.log(`'Deployed ', ${simpleStorage.target}`);
    console.log("network", network.config);

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        await simpleStorage.deploymentTransaction().wait(6);
        await verify(simpleStorage.target, [])
    }
    // await simpleStorage.deployed()
}
async function verify(contractAddress, args) {
    console.log("Verifies hardhat!!!");
    try {
        await run("verify:verify", {
            address: contractAddress,
            contructorArguments: args
        })
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) console.log("Already Verified!");
        console.log("Error!", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(0)
    })
