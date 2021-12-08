let units = 260;
if (units <=50){
    let total = (units * 0.5) + 10;
    document.write("To pay RS" +total);
}
else if (units >50 && units <=150){
    // by default they purchase 50
    let pay1= 50 *0.5;
    let pay2 =(units - 50) *1;
    let total = pay1 +pay2 +10;
    document.write("To pay RS" + total);
}
else if(units >150 && units <250){
    let pay1 =50 *0.5;
    let pay2 =100*1;
    let pay3 =(units - 150 )*1.2;
    let total = pay1 + pay2 +pay3 +10;
    document.write("To pay Rs "+total);
}
else {
    let pay1 =50 *0.5;
    document.write(pay1+"<br/>");
    let pay2 =100*1;
    document.write(pay2+"<br/>");
    let pay3 = 100 *1.2;
    document.write(pay3+"<br/>");
    let pay4 =(units -250) *1.5;
    document.write(pay4+"<br/>");
    let total =pay1 +pay2+pay3+pay4 +10;
    document.write("To pay Rs"+total);
}
