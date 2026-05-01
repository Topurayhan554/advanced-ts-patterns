// spread operators

const friends = ["Rahim", "Karim"];
const schoolFriends = ["Nafis", "Sakib"];
const collegeFriends = ["Lition", "Musfiq"];

friends.push(...schoolFriends);
friends.push(...collegeFriends);
// console.log(friends);

const user = { name: "Topu", PhoneNo: "01744200000" };

const otherInfo = { hobby: "outing", favouriteColor: "black" };

const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send invitation to ${friend}`);
  });
};

sendInvite("Topu", "Mamun", "manik", "Rahim", "Karim");
