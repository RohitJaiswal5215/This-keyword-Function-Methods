function multiplyNumbers(n1, n2) {
    const product = function(a, b) {
        return a * b
    }
    
    return product.apply(null, [n1, n2])
}

console.log(multiplyNumbers(5, 4))
