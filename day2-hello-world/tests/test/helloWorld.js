const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
    it ('Should return Hello world!! Here I am!', async () => {
        const helloWorld = await HelloWorld.deployed();
        // the contract instance usually takes a lower case, and the contract Artifact takes 2 upperCase
        const result = await helloWorld.hello(); // we call the hello function from the Hello World contract instance
        // now we need to make sure the result is what we are expecting 
        assert(result === 'Hello world!! Here I am!');
    });
// got stuck for 30mn trying to figure out why all my code was right but no test was grabbed
// when running truffle test... IT'S A BUILD ISSUE, the way the folders were arranged was not
// correct. If it happens again, START LOOKING AT HOW FOLDERS ARE ARRANGED!! Revesit the original repo
// on github if needed
});