const avança = document.querySelectorAll('.btn-proximo');

avança.forEach(button => {
    button.addEventListener('click', function(){
        const atual =document.querySelector('.ativo');
        const proximoPasso = 'paaso-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})