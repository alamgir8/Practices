

const age = [ 23, 22, 24, 26, 70];

console.log(age.slice(1,3)); // slice কোন একটা array  থেকে index number এর মাধ্যমের requirement value গুলো বের করে আনে, কিন্তু আসল array ঠিকই থাকে।
console.log(age);

console.log(age.splice(1,3, 2,2)); //splice কোন একটা array থেকে index number এর মাধ্যমে requirement value গুলো বের করে আনে, এবং এতে আসল array সে অনুযায়ী change হয়। মানে এইটা array থেকে permanent ভাবে value গুলো বের করে আনে।  
console.log(age);

console.log(age.join(',')); //join হচ্ছে array এর value গুলোকে একসাথে করে রাখে , সেটা কমা, fullstop কিনবা অন্য যে কোন sting দিয়ে করা যেতে পারে।  