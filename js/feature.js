// ! click on cash out button

document.getElementById('pop')
.addEventListener('click' , function()
{
    // * Remove hidden class from the Cash out div / show cash out UI

    document.getElementById('out').classList.remove('hidden');

    // ? add hidden to add money div 

    document.getElementById('add').classList.add('hidden')
})

// ! click on add money button

document.getElementById('push')
.addEventListener('click' , function(){
    
    //* add hidden to cashout

    document.getElementById('out').classList.add('hidden');

    //! remove hidden

    document.getElementById('add').classList.remove('hidden');
})