
for (item of links){
    let lbl = document.createElement('LI');
    lbl.innerHTML = '<a href="/WDD_330/' + item.url + '">' + item.label + '</a>';
    document.querySelector('#mainOL').appendChild(lbl);
}