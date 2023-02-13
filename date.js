//#1
// const date = new Date()
// function getDateFormat(date,separator = '.'){
//     let y = date.getFullYear()
//     let m = date.getMonth()+1
//     let d = date.getDate()
//     if(m < 10){
//         m = '0' + m
//     }
//     if(d < 10) {
//         d = '0' + d
//     }
//     return d + separator + m + separator + y
// }

// console.log(getDateFormat(date,'-'))

//#2
function getDaysBeforeBirthday(dateBirthday){
    const oneDay = 1000*60*60*24
    const date = new Date()
    const date1 = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    dateBirthday.setFullYear(date.getFullYear())
    const diff = Math.round(dateBirthday/oneDay) - Math.round(date/oneDay)

    if(diff > 0 ) {
        return diff
    }else if(diff < 0) {
        return Math.round(date1/oneDay) - Math.round(date.getTime()/oneDay) + diff
    }else {
        console.log('УУаааау, у вас сегодня Др, поздравляю')
    }

    
}
console.log(getDaysBeforeBirthday(new Date(2023,11,13)))


