// Botão de converter
const convertButton = document.querySelector(".convert-button")

// Select de cima (moeda de origem)
const currencySelectFrom = document.querySelector(".currency-select-from")

// Select de baixo (moeda de destino)
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    // Valor digitado no input
    const inputCurrencyValue = document.querySelector(".input-currency").value

    // Onde aparece o valor original
    const currencyValueToConvert = document.querySelector(".currecy-value-to-convert")

    // Onde aparece o valor convertido
    const currencyValueConverted = document.querySelector(".currecy-value")

    // Cotações fixas (baseadas no real)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 500000

    // Variável que vai guardar o valor convertido para REAL
    let valueInReal = 0

    // ===== CONVERSÃO DA MOEDA DE ORIGEM PARA REAL =====

    // Se a moeda de origem já for real, não precisa converter
    if (currencySelectFrom.value == "real") {
        valueInReal = inputCurrencyValue
    }

    // Se for dólar, multiplica pela cotação
    if (currencySelectFrom.value == "dolar") {
        valueInReal = inputCurrencyValue * dolarToday
    }

    // Se for euro
    if (currencySelectFrom.value == "euro") {
        valueInReal = inputCurrencyValue * euroToday
    }

    // Se for libra
    if (currencySelectFrom.value == "libra") {
        valueInReal = inputCurrencyValue * libraToday
    }

    // Se for bitcoin
    if (currencySelectFrom.value == "bitcoin") {
        valueInReal = inputCurrencyValue * bitcoinToday
    }

    // ===== CONVERSÃO DO REAL PARA A MOEDA DE DESTINO =====

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML =
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(valueInReal / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML =
            new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(valueInReal / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML =
            new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(valueInReal / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML =
            (valueInReal / bitcoinToday).toFixed(8) + " BTC"
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML =
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(valueInReal)
    }

    // Mostra o valor digitado (moeda de origem)
    currencyValueToConvert.innerHTML =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
}

// Atualiza nome e imagem da moeda de ORIGEM
function changeCurrencyFrom() {
    const nome = document.getElementById("currency")
    const currencyFrom = document.querySelector(".currency-from")

    if (currencySelectFrom.value == "dolar") {
        nome.innerHTML = "Dólar Americano"
        currencyFrom.src = "./assets/dollar.png"
    }

    if (currencySelectFrom.value == "euro") {
        nome.innerHTML = "Euro"
        currencyFrom.src = "./assets/euro.png"
    }

    if (currencySelectFrom.value == "libra") {
        nome.innerHTML = "Libra"
        currencyFrom.src = "./assets/libra.png"
    }

    if (currencySelectFrom.value == "bitcoin") {
        nome.innerHTML = "Bitcoin"
        currencyFrom.src = "./assets/bitcoin.png"
    }

    if (currencySelectFrom.value == "real") {
        nome.innerHTML = "Real Brasileiro"
        currencyFrom.src = "./assets/real.png"
    }

    // Sempre recalcula quando muda a moeda
    convertValues()
}

// Atualiza nome e imagem da moeda de DESTINO
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/real.png"
    }

    // Recalcula sempre que trocar a moeda
    convertValues()
}

// Eventos
currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
