const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Brian Holt";
console.log(myName);

const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

// if you see three lines, it's just three = in a row, ===. the font just combines them into one big character
// Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double
// equals because double equals does a lot of funny business that usually we don't want it to do. It does what's
// called coercion and we'll talk about that below. But in an example 2 == "2" but it does not 2 === "2". String
// 2 is double equal to number 2 but string 2 is not triple equal to number 2.
if (2 + 2 === 4) {
  console.log(
    "Oh thank god, the fundamental principles of mathematics still hold true."
  );
} else {
  console.log("Uh, panic?");
}

let friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

let friendsAtYourParty2 = 0;
while (friendsAtYourParty2 < 10) {
  friendsAtYourParty2 = friendsAtYourParty2 + 1;
}
console.log(friendsAtYourParty2);

friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
console.log(friendsAtYourParty);

let friendsAtYourParty3 = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty3++;
}
console.log(friendsAtYourParty3);
