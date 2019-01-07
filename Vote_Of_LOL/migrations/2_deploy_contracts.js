var lol_Vote = artifacts.require("lol_Vote");

module.exports = function(deployer) {
  deployer.deploy(lol_Vote, {gas: 200000000});
};