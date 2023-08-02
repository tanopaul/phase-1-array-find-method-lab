// code your solution here

const record = [
    {year: '2014', result: 'N/A'},
    {year: '2013', result: 'L'},
    {year: '2015', result: 'W'}
]

function superbowlWin(arr) {
   
    let foundItem = arr.find(word => {
        if (word.result === 'W') {
            return word;
        } else {
            return undefined;
        }
    })

    

    if (typeof foundItem === 'object') {
        let answer = foundItem.year;
        console.log(answer)
        return answer;
    } 
    console.log(typeof foundItem)
    return undefined;
    
    
    
}



superbowlWin(record)


