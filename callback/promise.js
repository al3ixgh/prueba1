const getDataCallBackDouble = (num, callback)=>{
    setTimeout(()=>{
        if(typeof num === 'string'){
            callback('la funcion necesita un numero', undefined)
        } else{
            callback(null, num*2)
        }
    }, 2000)
}

const getDataPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //reject('no se puede acceder al recurso')
        resolve('Esta soleado en reus')
    }, 3000)
})

getDataCallBackDouble(2,callback)

const getDataPromiseDouble=(num)=>{
    return new Promise((resolve,reject)=>{})
}

getDataPromiseDouble(2).


const getDataPromise = new Promise(( )).then((data)=>{}).catch((err)=>{})