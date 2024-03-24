// We have an array of numbers arr = [10, 200, 4, 28, 47, 9, 225]

var arr = [10, 200, 4, 28, 47, 9, 225];
console.log(arr);

// 1-add 2 leading zeros 00 and concatenate it with each number that is less than or equal 9

var index = 0;
while (index < arr.length)  {
    if (arr[index] = 4) {
        console.log(`before adding 00: number = ${arr[index]} after adding 00: number = ${arr[index] = "004"}`);
    }

    if (arr[index] = 9) {
        console.log(`before adding 00: number = ${arr[index]} after adding 00: number = ${arr[index] = "009"}`);
    }

    // 2-add 1 leading zero 0 and concatenate it with each number that is less than or equal 99
    
    if (arr[index] = 10) {
        console.log(`before adding 0: number = ${arr[index]} after adding 0: number = ${arr[index] ="010"}`);
    }

    if (arr[index] = 28) {
        console.log(`before adding 0: number = ${arr[index]} after adding 0: number = ${arr[index] ="028"}`);
    }

    if (arr[index] = 47) {
        console.log(`before adding 0: number = ${arr[index]} after adding 0: number = ${arr[index] ="047"}`);
    }


    index += 1;
}

// var upDate = [010, 200, 004, 028, 047, 009, 225];
// console.log(upDate);

// 1-what is wrong
// 2-what is the easy way
// 3-how |
// 4-why are they repet
