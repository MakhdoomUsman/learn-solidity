const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()
async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RCP_URL)
    const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8")
    let wallet = new ethers.Wallet.fromEncryptedJsonSync(
        encryptedJson,
        process.env.PRIVATE_KEY_PASSWORD
    )
    wallet = await wallet.connect(provider)
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8"
    )
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    const contract = await contractFactory.deploy()
    await contract.deployTransaction.wait(1)
    console.log("transaction by Wallet address", contract.address)
    // const currentFavoriteNumber = await contract.retrieve()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log("Error! ", error)
        process.exit(1)
    })
