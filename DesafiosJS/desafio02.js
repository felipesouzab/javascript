function myFunction (text, flag = "start") {
   /* if (text.length < 3) {
        return text
    }
    if (flag == "start") {
        return text.slice(0, 3)
    }
    return text.slice(-3) */

    return text.length < 3 ? text : flag === "start" ? text.slice(0, 3) : text.slice(-3)
}

console.log(myFunction("abcdefg", "start"))
console.log(myFunction("abcdefg", "end"))
console.log(myFunction("ab", "end"))
console.log(myFunction("abcdefg"))