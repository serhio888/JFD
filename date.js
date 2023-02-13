//#1
const date = new Date()
function getDateFormat(date,separator = '.'){
    let y = date.getFullYear()
    let m = date.getMonth()+1
    let d = date.getDate()
    if(m < 10){
        m = '0' + m
    }
    if(d < 10) {
        d = '0' + d
    }
    return d + separator + m + separator + y
}

console.log(getDateFormat(date,'-'))