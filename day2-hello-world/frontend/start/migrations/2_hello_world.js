const HelloWorld = artifacts.require('HelloWorld');

export default function(deployer) {
  deployer.deploy(HelloWorld);
};
