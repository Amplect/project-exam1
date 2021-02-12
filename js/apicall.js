const peopleinspace = document.querySelector(".peopleinspace");

const url = "http://api.open-notify.org/astros.json";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;

async function makeCall() {
    try {
        const response = await fetch(corsUrl);
        const json = await response.json();
        console.log(json);
        console.log(json.number);

        peopleinspace.innerHTML = `<div class="peopletext">There are ${json.number} people currently in space.</div>
                                    <a href="details.html"><button class="peopleinspacebutton">read more about them here</button></a>`;

    } catch (error) {
        console.log(error);
        peopleinspace.innerHTML = `<div class="error">An error occurred while fetching some information...</div>`;
    }
}

makeCall();