function fib(number){
    let f = [BigInt(0), BigInt(1)]
    for(i = 2; i <= number;i++){
        f.push(BigInt(0)) 
    }
    for(i = 2; i <= number;i++){
        f[i] = BigInt(f[i-1]) + BigInt(f[i-2])
    }
    return f[number]
}