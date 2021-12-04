// a closure allows inner functions to access outer function variables,
        // but the inner function must use return
        function init(){

            let name = "Shirllie";
            function displayName(){
                document.write("My name is" +name);

            }//end inner
            return displayName;
            
        }//end outer
        // the init returns the inner function
        let myfunction =init();
        myfunction();
        // in closure the outer function,  returns the inner function