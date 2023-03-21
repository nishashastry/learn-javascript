function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

//querySelectorAll(selectors) selects all the elements that are of type "selector"
//in this example, it selected all the button elements
//to selected all elements of multiple specific types, seperate with comma
// Ex. document.querySelectorAll("div.note, div.alert");
// You can also select elements within a specified parent element with the help fo variables
// Ex. list of <p> elements whose immediate parent element is a <div> with the class 
//        highlighted and which are located inside a container whose ID is test
//
//     const container = document.querySelector("#test");
//     const matches = container.querySelectorAll("div.highlighted > p");

const buttons = document.querySelectorAll("button"); 


//for each loop assigned handler 
for(const button of buttons){
    button.addEventListener("click", createParagraph);
}