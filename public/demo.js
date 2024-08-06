// const USERS_URL = "https://randomuser.me/api/?results=10";
//
// const ac = new AbortController();
//
// fetch(USERS_URL, {signal: ac.signal}).then(
//     () => console.log("fulfilled"), () => console.log("aborted")
// );
//
// setTimeout(() => ac.abort(), 5000);

Array.prototype.last = function () {
    const res = (this.length ? this[this.length - 1] : -1);

    return res;
};

const numbers = [1, 2, 3];

console.log("Last:", numbers.last());
console.log("Last:", [].last());

class MyDate extends Date {

}

const myDate = new MyDate();

function isInstanceOf(obj, classFunction) {
    let res = false;

    for (let pr = obj.__proto__; !res && pr; pr = pr.__proto__) {
        res = (pr.constructor === classFunction);
    }
    return res;
}

console.log(isInstanceOf(myDate, MyDate));
console.log(isInstanceOf(5, Number));
console.log(isInstanceOf(5, Date));

