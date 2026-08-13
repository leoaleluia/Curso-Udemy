const classe = document.querySelector('#form');

classe.addEventListener('submit', function (e){
    e.preventDefault();
    console.log('Evento previnido'); 

})  