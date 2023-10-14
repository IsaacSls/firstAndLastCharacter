// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeFirstAndLastCh(str){
    if(str.lenght < 2){
        return 'string too short'
    }

    return str.substring(1, str.lenght -1)
}