// let firstName = "Maleeha"
// let lastName = "Binyamin"
// console.log(firstName.concat(' ').concat(lastName));


// const num = 10;
// num=  num+2;
// console.log(num);



// let bee="makhi"
// if (key=="chaabi") {
//     console.log("the meaning of key is chaabi");
// }
// if (mouse=="choha") {
//     console.log("the meaning of mouse is choha")
// }
// if (dog=="kutta") {
//     console.log("the meaning of dog is kutta");
// }
// if (cat=="billi") {
//     console.log("the meaning of cat is billi");
// }
// if (bee=="makhi") {
//     console.log("the meaning of bee is makhi");
// // }
// function wordMeanings(chaabi,choha,kutta,billi) {
//     
// }
// wordMeanings(key,mouse,dog,cat)

    // const dictionary = {
    //     key="ga"
    //     mouse="ta"
    //     dog="da"
    //     cat="fa"
    //     };
    //     function getmeaning(word) {
    //         word=word 
    //         if (dictionary[word]) {
    //             console.log(`${word}:${dictionary[word]}`);
    //         }
    const dictionary = {
        "abundant": "existing or available in large quantities; plentiful.",
        "benevolent": "well-meaning and kindly.",
        "candid": "truthful and straightforward; frank.",
        "diligent": "having or showing care and conscientiousness in one's work or duties.",
        "eloquent": "fluent or persuasive in speaking or writing."
    };
    
    // Function to get the meaning of a word
    function getMeaning(word) {
        word = word.toLowerCase(); // Convert to lowercase to handle case sensitivity
        if (dictionary[eloquent]) {
            console.log(`${word}: ${dictionary[word]}`);
        } else {
            console.log(`The word "${word}" is not in the dictionary.`);
        }
    }
