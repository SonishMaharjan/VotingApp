var Election = artifacts.require("./Election.sol");

//contract and it are from mocha
//asser is from chai

contract("Election", function(accounts){

	//verify if the no of candidate is correct or not

	it("initializes with two candidates",function(){

		return Election.deployed().then(function(instance){
			return instance.candidatesCount();

		}).then(function(count){

			assert.equal(count,2);
		})

	})

	//verify if the initial candidate data are correct like name,initial vote count,id


	it("it initializes the candidates with the correct values",function(){

		return Election.deployed().then(function(instance){
			electionInstance = instance;
			return electionInstance.candidates(1);
		}).then(function(candidate){

			assert.equal(candidate[0],1,"contains the correct id");
			assert.equal(candidate[1],"Candidate 1","contains the correct name");
			assert.equal(candidate[2],0,"contains the correct votes count");

			return electionInstance.candidates(2);
		}).then(function(candidate){

			assert.equal(candidate[0],2,"contains the correct id");
			assert.equal(candidate[1],"Candidate 2","contains the correct name");
			assert.equal(candidate[2],0,"contains the correct votes count");


		});
	});
});
