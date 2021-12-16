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


const inputJSON = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';
const inputJSON2 = '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]';
const inputJSON3 = '[{"childs":[{"age":25,"firstName":"Marta","childs":[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"},{"childs":[{"age":55,"firstName":"Kira"},{"age":19,"firstName":"Olha"}]}],"age":44,"firstName":"Michael"}]},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';

let parseArray = (array) => {
    let parsedArray = JSON.parse(array);
    let resultArray = [];

    let findObject = (WhereLook) => {
        for (let item of WhereLook) {
            if (Array.isArray(item)) {
                findObject(item);
            } else {
                let temporaryObject = {};
                for (let key in item) {
                    if (typeof item[key] === 'object') {
                        findObject(item[key]);
                    } else {
                        temporaryObject[key] = item[key];
                    };
                };
                resultArray.push(temporaryObject)
            };
        };
    };

    findObject(parsedArray);
    resultArray.sort((a, b) => a.firstName > b.firstName)
    console.log(resultArray);
};

parseArray(inputJSON);
parseArray(inputJSON2);
parseArray(inputJSON3);
console.log(JSON.parse(inputJSON2))