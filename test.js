

test("Un euro debe ser 1.2 dolares", function(){
    
    const { fromEuroToDollar } = require('./app.js')

    
    const dollars = fromEuroToDollar(1)

    
    const expected = 1.2; 
    
   
     expect(fromEuroToDollar(1)).toBe(1.2); 
})

test("Un dolar debe ser 106.58 yuanes", function(){
    const { fromDollarToYen } = require('./app.js')
    const dollars = fromDollarToYen(1)
    const expected = 106.58; 

     expect(dollars).toBe(expected); 
})

test("1000 yuanes deben ser 6.25 libras", function(){
    const { fromYenToPound } = require('./app.js')
    const yen = fromYenToPound(1000)
    const expected = 6.25; 
    
     expect(yen).toBe(expected); 
})

