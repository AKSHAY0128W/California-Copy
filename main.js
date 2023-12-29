function togglenavbar(){
    let navbar = document.getElementById('mynavbar');
    if(navbar.className === 'navbar'){
        navbar.className += ' responsive';
    }
    else{
        navbar.className = 'navbar';
    }

}

