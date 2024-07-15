let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    try {
        let colArr = await getCollege(country);
        showArr(colArr);
    } catch (error) {
        console.error("Error fetching colleges:", error);
    }
});

function showArr(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    colArr.forEach(col => {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    });
}

async function getCollege(country) {
    try {
        let response = await axios.get(url + country);
        return response.data;
    } catch (error) {
        console.error("Error fetching colleges:", error);
        throw error;
    }
}
