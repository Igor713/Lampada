let buttonLight = document.getElementById("button-light");

buttonLight.addEventListener("click", () => {

    buttonLight.classList.toggle("active");
    let image = document.getElementById("light");
    image.classList.toggle("active-light");
    let wrapper = document.getElementById("button-light").parentElement;
    wrapper.classList.toggle("active-button");

    if (buttonLight.innerHTML === "ON") {
        buttonLight.innerHTML = "OFF"
    } else {
        buttonLight.innerHTML = "ON"
    }
});


