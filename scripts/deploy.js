async function main() {
  // 實例化一個 HelloWorld 合約工廠
  const HelloWorld = await ethers.getContractFactory('HelloWorld');

  // 使用合約工廠的 deploy 方法來進行部署
  const hello_world = await HelloWorld.deploy('Hello World!');
  
  // 印出合約地址
  console.log('Contract deployed to address:', hello_world.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
