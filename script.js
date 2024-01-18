let submitButton = document.getElementById("bt1");
let generatorButton = document.getElementById("btG");
let inName = document.getElementById("fName");
let inPNo = document.getElementById("pNo");
let inContribution = document.getElementById("contribution");
let memberTableBody = document.getElementById("memberTableBody");
let members = [];
let wonMoney = 0;

submitButton.addEventListener("click", () => {
  let newName = inName.value;
  let newPNo = inPNo.value;
  let newContribution = Number(inContribution.value);

  //to empty form before next entry
  document.getElementById("fName").value = "";
  document.getElementById("pNo").value = "";
  document.getElementById("contribution").value = "";


  let newMember = document.createElement('tr');
  let newMemberN = document.createElement('td');
  newMemberN.textContent = newName;
  let newMemberP = document.createElement('td');
  newMemberP.textContent = newPNo;
  let newMemberC = document.createElement('td');
  newMemberC.textContent = newContribution;

  newMember.appendChild(newMemberN);
  newMember.appendChild(newMemberP);
  newMember.appendChild(newMemberC);
  memberTableBody.appendChild(newMember);

  //to store entries to an object array
  let member = {
    name: newName,
    phoneNumber: newPNo,
    contribution: newContribution
  };
  members.push(member);
});

function getWinner() {
  if (members.length === 0) {
    return null;
  }
  const winnerIndex = Math.floor(Math.random() * members.length);
  return members[winnerIndex];
}

function getWonMoney() {
  if (members.length === 0) {
    return null;
  }
  members.forEach(function (value, index, arr) {
    wonMoney += value["contribution"]
  })
  return wonMoney;
}

generatorButton.addEventListener("click", () => {
  let winner = getWinner();
  const element = document.getElementById("winnerHolder")
  element.textContent = "Name: " + winner["name"] + "    Phone no: " + winner["phoneNumber"] + "    Amount: " + getWonMoney()
})
