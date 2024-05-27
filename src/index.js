const body = document.querySelector('body');
//just to check and see if file worked
function content() {
    const hello = document.createElement("div");
    hello.classList.add("title");
    hello.innerHTML = "Hello";

    body.appendChild(hello);
    //just test
    return {
        hello
    }
}
content();

//code for project tabs first priority
    //maybe use a for each loop for every project tab and module

