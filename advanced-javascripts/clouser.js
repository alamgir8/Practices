// কোন একটা function থেকে অন্য কোন function কে কল করে return করলে সে সে নিজস্ব একটা environment তৈরি করে এবং সে নিজের মতো কাজ করতে থাকে,পরবর্তীতে যতোবার কল করা হবে সে নিজের sequence ঠিক রেখেই কাজ করে ,এইটাকে closure বলে।

function stopWatch() {
    let count = 1;
    return function() {
        return count++;
        
    }
}

const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

const watch2 = stopWatch();

console.log(watch2());
console.log(watch2());
console.log(watch2());
console.log(watch1());
console.log(watch1());
console.log(watch2());


