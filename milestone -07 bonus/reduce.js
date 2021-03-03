const nums = [10, 20, 30, 50, 100]

const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);


const friends =[
    {
        name:'hanif',
        age: 26,
        salary: 25000
    },
    {
        name:'aminul',
        age: 26,
        salary: 20000
    },
    {
        name:'alamin',
        age: 26,
        salary: 30000
    },
    {
        name:'lemon',
        age: 26,
        salary: 22000
    }
]

const totalSalary = friends.reduce((sum, friend) =>
    {
        // return sum + friend.age;
        return friend.salary
    },0)
   console.log(totalSalary);