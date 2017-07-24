export function generateRandomCode() {
    const numbers = [1234, 3453, 7652, 1039, 3459, 2345, 4545, 3459, 4756, 2456, 8768, 9999]

    const codes = ['sfex', 'dfgs', 'dgfs', 'wwqw', 'qqww', 'xxxx', 'ortw', 'sh1t', 'p00p', ] 

    return `${random(numbers)}---${random(codes)}---${random(numbers)}-${random(codes)}`
} 

// generateRandomCode()