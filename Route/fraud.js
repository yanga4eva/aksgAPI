const router = require('express').Router()
const brain = require('brain.js')


router.get('/', (req, res) => {
    const chatData = req.query.chat
    const net = new brain.recurrent.LSTM

    const fraudData = [
        {
            'text': 'I am having difficulty cashing a check here',
            'category': 'fraud'
        },
        {
            'text': 'I am a military man stationed in',
            'category': 'fraud'
        },
        {
            'text': 'could you help me cash some money',
            'category': 'fraud'
        },
        {
            'text': 'money',
            'category': 'fraud'
        },
        {
            'text': 'check',
            'category': 'fraud'
        },
        {
                'text': 'I am having difficulty cashing a check here',
                'category': 'fraud'
            },
            {
                'text': 'get retruns on your investments',
                'category': 'fraud'
            },
            {
                'text': 'investments overseas',
                'category': 'fraud'
            },
            {
                'text': 'investments',
                'category': 'fraud'
            },
            {
                'text': 'funds tied up',
                'category': 'fraud'
            },
            {
                'text': 'Business tied',
                'category': 'fraud'
            },
            {
                'text': 'Hello there',
                'category': 'legit'
            },
            {
                'text': 'Help i am falling for you',
                'category': 'legit'
            }
    ]
    

const trainingData = fraudData.map(item => ({
    input: item.text,
    output: item.category
}))
net.train(trainingData, {
    iterations: 700,
    log: stats => {
        // console.log(stats)
    }
})

const output = net.run(chatData)

res.send(chatData + ' ' + output)
})




module.exports = router;