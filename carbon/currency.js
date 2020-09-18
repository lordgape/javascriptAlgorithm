function currency(serialNumber)
{

    return serialNumber.reduce((accumulator,currentElement) => {

            if(currentElement.length >= 10)
            {
                let individualCharacters = currentElement.split("");

                let threeDistintCharacter = individualCharacters.slice(0,3).join("");

                let validDate = +individualCharacters.slice(3,7).join("");
                
                let lastCharacter = individualCharacters.slice(-1).join("");

                let noteDenomination = individualCharacters.slice(7,individualCharacters.length -1).join("");

                let validDenomination = ["10","20","50","100","200","500","1000"];

                console.log(`three distrinct character ${threeDistintCharacter}, valid date ${validDate}  last character ${lastCharacter} denomination ${noteDenomination}` );

                if(/^[A-Z]*$/.test(threeDistintCharacter) && !(/(.).*\1/.test(threeDistintCharacter)) && validDate >= 1900 && validDate <=2019 && /^[A-Z]*$/.test(lastCharacter) && validDenomination.includes(noteDenomination))
                {
                    accumulator+= +noteDenomination;


                }
                
                
                
            }
            

            return accumulator;
            

            

    },0);
   
}

console.log("testing",currency(["XPK1986100J"]));
