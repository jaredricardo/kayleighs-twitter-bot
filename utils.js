// const loveEmojis = [😍,😘,💞,💖,❤️]
// const sexyEmojis = [💦,😛,😩,🍆,👀]

const e = require('node-emoji')

const UwUs = ['UwU', 'Uwu', 'OwO', '0w0','xD', ':3']



function toCute(s){

    let cuteSentence = []
    let words = s.split(' ')
   
    for(i = 0; i < words.length; i++) {
       	let word = words[i].split('')
        for(j = 0; j < word.length; j++) {
          	if(words[i] === 'lol') {
             	continue
            }
            if(word[j] === 'l') {
                word[j] = 'w'
            }
            if(word[j] === 'L') {
                word[j] = 'W'
            }
            if(word[j] === 'o' && j === word.length - 1) {
                const numTimes = Math.floor(Math.random() * 4) + 1
                word[j] = word[j].repeat(numTimes) 
            }                                                                          //after review I don't like adding "w" to the end of words that end with o
        }
		cuteSentence.push(word.join(''))
    }
    const regex = /th/ig
    return cuteSentence.join(' ').replace(regex, 't')
}


function addUwU(s) {

    const frontOrBack = Math.floor(Math.random() * 5) + 1
    const randomUwU = UwUs[Math.floor(Math.random() * (UwUs.length))]
   
    return frontOrBack <= 2 ? randomUwU + " " + s : s + " " + randomUwU
}

function addHearts(s) {
    const numTimes = Math.floor(Math.random() * 4) + 1
    return s + " " + "❤️".repeat(numTimes)
}

function addEmojis(s) {
    // for photos only? 
}

function addNuzzle(s) {
    const cond = Math.floor(Math.random() * 3) + 1
    const frontOrBack = Math.floor(Math.random() * 2) + 1
    const n = "*nuzzles*"
    if(cond === 1 || cond === 2) return s

    return frontOrBack === 1 ? n + " " + s : s + " " + n

    // const arr = s.split(' ')
    // for(i = 0; i < s.length; i++) {
    //  	for(j = 0; j < UwUs.length; j++) {
    //     	if(arr[i] === UwUs[j]) {
    //            	const index = arr.indexOf(UwUs[j])
    //           	arr.splice(index + 1, 0 ,"*nuzzles*")
    //           	break
    //         } 
    //     } 
    // }
    // return arr.join(' ')             << this implemenation was causing issues if the user added their own UwU or OwO, adding multiple nuzzles 
}

function addHehe(s) {
    const cond = Math.floor(Math.random() * 7) + 1
    const numTimes = Math.floor(Math.random() * 3) + 2 // 2 - 4 "he"s = "hehehehe"
    const hehe = "he".repeat(numTimes)
    if(cond <= 4){
        return s 
    } else {
        const frontOrBack = Math.floor(Math.random() * 2) + 1

        return frontOrBack === 1 ? hehe + " " + s : s + " " + hehe 
    }
}


function final(s) {
    return addHehe(addNuzzle(addUwU(toCute(s))))
}


module.exports = { final }