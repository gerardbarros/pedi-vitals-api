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
        'pulse': '70-170',
        'respirations':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    },
    'preSchool': {
        'age': '3-5yrs',
        'pulse': '70-170',
        'respirations':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    },
    'schoolAge': {
        'age': '6-12yrs',
        'pulse': '70-170',
        'respirations':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    },
    'adolescent': {
        'age': '13-18yrs',
        'pulse': '70-170',
        'respirations':'30-50',
        'systolic': '50-70',
        'diastolic': '20-40'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:ageGroup', (req, res) => {
    const patientAge = req.params.ageGroup
    if(ageGroup[patientAge]){
        res.json(ageGroup[patientAge])
    } else {
        res.json(ageGroup['age'])
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on Port Number: ${PORT}`)
})