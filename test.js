const a = [{uuid: '62fc6da9-ad37-451f-a49e-f827eb63b12d', token1: 'btc', token2: 'usdt', binace: '31668.17027588', ftx: 31647},
{uuid: 'd928c334-323b-42a9-aa09-7318d59b6121', token1: 'btc', token2: 'usdt', binace: '31667.40733959', ftx: 31643}]
console.log(a)

const fTest = a.map((item, index)=>{
        return (
            {uuid: item.uuid,
            token1: item.token1, 
            token2: item.token2,
            binace: 10,
            ftx: 5
            }
            // console.log(item.token1)
            );
    
}
)
console.log(fTest)
// console.log(fTest)