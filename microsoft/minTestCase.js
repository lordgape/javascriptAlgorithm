function generateTestCase(N)
{
    return [...Array(N).keys()].map((x,i) => (x%2) ? (x%1)+1 : (x+1) + 1 );
}


console.log(`Generated cases ${generateTestCase(10)}`);