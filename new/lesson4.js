/* 1. Написати функцію, яка у випадку якщо типи двох аргументів string поверне їх зконкатенований вираз,
якщо типи двох аргументів number - поверне їх помножене значення
та у будь якому випадку не співпадіння поверне текст There are no type matches for operation */

function typeChecker(arg1, arg2) {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2; 
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 * arg2;
    } else {
        return 'There are no type matches for operation';
    }
}
    console.log(typeChecker("My", "text"))
    console.log(typeChecker(2, 3)); 
    console.log(typeChecker(true, 5)); 
    
    /* 2. Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число
    позитивне, та No якщо воно негативне */
    function isNegative(value) {
        console.log(value < 0 ? "No" : "Yes");
}
     isNegative(5);
     isNegative(-1);
     

    
    
    /* 3. Написати функцію, яка повертає true якщо перший аргумент ділиться на другий без остачі, 
    або якщо ні - повертає false */
    function divider(num1, num2) {
        return num2 !== 0 && num1 % num2 === 0;
    }
    console.log(divider(4, 2)); 
    console.log(divider(3, 2)); 
    
    /* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
    перевищує за значенням число 10 */
    function recursiveAddition(value) {
    if (value>10) {
        return;
    }
    console.log(value);
    recursiveAddition(value+2);
}
    
    recursiveAddition(5);
    recursiveAddition(2); 
    recursiveAddition(11); 
    



    



    
