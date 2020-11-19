function generateTestCase(N)
{
    return [...Array(N).keys()].map((x,i) => (x%2) ? (x%1)+1 : (x+1) + 1 );
}

for(let i=1;i<20;i++)
    console.log(`Generated cases ${generateTestCase(i)}`);