
for (item of links){
    let lbl = document.createElement('LI');
    lbl.innerHTML = '<a href="/' + item.url + '">' + item.label + '</a>';
    document.querySelector('#mainOL').appendChild(lbl);
}