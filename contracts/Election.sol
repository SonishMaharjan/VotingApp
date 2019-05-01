pragma solidity >=0.4.22 <0.6.0;

contract Election{
	// Model a Candidate
	struct Candidate{

		uint id;
		string name;
		uint voteCount;
	}

	//Store candidate
	//Fetch Candidate
	mapping(uint => Candidate) public candidates;

	// Read Candidate

	//store candidate count
	uint public candidatesCount;



	//Constructor
	constructor() public{
		addCandidate("Candidate 1");
		addCandidate("Candidate 2");
	}


	function addCandidate(string memory _name) private{

		candidatesCount++;
		candidates[candidatesCount]= Candidate(candidatesCount,_name,0);
	}


}