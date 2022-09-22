// tugas 4 a

const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
const data2 = {
    name: "Rizky Putra Pratama",
    email: "pratamabusiness@gmail.com",
    hobby: ["cosplay naruto", "cosplay anya"],
}

const hasil = {...data, ...data2};
console.log(hasil);

// tugas 4 b

const {city, street} = data.address;

console.log(city, street) 