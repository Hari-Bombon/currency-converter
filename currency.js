const currencyFirstEl = document.getElementById
("currency-first");

const worthFirstEl = document.getElementById
("worth-first")

const currencySecondEl = document.getElementById
("currency-second");

const worthSecondEl = document.getElementById
("worth-second")

const exchangeRateEl = document.getElementById
("exchange-rate")

updateRate()
function updateRate(){
    fetch(' https://app.exchangerate-api.com/activate/8fd87e6434c8260cc1fe07c3aa/latest/${currencyFirstEl.value}').then
    .then((res)=>res.json())
    .then((data)=> {
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText =`1 $
        {currencyFirstEl.value}="1 ${rate+ " " +
       currencySecondEl.value}`;
});
    worthSecondEl.value = (worthFirstEl.value*rate).toFixed
    (2)



currencyFirstEl.addEventListener("change",updateRate)
currencySecondEl.addEventListener("change",updateRate)

worthFirstEl.addEventListener("input",updateRate)}