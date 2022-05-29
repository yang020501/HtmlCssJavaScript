function add(a, b) {
    return a + b
}
function divide(a, b) {
    return (b == 0) ? "Error" : a / b
}
//min fucntion
function min(array) {
    var min = array[0]
    for (let i in array) {
        if (array[i] <= min) {
            min = array[i]
        }
    }
    return min;
}
//check Triangle
function checkTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log("cạnh không hợp lệ")
    }
    else if (a + b >= c && a + c >= b && b + c >= a) {
        if (a == b || b == c || a == c) {
            if (a == b && b == c)
                console.log("tam giác đều")
            else
                console.log("tam giác cân")
        }
        else if ((a * a + b * b == c * c) || (b * b + c * c == a * a) || (a * a + c * c == b * b))
            console.log("tam giác vuông")
        else
            console.log("tam giác thường")
    }
    else
        console.log('không phải tam giác!')
}
//sum chan of N
function sumEven(int) {
    var sum;
    if (int < 0) {
        sum = "N không hợp lệ!"
    }
    else {
        sum = 0;
        for (let i = 0; i <= int; i++) {
            if (i % 2 == 0)
                sum += i;
        }
    }
    return sum;
}
// find same elements in 2 arr
function sameElements(A, B) {
    var C = []
    for (let i in A) {
        if (findElement2(A[i], B) != -1)
            C.push(A[i])
    }
    return C
}
// isPrime 
function isPrime(num) {

    if (num == 0 || num == 1)
        return false;

    var i = 2;
    while (i <= Math.floor(num / 2)) {
        if (num % i == 0)
            return false
        i++;
    }
    return true;
}

// find elemetns and one element
function findElement(num, arr) {
    // with arr  is the array of objects 
    // delete key if want to nomarl
    for (let i in arr)
        if (num == arr[i].key)
            return i
    return -1
}
function findElement2(num, arr) {
    // with arr  is the array of objects 
    // delete key if want to nomarl
    for (let i in arr)
        if (num == arr[i])
            return i
    return -1
}

function findElements(num, arr) {
    // rs = [] or r = int is ok
    var rs = []
    for (let i in arr) {
        if (arr[i] == num)
            //rs += `${i} `
            rs.push(i)
    }
    return rs
}
// equal arrays
function equalArr(A, B) {

    if (A.length == B.length) {
        var sumA = sumArr(A);
        var sumB = sumArr(B);
        if (sumA == sumB)
            return true
        return false
    }
    return false
}

// largest sum of same elemnts in arr 
function largestSum(arr) {
    var sum;
    var max = 0;
    var rs = [];
    for (let i in arr) {
        var pos = findElement(arr[i], rs)
        if (pos == -1) {
            let element = { key: "", num: 1 }
            element.key = arr[i];
            rs.push(element)
        }
        else {
            rs[pos].num++;
            sum = rs[pos].key * rs[pos].num
        }
        if (sum > max)
            max = sum;
    }
    return max
}
function GCD(a, b) {
    if (a == 0 || b == 0) {
        return a + b;
    }
    while (a != b) {
        if (a > b)
            a -= b
        else
            b -= a;
    }
    return a;
}
function sumArr(arr) {
    var sum = 0;
    for (let i in arr)
        sum += arr[i]
    return sum;
}
function findSameChildStr(str) {
    var tmp
    var rs = []
    for (let i = 0; i < str.length; i++) {
        tmp = str[i]
        for (let j = i + 1; j <= str.length; j++) {
            if (str[j] != str[i]) {
                i = j - 1;
                break
            }
            tmp += str[j]
        }
        if (tmp.length >= 2)
            rs.push(tmp)
    }
    // use regex
    let regex = new RegExp(/(\w)\1{1,}/igm)
    console.log(regex.exec(str));
    let pattern = /(\w)\1{1,}/g
    console.log(str.match(pattern))
    let s = "www"
    console.log(s.matchAll(pattern))
    console.log(rs);
}
function onChange(e) {
    console.log("change")
    console.log(e)
}
function onBlur() {
    console.log("blur")
}
function onKeydown(e) {
    console.log("keydown")
    console.log(e.key)
}
function onLoad(e) {
    console.log("hello");
    console.log(e)
}
function onClick() {
    var input = document.getElementById("input")
    if (input.value == "") {
        console.log("input plzz");
    }
    else console.log(input.value)
    var h1 = document.createElement("h1")
    h1.innerHTML = "hello"
    document.body.appendChild(h1)
}

/* var key = document.getElementById("input")
key.addEventListener("keydown", onKeydown)
document.addEventListener("keydown", onKeydown) (+84)-3333.444.444 */
function checkPhone(data) {
    // 1 cach in regex
    let pattern = /^\(\+84\)-[0-9]{3}\.[0-9]{3}\.[0-9]{3}/
    /*    let rs = data.match(pattern);
       if (rs)
           if (rs[0].length <= 12 && rs[0].length >= 10) */
    if (pattern.test(data)) {
        console.log(pattern.exec(data));
        return true
    }
    return false
}
function checkMail(data) {
    // cach 2 in regex
    let regex = /[a-z0-9]+@[a-z]+[.][a-z]{2,3}$/
    if (regex.test(data))
        return true
    return false
}
function checkUsername(data) {
    let pattern = /[a-z0-9]{6,}/i
    if (pattern.test(data))
        return true
    return false

}
function onbtnClick() {
    var input1 = document.getElementById("1")
    var input2 = document.getElementById("2")
    var input3 = document.getElementById("3")
    var input4 = document.getElementById("4")

    if (input1.value == "")
        alert("Nhap username")
    else if (!checkUsername(input1.value))
        alert("Username khong hop le")
    else if (input2.value == "")
        alert("Nhap email")
    else if (!checkMail(input2.value))
        alert("Email khong hop le")
    else if (input3.value == "")
        alert("Nhap phone")
    else if (!checkPhone(input3.value))
        alert("Phone khong hop le")
    else if (input4.value == "")
        alert("Nhap nhan xet")

}
function test() {
    var myRegex = /[0-9]/ig;
    var s = "nguyen thi huyen 1 324 2"
    // chay bieu thuc regex va tra ve ket qua khop
    var e = myRegex.exec(s);
    // kiem tra bthuc regex ci jhop hay khong so voi chioi dc cho
    var t = myRegex.test(s)


    console.log(e, t);
}