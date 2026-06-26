let output = document.getElementById("output");


function display(value){
    output.value+= value;

}

function clr(){
    output.value = '';
}

function del(){
    output.value = output.value.slice(0,-1);
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(error){
        output.value = "Error";
    }
}


