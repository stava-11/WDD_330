
for (item of links){
    let lbl = document.createElement('Li');
    lbl.innerHTML = '<a href="' + item.url + '">' + item.label + '</a>';
    document.querySelector('#mainOL').appendChild(lbl);
}