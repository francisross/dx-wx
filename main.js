const btn = document.getElementById("btn")
const message = document.getElementById("message")


const answer = [
    "Hi",
    "iloveu",
    "Kiss ka saken😘",
    "Kakatikol molang yan par -BinsPotsu",
    "😀",
    "lcpckmx",
    "MZXJHID",
    "mcxoikcjxkc",
    "mwuahh",
    "ETIT",
    "Happy New Year",
    "si idol laos na oh ",
    "Sorry panget pagkaka design.",
    "skrrttt!",
    "Keep Safe -sabi ni tropa",
    "MASARAP DAW BUMATAK EBAS NI BRYAN",
    "Bryan sumalaksak suminghot pa sa ere.",
    "Dubidubidapdap speedreverb!!!!",
    "Pepito manaloto bg music🔥",
];

const newMessage = ()=> {
    return Math.floor(Math.random() * answer.length)
}

//event listener
btn.addEventListener("click", ()=> {
    const count = newMessage()
   message.textContent = answer[count];
});
