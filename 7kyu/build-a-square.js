// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

//My solution

const generateShape = integer =>
    ('+'.repeat(integer) + '\n').repeat(integer).trim()