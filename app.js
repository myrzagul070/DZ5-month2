//1
function getReverse(...string) {
    return string.map(s => {
        let str = '';
        for(let i = s.length; i >=0; i--){
            str += s.charAt(i)
        }
        return str;
    })
}
console.log(getReverse('фронтенд', 'апрель', 'урок'))

//2
function getMath(...numbers){
    const result = numbers.reduce((a,b) => a+=b)
    const result2 = result /  numbers.length
    console.log(result2)
}
getMath(1, 2, 3, 4, 5, 90, 6, 85)

//3




