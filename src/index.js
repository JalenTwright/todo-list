const body = document.querySelector('body');

function content() {
    const hello = document.createElement("div");
    hello.classList.add("title");
    hello.innerHTML = "Hello";

    body.appendChild(hello);
    
    return {
        hello
    }
}

content();

