const convertButton = document.querySelector('.convert-button');
const selectValueConvered = document.querySelector('.converted-currency-valeu');
const selectCoinValue = document.querySelector('.select-coin-value');   
function convertValues(){
    //selecionna o valor do input
    const inputValue = document.querySelector('.input-value').value;
    
    // valor da moeda
    const dolartoday = 5.17;
    const euroToday = 6.2;
    const realToday = 1;
    
    //selciona o elemento no HTML
    const Value = document.querySelector('.value');
    const ValueConverted = document.querySelector('.value-converted');

    

if(selectCoinValue.value === 'USD'){
    Value.innerHTML = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    }).format(inputValue);
    }
    if(selectCoinValue.value === 'BRL'){
    Value.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
    }
    if(selectCoinValue.value === 'EUR'){
    Value.innerHTML = new Intl.NumberFormat('de-DE', {
        style: "currency",
        currency: "EUR"
    }).format(inputValue);
    }


    
    if(selectValueConvered.value === 'USD'){
    ValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
        style: "currency",
        currency: "USD"
    }).format(inputValue / dolartoday);
    }
    if(selectValueConvered.value === 'EUR'){
    ValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroToday);
    }
    if(selectValueConvered.value === 'BRL'){
    ValueConverted.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: "currency",
        currency: "BRL"
    }).format(inputValue / realToday);
    }
    

}
convertButton.addEventListener('click', convertValues);