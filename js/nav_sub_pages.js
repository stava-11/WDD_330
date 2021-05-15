
// ******* for local server *******


// for (item of links){
//     let lbl = document.createElement('li');
//     lbl.innerHTML = '<a href="/' + item.url + '">' + item.label + '</a>';
//     if (item.url_team) {
//         let subMenu = document.createElement('ol');
//         let subMenuItem = document.createElement('li');
//         subMenuItem.innerHTML = '<a href="/' + item.url_team + '">Team Activity</a>';
//         subMenu.appendChild(subMenuItem);
//         lbl.appendChild(subMenu);
//     }
//     if (item.url_practice) {
//         let subMenu = document.createElement('ol');
//         let subMenuItem = document.createElement('li');
//         subMenuItem.innerHTML = '<a href="/' + item.url_practice + '">Practice Activity</a>';
//         subMenu.appendChild(subMenuItem);
//         lbl.appendChild(subMenu);
//     }
//     document.querySelector('#mainOL').appendChild(lbl);
// }

// ******* for github links *******

for (item of links){
    let lbl = document.createElement('Li');
    lbl.innerHTML = '<a href="/WDD_330/' + item.url + '">' + item.label + '</a>';
    if (item.url_team) {
        let subMenu = document.createElement('ol');
        let subMenuItem = document.createElement('Li');
        subMenuItem.innerHTML = '<a href="/WDD_330/' + item.url_team + '">Team Activity</a>';
        subMenu.appendChild(subMenuItem);
        lbl.appendChild(subMenu);
    }
    if (item.url_practice) {
        let subMenu = document.createElement('ol');
        let subMenuItem = document.createElement('Li');
        subMenuItem.innerHTML = '<a href="/WDD_330/' + item.url_practice + '">Practice Activity</a>';
        subMenu.appendChild(subMenuItem);
        lbl.appendChild(subMenu);
    }
    document.querySelector('#mainOL').appendChild(lbl);
}