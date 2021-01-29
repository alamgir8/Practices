//কলব্যাক function এ একটা function কে অন্য function এর মাঝে কল করা হয়। এইখানে guestWelcome function কে কল করে এর মধ্যে অন্য function কে কল করা হয়েছে, ফলে অই function টা execute হয়েছে। এইখানে guestWelcome function এ দুইটা প্যারামিটার নেয়া হয়েছে , ২য় প্যারামিটার টা হলো একটা anonymous Function যেখানে অন্য function goodMorning আর goodEvening কে কল করা হয়েছে, এইখানে আমি সরাসরি goodMorning কিনবা goodEvening কে কল করতে পারতাম কিন্তু guestWelcome function অন্য যায়গায় যেহেতু কল করা হবে তাই এইখানে anonymous function নিয়ে অন্য যেকোন function কল করা হয়েছে । এই পুরা function system কে বলা হয় কলব্যাক function ।

function guestWelcome(name, goodMorning) {
    goodMorning(name);
}


const actorName = 'Sakib';

function goodMorning( name) {
    console.log('Good Morning', name);
}

function goodEvening( name) {
    console.log('Good Evening', name);
}

guestWelcome('Sakib khan', goodMorning);
guestWelcome(actorName, goodEvening);