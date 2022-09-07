document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#input-name").value;
    const address = document.querySelector("#input-address").value;
    const city = document.querySelector("#input-city").value;
    const state = document.querySelector("#input-state").value;
    const curriculum = document.querySelector("#text-curriculum").value;
    const NodeListArea = document.querySelectorAll(`input[name="area"]:checked`);
    const office = document.querySelector(`input[name="office"]:checked`).value;


    if (name === "" || address === "" || city === "" || state === "") {
        alert("Dados pessoais devem ser preenchidos!");
        return;
    };

    if (NodeListArea === 0) {
        alert("Deve selecionar ao menos uma área de interesse!");
        return;
    };

    let area = [];

    NodeListArea.forEach((element) => {
        area.push(element.value);
    });

    const data = {
        name,
        address,
        city,
        state,
        office,
        area,
        curriculum
    };

    console.log(data);

});