let middlecontent = document.getElementsByClassName('middle-content')
let btn =document.getElementsByClassName('btn')


btn[0].addEventListener('click',()=>{

    btn[0].classList.toggle('fa-xmark')

    middlecontent[0].classList.toggle('show')
    console.log(middlecontent[0]);
})