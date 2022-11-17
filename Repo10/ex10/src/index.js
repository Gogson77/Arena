function myFunction() {
    var myMusic = { 
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "DVD",
                3: "EP"
            },
            gold: true
        },
        002: {
        // Add a record here
            artist: "Michael Jackson",
            title: "They Don't Care About Us ",
            release_year: 1990,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;