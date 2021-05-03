[ 
  [ { id: 6,
  sourceAccount: 'my_account',
  targetAccount: 'internet_shop',
  amount: -250,
  category: 'other',
  time: '2018-03-01T22:16:40.000Z' },
{ id: 102,
  sourceAccount: 'my_account',
  targetAccount: 'internet_shop',
  amount: -250,
  category: 'other',
  time: '2018-03-01T22:16:50.000Z' } ],
[ { id: 14,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-04-01T10:24:40.000Z' },
{ id: 15,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -50,
  category: 'eating_out',
  time: '2018-04-01T10:25:10.000Z' } ],

[ { id: 33,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:57:05.000Z' },
{ id: 35,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -90,
  category: 'eating_out',
  time: '2018-05-07T09:58:06.000Z' } ] ]

  [ 
    [ { id: 6,
    sourceAccount: 'my_account',
    targetAccount: 'internet_shop',
    amount: -250,
    category: 'other',
    time: '2018-03-01T22:16:40.000Z' },
  { id: 102,
    sourceAccount: 'my_account',
    targetAccount: 'internet_shop',
    amount: -250,
    category: 'other',
    time: '2018-03-01T22:16:50.000Z' } ],
[ { id: 13,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:24:00.000Z' },
  { id: 14,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:24:40.000Z' },
  { id: 15,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -50,
    category: 'eating_out',
    time: '2018-04-01T10:25:10.000Z' } ],
[ { id: 30,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:54:21.000Z' },
  { id: 31,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:55:10.000Z' },
  { id: 32,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:56:09.000Z' },
  { id: 33,
    sourceAccount: 'my_account',
    targetAccount: 'coffee_shop',
    amount: -90,
    category: 'eating_out',
    time: '2018-05-07T09:57:05.000Z' } ] ]


  function findDuplicateTransactions (transactions = []) {
      // return your result from this function
    let mapper = {} 
    
    transactions = transactions.sort((a,b) => new Date(a.time) - new Date(b.time));
    
    transactions.reduce((acc,val) => {
      const {sourceAccount, targetAccount, category, amount} = val
      let identifier = sourceAccount + targetAccount + category + amount;
      if(acc[identifier]) {
        
        let prevTransaction = acc[identifier];
        
        let diff = Math.abs(new Date(val.time).getTime() - new Date(prevTransaction.time).getTime());
        let diffMins = Math.floor(diff/60000);
        
        if(diffMins >= 0 && diffMins < 1)
          {
            if(mapper[identifier])
              {
                mapper[identifier].push(val)
              }
              else {
                mapper[identifier] = [prevTransaction, val];  
              }
                
          }
          
        acc[identifier] = val
      }
      
      acc[identifier] = val;
     
      return acc;
      
    },{});
    
    mapper = Object.values(mapper);
    
    
   mapper = mapper.sort((a,b) => {
      return new Date(a[0].time) - new Date(b[0].time)
    })
    
    return mapper;
  }


  function getBalanceByCategoryInPeriod (transactions = [], category, start, end) {
    // add your code here
    const startTime = start.getTime();
    const endTime = end.getTime();
    
    transactions = transactions.filter((transaction) => {
      let transactiontime = new Date(transaction.time).getTime();
      return transaction.category === category && transactiontime >= startTime && transactiontime < endTime
     });
    
    return transactions.reduce((acc,val) => {
      return acc + val.amount
    },0);
  }