// Task 1 
const multiplyCallback = (array) => {
    if(array.length > 3) {
        let sum = 1;
        array.forEach((item, key) => {
            key>=2 ? sum*=item : 0;
        });
        return sum;
    }
    return null;
}

const modifyInput = (n) => {
    return [n[0] + n[1], multiplyCallback(n)]
}
 
console.log(modifyInput([3,4,5,6,7]))

//  End Task 1

// Task 2
const user = {
    banks: [{'TBC'},{'BOG'}
        {
            address: {
                city: 'Tbilisi'
            }
        }
    ]
}

const returnCity = (user) => {
    const city;
    for(const i in user) {
        city = user.banks[i].address.city
    }
    return city;
}
// Task 3

const defaultPerson = {
    name : 'Kevin',
    lastName: 'Smith',
    birthplace: 'USA, California',
    address: {
        city:  {
            block : {
                street : "39th street" 
            }
        }
    },

    sport:'Soccer'
}


const deepCopy = (obj) => {
    const result = {}
    for(const i in obj) {
        if(typeof obj[i] === 'object') {
            if(Array.isArray(obj[i])) {
                result[i] = obj[i].map((el) => deepCopy(el))
            }
            else {
                result[i] = deepCopy(obj[i])
            }
        }
        else {
            result[i] = obj[i]
        }
    }
    return result
}

const someone = deepCopy(defaultPerson)
someone.name = 'Gela'
someone.address.city.block.street = 'Dolidze'

console.log(someone)
console.log(defaultPerson)

