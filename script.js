
async function convert(){
    let fromcurrency=document.getElementById("fromcurrency").value
    fromcurrency=fromcurrency.toUpperCase()
    let tocurrency=document.getElementById("tocurrency").value
    tocurrency=tocurrency.toUpperCase()
    let amount=document.getElementById("amount").value
    let finalresult=document.getElementById("calculateamout")
     const data= await fetch(`https://v6.exchangerate-api.com/v6/12d1d9bfe6b8b9c00a80a053/latest/${fromcurrency}`)
     const result= await data.json()
     const final=result.conversion_rates[tocurrency]
     let total=final*amount
     total=total.toFixed(2)
     finalresult.innerHTML=` Amount : <span class="amountcolor"> ${total} ${tocurrency} <span/>`
     console.log(result)
}

