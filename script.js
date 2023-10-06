console.log('hi')
let main_content=document.getElementsByClassName('content-container')

for(let i=0;i<main_content.length;i++){
    main_content[i].addEventListener('click',function(){
        this.classList.toggle('active')
        
    })
}