// Vitaliy Demchyshyn, [09.12.2021 13:49]
// доп задачка для тех кто все сделал:

// // есть JSON такого формата:
// // '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,
// "firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},
// {"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';

// // нужно это все распарсить в такой массив:
// //
// //     [
// //         { age: 60, firstName: 'Alina' },
// //         { age: 10, firstName: 'Arnold' },
// //         { age: 35, firstName: 'Barbara' },
// //         { age: 43, firstName: 'Jack' },
// //         { age: 16, firstName: 'Joshua' },
// //         { age: 25, firstName: 'Marta' },
// //         { age: 44, firstName: 'Michael' },
// //         { age: 15, firstName: 'Mike' },
// //         { age: 12, firstName: 'Nick' },
// //         { age: 32, firstName: 'Peter' },
// //         { age: 52, firstName: 'Tom' }
// //     ]


// массив отсортирован по firstName


// Вот изначальная переменная:

// const inputJSON = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';


// вот второй json для проверки(там +2 объекта):

// const inputJSON2 = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]';


const inputJSON = '[[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"}],{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';
const inputJSON2 = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]';
const inputJSON3 = '[{"childs":[{"age":25,"firstName":"Marta","childs":[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';
const inputJSON4 = '[[[[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"}]]],{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]';

let parseArray = (array, result) => {
    let parsedArray = JSON.parse(array);
    let resultArray = result || [];

    for (let item of parsedArray) {
        if (Array.isArray(item)) {
            parseArray(JSON.stringify(item), resultArray);
        } else {
            let temporaryObject = {};
            let isTemporaryObjectOk = false
            for (let key in item) {
                if (typeof item[key] !== 'object') {
                    isTemporaryObjectOk = true
                    temporaryObject[key] = item[key];
                } else {
                    isTemporaryObjectOk = false
                    parseArray(JSON.stringify(item[key]), resultArray)
                };
            };
            if (isTemporaryObjectOk) {
                resultArray.push(temporaryObject)
            };
        };
    };

    return resultArray.sort((a, b) => a.firstName > b.firstName ? 1 : a.firstName === b.firstName ? 0 : -1);
};

console.log(parseArray(inputJSON));
console.log(parseArray(inputJSON2));
console.log(parseArray(inputJSON3));
console.log(parseArray(inputJSON4));