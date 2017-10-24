// import Tuple2 from 'fantasy-tuples'
// console.log(Tuple2(1, 2)._1)

import $ from 'sanctuary-def'
const env = $.env.concat([$.Unknown])
const def = $.create({ checkTypes: true, env: env })

const add = def('add', {}, [$.Number, $.Number, $.Number], (x, y) => x + y)

console.log(add(1, '2'))
