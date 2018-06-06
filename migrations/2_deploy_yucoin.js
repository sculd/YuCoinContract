var YuCoin = artifacts.require("./YuCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(YuCoin);
};