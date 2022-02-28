function Menu () {
    const btn = document.querySelector('#btn-menu')
    const menuContent = document.querySelector('#apps-container')

    menuContent.style.display = 'none'
    console.log('Olá muindo')
    btn.onclick = () => {
        if(  menuContent.style.display == 'none' ){
            menuContent.style.display = 'flex' 
        } else {
            menuContent.style.display = 'none' 
        }
    } 
}
export default Menu;