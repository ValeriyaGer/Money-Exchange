// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  try{ 
    var err = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    if (currency > 10000) throw err; 
    if (currency <= 0) throw new Error ('0'); 
    var surplus = currency;
    var exchange = {}
         
    if (div( surplus, 50) !== 0) exchange.H = div( surplus, 50);
    surplus = surplus % 50; 
    if (div( surplus, 25) !== 0) exchange.Q = div( surplus, 25);  
    surplus = surplus % 25; 
    if (div( surplus, 10 ) !== 0) exchange.D = div( surplus, 10); 
    surplus = surplus % 10; 
    if (div( surplus, 5 ) !== 0) exchange.N = div( surplus, 5); 
    surplus = surplus % 5; 
    if (div( surplus, 1 ) !== 0) exchange.P =  surplus; 
           
    return exchange; 
      
    } catch (e) {
        if (e.message == '0') return {};
        return err;
      }
     
  function div(a, b) {
    return (a - a % b) / b; 
  };      
  
}
