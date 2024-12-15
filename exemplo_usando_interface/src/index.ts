interface Options {
    displayDay : boolean,
    displayMonth : boolean,
    displayYear : boolean
}

function showDate(date: Date, options: Options){
    if(options.displayDay){
        console.log(date.getDate())
    }
    if(options.displayMonth){
        console.log(date.getMonth())
    }
    if(options.displayYear){
        console.log(date.getFullYear())
    }
}

showDate(new Date(), { displayDay: true, displayMonth: false, displayYear: true })