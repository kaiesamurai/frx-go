import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
// import deployedContracts from "../../nextjs/contracts/deployedContracts";

/**
 * Deploys a contract named "ScrollFighter" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployScrollFighter: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // const verifier_contract_address = deployedContracts[534351]["UltraVerifier"].address;
  await deploy("ScrollFighter", {
    from: deployer,
    // Contract constructor arguments
    // args: [verifier_contract_address],
    args: ["0xc15BC025d57bec9FA39e18701b4f0b3b5a067B6C", "0x64CDeB6CD5ecfB002bdaFabc98B5C883C5C06B27"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  await hre.ethers.getContract<Contract>("ScrollFighter", deployer);
  // console.log("👋 Initial greeting:", await contract.greeting());
};

export default deployScrollFighter;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployScrollFighter.tags = ["ScrollFighter"];
