// We have an array of numbers arr = [10, 200, 4, 28, 47, 9, 225]

var arr = [10, 200, 4, 28, 47, 9, 225];
console.log(arr);

// 1-add 2 leading zeros 00 and concatenate it with each number that is less than or equal 9

var index = 0;
while (index < arr.length)  {
    if (arr[index] <= 9) {
        console.log(`before adding 00: number = ${arr[index]} after adding 00: number = 00${arr[index]}`);
        console.log(arr[index] , arr[index] = '0'+ arr[index] );
    }

    // 2-add 1 leading zero 0 and concatenate it with each number that is less than or equal 99
    else if (arr[index] <= 99) {
        console.log(`before adding 0: number = ${arr[index]} after adding 0: number = 0${arr[index]}`);
        console.log(arr[index] , arr[index] = '00'+ arr[index] );
    }

    // 3-225 is greater than 99
    if (arr[index] > 99) {
        console.log(`225 is greater than 99`);
        console.log(arr[index]);
    }

    index += 1;
}



// 1-what is wrong
// 2-what is the easy way
// 3-how |
// 4-why are they repet
