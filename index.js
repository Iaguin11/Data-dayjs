const dayjs = require('dayjs')


function birthaday(date){
    const birthaday = dayjs(date)
    const today = dayjs()
    const ageInYears = today.diff(birthaday, 'year')
    const nextBirthaday = birthaday.add(ageInYears + 1 , 'year')
    const daysToNextBirthday = nextBirthaday.diff(today, 'day') + 1
    const hour = dayjs().hour()
    const minutes = dayjs().minute()
    const seconds = dayjs().second()

    console.log(`Idade : ${ageInYears}`)
    console.log(`Próximo aniversário : ${nextBirthaday.format('DD/MM/YYYY')}`)
    console.log(`Dias até completar ${ageInYears + 1} anos : ${daysToNextBirthday}`)
    console.log(`Hora atual : ${hour}:${minutes}:${seconds}`)

}

birthaday('2001-11-07')