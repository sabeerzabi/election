var Election = artifacts.require('./Election.sol');

contract('Election', function (account) {
    var electionCandidates;
    it("initilize two Candidate", function(){
        return Election.deployed().then(function(instance){
            return instance.candidateCount();
        }).then(function(count){
            assert.equal(count, 2, "Candidates count correct" );
        });
    });

    it("initialize candidate with correct value", function(){
        return Election.deployed().then(function(instance){
            electionCandidates = instance;
            return electionCandidates.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate.id, 1, "contains Correct id");
            assert.equal(candidate.name, "candidate 1", "contains Correct name");
            assert.equal(candidate.voteCount, 0, "contains Correct vote count");
            return electionCandidates.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate.id, 2, "contains Correct id");
            assert.equal(candidate.name, "candidate 2", "contains Correct name");
            assert.equal(candidate.voteCount, 0, "contains Correct vote count");
        }); 
    })
});