const modalOverlay = document.querySelector('.modal_overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click', function(){
        const pageReceitasId = card.getAttribute("id")
        window.location.href = `/pagina-receita?id=${pageReceitasId}`
    })
}
