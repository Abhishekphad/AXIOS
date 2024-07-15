let url = "https://dog.ceo/api/breeds/image/random";

async function getImage(){
    try {
        let res = await axios.get(url)
        return res.data.message;
    
    } catch (error) {
        console.log(error);
    }
}

let btn= document.querySelector("button");
btn.addEventListener("click",async()=>{
    try {
        let link = await getImage();
        let img = document.querySelector("img");
        img.setAttribute("src",link); 
    } catch (error) {
        console.log(error);
    }
})