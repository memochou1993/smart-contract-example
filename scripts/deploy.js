async function main() {
  const HelloWorld = await ethers.getContractFactory('HelloWorld');

  const hello_world = await HelloWorld.deploy('Hello World!');
  
  console.log('Contract deployed to address:', hello_world.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
