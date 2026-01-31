// Controlling script for index.html.

// Data Utilities
var Pclass = [];
var Sex = [];
var Age = [];
var SibSp = [];
var Parch = [];
var Fare = [];
var Cabin = [];
var Embarked = [];

data.data.forEach(function(obj) {
    Pclass.push(obj.Pclass);
    Sex.push(obj.Sex);
    Age.push(obj.Age);
    SibSp.push(obj.SibSp);
    Parch.push(obj.Parch);
    Fare.push(obj.Fare);
    Cabin.push(obj.Cabin);
    Embarked.push(obj.Embarked);
});



entropyDist = function(lst) {
    unique_members = new Set(lst);  // Get the unique members
    freq_members = {};
    probs = {};
    log_probs = {};
    hs = {};
    H = 0;

    unique_members.forEach(function(m) {
        let pared_lst = lst.filter((item) => item == m);
        freq_members[m] = pared_lst.length;
        probs[m] = freq_members[m] / lst.length;
        log_probs[m] = Math.log2(probs[m]);
        hs[m] = probs[m] * log_probs[m];
        H += hs[m];
    });

    return {freqs: freq_members, probs: probs, log_probs: log_probs, hs: hs, H: -H};
}

var PclassH = entropyDist(Pclass);
var SexH = entropyDist(Sex);
var AgeH = entropyDist(Age);
var SibSpH = entropyDist(SibSp);
var ParchH = entropyDist(Parch);
var FareH = entropyDist(Fare);
var CabinH = entropyDist(Cabin);
var EmbarkedH = entropyDist(Embarked);