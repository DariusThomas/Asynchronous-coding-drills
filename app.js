$(document).ready(function () {
    let lunchtime = false

    //printStr('Hello World!');

    //getWords('hi', 'hello', 'hey', 'welcome')

    //countdown(3,done)
    
    orderMeSomeFood().then((orderObj) => {
        console.log(orderObj)
    }).catch((err) => {
        console.log(err)
    })

function orderMeSomeFood(){ 
    return new Promise((resolve, reject) => {
        if (lunchtime) {
            let order = {
                lunch: 'Pizza',
                drink: 'Coke'
            }
            resolve(order)
        } else {
            let err = new Error('Sorry,Bud. It\'s not lunchtime')
            reject(err)
        }
    })
}

    function printStr(message) {
        setTimeout(() => {
            console.log(message)
        }, 2000);
    }

    function getWords(msg1, msg2, msg3, msg4) {
        console.log(msg1)

        setTimeout(() => {

            console.log(msg2)

            setTimeout(() => {

                console.log(msg3)

                setTimeout(() => {

                    console.log(msg4)
                }, 1000
                )
            }, 2000
            )

        }, 3000
        )

    }

    function done() {
        console.log('Jobs done!')
    }

    function countdown(num, callback) {
        console.log(num)
        setTimeout(() => {

            if (num > 1) {
                countdown((num - 1), callback)

            } else {
                callback()
            }
        }, 1000)

    }
})