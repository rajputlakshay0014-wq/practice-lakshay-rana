/*mplement a function specialSum(numbers) that:
Uses recursion
Does not mutate input
Returns sum of only even numbers
Must be pure
No loops allowed?*/



function specialSum(numbers){
    if (numbers.length===0){
        return 0;
    }
    const first = numbers[0];
    const rest = numbers.slice(1);

    if (numbers%2===0){
        return first + specialSum(rest);
    }
    return specialSum(rest);
}

/*Ek function addNumbers(a, b) banao jo:

do numbers lega

unka sum return kare

pure function hona chahiye

📌 Hint: sirf parameters use karo*/

function addNumbers(a,b){
    return a+b;
}
/*Question 2: Price After Tax

Ek function calculatePrice(price, taxRate) banao jo:

final price return kare

taxRate percentage me ho (e.g. 0.1)

function ke bahar koi variable use na ho*/
 function calculatePrice(price,taxRate){
    return price*(1+taxRate);
 }
 /*String Formatter

Ek function formatName(firstName, lastName) banao jo:

full name return kare

dono input same rahe to output hamesha same aaye*/
function formatName(firstName,lastName){
    return firstName+" "+ lastName;
}
/*Question 4: Array Length Calculator

Ek function getArrayLength(arr) banao jo:

sirf array ka length return kare

original array me koi change na ho*/
function getArrayLength(arr){
    return arr.length
}
/* Question 5: Even or Odd Checker

Ek function isEven(number) banao jo:

true return kare agar number even ho

false agar odd ho

koi external cheez depend na ho*/
function isEven(number){
    if (number%2===0){
        return true
    }else{
        return false
    }
}
/*1️⃣ Sum of Numbers

Ek function sumTillN(n) banao jo:

recursion use kare

1 + 2 + ... + n ka sum return kare

loops allowed nahi*/
function sumTillN(n){
    if (n===0){
        return 0;
    }
    return n + sumTillN(n-1);
}
function countDown(n){
    if (n===0){
        return [];
    }
    return [n,...countDown(n-1)];
}
// power of number 
function power(base,exponent){
    if (exponent===0){
        return 1;
    }
    return base * power(base,exponent-1);
}
//yeah bhai exponent case bhai 
function countEven(numbers){
    if (numbers.length===0){
        return 0;
    }
    const first = numbers[0]
    const last = numbers.slice(1)

    if (first%2===0){
        return 1+countEven(last);
    }
     return countEven(last);
}
// bhai smallest nikalne ke liye bai simple saa tarikha hai bhai ki main bhai first or last mai comparison kru bai or bhai phele yeah maan loo ki osme elament hiii ek hai bhai ...
function findMin(numbers){
    if (numbers.length===1){
        return numbers[0];
    }
    const first = numbers[0];
    const last = findMin(numbers.slice(1));
    if (first > last){
        return first;
    }
    return last;
}
// reverse String 
function reverseString(str){
    if (str.length===0){
        return " ";
    }
    return str[str.length-1]+reverseString(str.slice(0,-1));
}
//// flatten Array
function flattenArray(arr){
    if (arr.length===0){
        return [];
    }
    const first = arr[0];
    const rest = arr.slice(1);
    if (Array.isArray(first)){
        return[...flattenArray(first),...flattenArray(rest)];
    }
    return [first,...flattenArray(rest)];

}
// Sum of the odd numbers 
function sumOdd(numbers){
    if (numbers.length ===0){
        return 0;
    }
    const first = numbers[0];
    const rest = numbers.slice(1);
    if (numbers % 2!=0){
        return first + sumOdd(rest);
    }
    return sumOdd(rest);

}
// is palindrome str or not 
function isPalindrome(str){
    if (str.length <=1){
        return true;
    }
    if (str[0]!== str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1,-1));

}
// deep clone ;
function deepClone(obj){
    if (obj===null||obj!=="object"){
        return obj;
    }
    const clone = {};
    for (let keys in obj){
        clone[keys]= deepClone(obj[keys]);
    }
    return clone ;
    
}