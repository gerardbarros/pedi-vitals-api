const express = require('express')
const app = express()
const PORT = 8000

const ageGroup = {
    'neonate': {
        'age': '0-1mo',
        'pulse': '70-170',
        'respirations':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    },
    'infant': {
        'age': '1-12mo',
        'pulse': '80-160',
        'respirations':'26-40',
        'systolic': '60-90',
        'diastolic': '20-60'
    },
    'toddler': {
        'age': '1-2yrs',
        'pulse': '80-130',
        'respirations':'20-30',
        'systolic': '75-100',
        'diastolic': '50-70'
    },
    'preschool': {
        'age': '3-5yrs',
        'pulse': '80-110',
        'respirations':'20-30',
        'systolic': '80-110',
        'diastolic': '50-80'
    },
    'schoolage': {
        'age': '6-12yrs',
        'pulse': '75-100',
        'respirations':'20-24',
        'systolic': '82-120',
        'diastolic': '50-80'
    },
    'adolescent': {
        'age': '13-18yrs',
        'pulse': '60-90',
        'respirations':'16-20',
        'systolic': '85-130',
        'diastolic': '55-80'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:ageGroup', (req, res) => {
    const patientAge = req.params.ageGroup.toLowerCase()
    if(ageGroup[patientAge]){
        res.json(ageGroup[patientAge])
    } else {
        res.json(ageGroup['age'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on Port Number: ${PORT}`)
})