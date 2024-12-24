// ARRAY
type NameList = string[]
const names: NameList = []
names.push('Emanuel')

// TUPLA
type CalendarDate = [day: number, month: number, year: number]

const date1: CalendarDate = [24, 12, 2024]

function createDate(date: CalendarDate){
    let [day, month, year] = date;
}