function getButtonfunction () {
    const buttonClass = document.getElementById("buttonClass");

    buttonClass.addEventListener("click",(event)=>{

        // develop the appending to html (develop the buttonClass) HERE! ! !

        event.preventDefault()
        console.log("Button Clicked !!!")

        let body = document.getElementById("body");
        body.appendChild(`<p id="hello">hello</p>`)




    })
    console.log(buttonClass.value);

};
getButtonfunction()

