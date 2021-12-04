  //we need nested functions
  function init(){
    let name ="Modcom";
    function displayName(){
        let age = 10;
        document.write("My name is "+name);
        (function(){
            document.write("My age is"+ age);

        }) ();

    }//end inner
    displayName();
    

}//end outer
init();

//above we see that inner function have aceess to outer function local variables
// the outer functions cannot access the inner functions variables