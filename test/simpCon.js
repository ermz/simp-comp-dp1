const SimpCon = artifacts.require('SimpCon');

contract('SimpCon', () => {
	it('Should deploy SimpCon smart contract properly', async () => {
		const simpCon = await SimpCon.deployed();
		console.log(simpCon.address);
		assert(simpCon.address !== '');
	});
});