// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: "Topu",
    middleName: "Ray",
    lastName: "Han",
  },
  gender: "Male",
  favouriteColor: "Black",
};

// const myFavouriteColor = user.favouriteColor;
const { favouriteColor } = user;
// console.log(favouriteColor);

const friends = ["karim", "rahaim", "sakib"];
// const myBestFriend = friends[1];

const [A, myBestFriend, c] = friends;
console.log(myBestFriend);
