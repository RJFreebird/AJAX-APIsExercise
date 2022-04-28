// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log("Question 1");
console.log(jokeJS1);

// 1b
p1.innerText = jokeJS1.setup;

// 1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a
axios.get("https://friends-quotes-api.herokuapp.com/quotes/random")

// 2b
    .then(friendsJS2 => {
        console.log(friendsJS2.data.character);
        console.log(friendsJS2.data.quote);
        p1.innerText = friendsJS2.data.character;
        // 2c
        p3.innerText = friendsJS2.data.character;
        p4.innerText = friendsJS2.data.quote;
})

    // 2d
    .catch(rejected => {
        console.log(`Try Again`);
        console.log(rejected);
        alert(`Try Again`);
})

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3a, 3b
async function quoteFunc(){
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

        // 3c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

    } catch (err){
        console.log(err);
    }
}
quoteFunc();



// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc(){
    try {
        const episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        p7.innerText = episodeByNum.data.name;
    
    // 4b
    } catch (err) {
        console.log(err);
    }
}

tvMazeFunc();

// bonus
// 5
const body = document.querySelector("body");
axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
   
    .then(res => {
        const img = document.createElement("img");
        img.src = res.data.sprites.front_default;
        body.append(img);
    })
    .catch(err => {
        console.log(err);
        alert(`That one got away. Better luck next time.`);
    });

    // 6
async function bonusSix() {
    try {
        const moviePoster = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a1d58b01`);
        const poster = document.createElement("img");
        poster.src = moviePoster.data.Poster;
        body.append(poster);
    } catch (err) {
        console.log(err);
    }
    }
bonusSix();