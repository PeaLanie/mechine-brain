window.addEventListener('load', () => {
    const random_number1 = document.querySelector("#beginner1");
    const random_number2 = document.querySelector("#beginner2");
    const random_number3 = document.querySelector("#beginner3");
    const random_number4 = document.querySelector("#beginner4");
    const random_number5 = document.querySelector("#beginner5");
    const submit = document.querySelector("#submit");
    const reload = document.querySelector("#reload");
    

    random_number1.innerHTML = Math.floor(Math.random() * 9) + 1;
    random_number2.innerHTML = Math.floor(Math.random() * 9) + 1;
    random_number3.innerHTML = Math.floor(Math.random() * 9) + 1;
    random_number4.innerHTML = Math.floor(Math.random() * 9) + 1;
    random_number5.innerHTML = Math.floor(Math.random() * 9) + 1;
    

    submit.addEventListener("click", () => {
        const users_answer = document.querySelector("#usersAnswer");
        const results_container = document.querySelector("label")
        const result = document.createElement("span")
        
        const sum = parseInt(random_number1.textContent) + parseInt(random_number2.textContent) + parseInt(random_number3.textContent) + parseInt(random_number4.textContent) + parseInt(random_number5.textContent);

        console.log(typeof(parseInt(users_answer.value)))

        if (parseInt(users_answer.value) == sum) {
            result.innerHTML = sum + " is the correct answer."
            results_container.appendChild(result)
        } else if (parseInt(users_answer.value) != sum) {
            result.innerHTML = users_answer.value + " is incorrect, " + sum + " is the correct answer."
            results_container.appendChild(result)
        } else {
            result.innerHTML = "Please insert a number!"
            results_container.appendChild(result)
        }
    });
});