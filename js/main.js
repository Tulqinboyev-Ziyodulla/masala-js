{
    // 1-masala //
    // function onlyNumbers(array) {
    //     return array.filter(son => son > 0)
    // }
    // console.log( onlyNumbers([-5, 6, 3, -3]) ); // [6, 3]
    // console.log( onlyNumbers([12, -4, 5, -6, 33]) ); // [12, 5, 33]
}

{
    // 2-masala //
    // function tenth(number){
    // return Math.floor (number / 10 ) % 10
    // }
    // console.log(tenth(123)); // 2
    // console.log(tenth(4568)); // 6
}

{
    // 3-masala //
    // function binary(numbers){
    //   return `${numbers === 1}` 
    // }
    // console.log( binary(1)); // true
    // console.log(binary(0));

    //     function binary(number){
    //     if(number === 1){
    //         return true
    //     }else if (number === 0){
    //         return false
    //     }else{
    //         return null
    //     }
    // }
    // console.log( binary(7)); // null
}

{
    // 4-masala //
    // function card(cards, number) {
    //     if (number) {
    //         return cards;
    //     } else {
    //         let index = cards.slice(0, 4) + " **** **** **" + cards.slice(-2);
    //         return index;
    //     }
    // }

    // console.log(card("8600 1234 5651 2589", true));  // 8600 1234 5651 2589
    // console.log(card("8600 5464 2332 4589", false));  // 8600 **** **** **89
}

{
    // 5-masala //
    //     function checkPassword(text){
    //     return `${text === "12345hello"}`
    // }
    // console.log( checkPassword("12345678")); // false
    // console.log( checkPassword("12345hello")); // true
}

{
    // 6-masala //
    //     function camelCase(text) {
    //     return text.split('-').map((son) => {
    //         if (son === 0) return son.toLowerCase();
    //         return son.charAt(0).toUpperCase() + son.slice(1).toLowerCase();
    //     }).join('');
    // }

    // console.log( camelCase("kabab-case") ); // kababCase
    // console.log( camelCase("lorem-ipsum-dolor") ); // loremIpsumDolor
}

{
    // 7-masala //
    //     function bigAndSmall(text) {
    //     let numbers = text.split(' ').map(Number);
    //     let max = Math.max(...numbers);
    //     let min = Math.min(...numbers);
    //     return `${max} ${min}`;
    // }

    // console.log(bigAndSmall("1 2 3 4 5")); // "5 1"
    // console.log(bigAndSmall("5 25 33 44")); // "44 5"
}