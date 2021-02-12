const container = document.querySelector(".container");

const url = "http://api.open-notify.org/astros.json";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;

async function makeCall() {
    try {
        const response = await fetch(corsUrl);
        const json = await response.json();
        console.log(json);
        console.log(json.people);

        container.innerHTML = "";

        const people = json.people;

        for (let i = 0; i < people.length; i++) {
            console.log(people[i].craft);
            console.log(people[i].name);

            container.innerHTML += `<div class="card">
                                <h3>${people[i].name}</h3>
                                <p>is currently on the ${people[i].craft}.</p>
                                </div>`;
        }
    } catch (error) {
        console.log(error);
        container.innerHTML = `<div class="error">An error occurred while fetching some infromation...</div>`;
    }
}

makeCall();