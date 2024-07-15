let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);  
        return res.data.fact;  
    } catch (error) {
        console.log(error.message); 
        return "No fact found";
    }
}

let btn = document.querySelector("button");

btn.addEventListener("click", async function() {
    let fact = await getFacts();  
    let p = document.querySelector("#result");
    p.innerHTML = fact;
})