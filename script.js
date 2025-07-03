 function showBalance(balance) {
    let output = balance || "Invalid Balance";
    console.log('balance:', output);
    
 }

 const userBalance = (balance) => {
     let output = balance || "Invalid Balance";
    console.log('balance:', output);
    
 }
 
 showBalance(50);
  userBalance(50);
  
 showBalance(0);
  userBalance(0);

  
 showBalance(100);
  userBalance(100);
  
function showBalance1(balance) {
    let output = balance ?? "Invalid Balance";
    console.log('balance:', output);
    
 }

 const userBalance1 = (balance) => {
     let output = balance ?? "Invalid Balance";
    console.log('balance:', output);
    
 }
  showBalance1(50);
  userBalance1(50);
  
 showBalance1(0);
  userBalance1(0);

  
 showBalance1(100);
  userBalance1(100);
 

