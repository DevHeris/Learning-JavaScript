const num = [1, 2, 3, 4, 5];

const doubledNumbers = num.map(number => number * 5);

console.log(doubledNumbers);

// Same result with the forEach() method
const doubledNumbers2 = [];
num.forEach(number =>
    doubledNumbers2.push(number * 5)
);

console.log(doubledNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create a new array that has objects with just the name and the category
const nameAndCtg = companies.map(company => {
    return {//You are saying return an object here
        name: company.name,
        category: company.category,
    };
});

console.log(nameAndCtg);

// Create an array of  objects with the name and the length of each company in years
const companyYears = companies.map(company => {
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    }
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = num
    .map(number => Math.sqrt(number))
    .map(sqrtResult => sqrtResult * 2);

console.log(squareAndDouble);

// You can chain with other methods too. e.g first filter out and get evn numbers array then double those even numbered arrays
const evenAndDoubled = num
    .filter(number => number % 2 === 0)
    .map(evenValues => Math.sqrt(evenValues))

console.log(evenAndDoubled);//[1.4142135623730951, 2]