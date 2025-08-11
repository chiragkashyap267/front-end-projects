

let btn = document.querySelector("button");
btn.addEventListener("click", async function getMeaning(){

    console.log("clicked");
    let inp = document.querySelector("input");
    let word = inp.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        let res = await  axios.get(url);
        document.querySelector(".output").innerText = res.data[0].meanings[0].definitions[0].definition;
        console.log(res.data[0].meanings[0].definitions[0].definition);
    }
    catch(e){
        console.log(e);
        return  "We are experiencing high traffic pls wait";
    }
})





