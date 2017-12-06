let input = '10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6'

let array = input.split('\t').map(Number)
let seen = {}

let count = 0

while (!seen[array]) {
    seen[array] = count++

    let blocks = Math.max(...array)
    let index = array.indexOf(blocks)

    array[index] = 0;

    for (let i = blocks; i > 0; i--) {
        array[++index % array.length]++
    }
}

console.log(count, count - seen[array])