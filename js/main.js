
const links = [
    {
        label: "Week 1 Notes",
        url: "wk_01/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "wk_02/index.html"
    }
]

for (item of links){
    let lbl = document.createElement('LI');
    lbl.innerHTML = '<a href="' + item.url + '">' + item.label + '</a>';
    document.querySelector('#mainOL').appendChild(lbl);
}