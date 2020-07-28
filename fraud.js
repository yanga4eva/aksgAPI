const Express = require('express')
const Port = process.env.PORT || 8082
const brain = require('brain.js')

const app = Express()




// const net = new brain.recurrent.LSTM()
const fraudData = ''

// const data1 = [
//     { input: 'I am having difficulty cashing a check here', output: 'fraud' },
//     { input: 'I am a military man stationed in', output: 'fraud' },
//     { input: 'could you help me cash some money', output: 'fraud' }
//   ]

console.log('Starting Training')

// const trainingData = []

// for (let data in fraudData) {
//     const result = fraudData[data]
//     trainingData.push({
//         input: {[result]: 1},
//         output: {[data]: 1}
//     })
// }

const net = new brain.recurrent.LSTM()

const trainingData = fraudData.map(item => ({
    input: item.text,
    output: item.category
}))

// console.log(stats)

net.train(trainingData, {
    iterations: 2000,
    log: stats => {
        console.log(stats)
    }
})

const output = net.run('got money tied up')
// net.train(data, {iterations: 1000, 
// log: stats => {
//     console.log(stats)
// }})
   
//   const output = net.run('difficulty cashing check')
  console.log(output)




// const jsonArray=await csv().fromFile(csvFilePath);




app.listen(Port, () => {
    console.log('Script running')
})