async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  // Desplegar el contrato VotingToken
  const ERC20Basic = await ethers.deployContract('ERC20Basic', []);
  console.log('ERC20Basic address:', await ERC20Basic.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
