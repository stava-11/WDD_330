// document.getElementById('logoCategories').addEventListener('onchange', function(event){
//     const radius = document.getElementById('radius').value;
//     myQuakesController.getQuakesByRadius(radius);
// });

// function loadImg(event, imageId) {
//     let imagePreview = document.getElementById(imageId);
//     imagePreview.src = URL.createObjectURL(event.target.files[0]);
// };

function loadImg(event, imageId) {
    let imagePreview = document.getElementById(imageId);
    imagePreview.src = './images/' + event + '.jpg';
};

function loadImgAltTag(input, imageId) {
    let imagePreview = document.getElementById(imageId);
    imagePreview.src = './images/' + event + '.jpg';
};

function changeLogo(item) {
    let icon = item;
    document.getElementById('logo').innerHTML = icon;
};

function changeIconColor(item) {
    document.getElementById('logo').style.color = item;
};

function changeAltText(idVal, value) {
    console.log(value);
    document.getElementById(idVal).alt = value;
};

function iconShadow() {
    let checkBox = document.getElementById("iconShadow");
    if (checkBox.checked == true) {
        document.getElementById('logo').style.textShadow = '2px 2px 4px #000000';
    } else {
        document.getElementById('logo').style.textShadow = '';
    }
}

function changeSlantColor(elementOne, elementTwo, elementThree, elementFour) {
    document.getElementById(elementOne).style.background = document.getElementById(elementFour).value;
    document.getElementById(elementTwo).style.background = document.getElementById(elementFour).value;
    document.getElementById(elementThree).style.background = document.getElementById(elementFour).value;
    document.getElementById('slantColor').innerHTML = document.getElementById(elementFour).value;
};

const loadJson = async () => {
    try {
        const res = await fetch('./js/FA_Icons.JSON');
        console.log(res.ok);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

function logoSelector(iconCateg) {
            
    fetch('./js/FA_Icons.JSON')
        .then(response => {
            return response.json();
        })
        .then(fAwesome => {
            let iconArray;
            for (item in fAwesome) {
                if (fAwesome[item][iconCateg]) {
                    iconArray = fAwesome[item][iconCateg];
                    break;
                }
            }
        
            let element = document.getElementById('iconSubcat');
            element.classList.remove('hiddenDiv');
        
            let elementColor = document.getElementById('iconSubcatColor');
        
            let elementShadow = document.getElementById('iconSubcatShadow');
        
            let valRet;
            for (i = 0; i < iconArray.length; i++) {
                valRet += '<option class="fas" value="' + iconArray[i] + '">' + iconArray[i] + '</option >';
            }
            endResult = '<select class="fas" id="IconSubcategory" onchange="changeLogo(this.value)">' + valRet + '</select>';
            document.getElementById('iconSubcatOptions').innerHTML = endResult;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function changeBGColor(elementOne, elementTwo) {
    document.getElementById(elementOne).style.background = document.getElementById(elementTwo).value;
    document.getElementById('bannerColor').innerHTML = document.getElementById(elementTwo).value;
};

function changeBannerBGColor(value) {
    document.getElementById('mainGrid').style.backgroundColor = value;
};

function changeSlantColor(value) {
    document.getElementById('slanted-div-1').style.backgroundColor = value;
    document.getElementById('slanted-div-2').style.backgroundColor = value;
    document.getElementById('slanted-div-3').style.backgroundColor = value;
    document.getElementById('slanted-div-4').style.backgroundColor = value;
};

function mainTitleString(input) {
    let str = input;
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    let res = str.split(" ");
    return res;
}

function titleColorPickBuilder(item) {
    document.getElementById("mainTitleOptions").innerHTML += '<div class="userInput"><label>'
        + item
        + '</label>'
        + '<input type="color" id="titleColorCh_'
        + item
        + '" onchange="changeTitleColor(\'title_'
        + item
        + '\', \'titleColorCh_'
        + item
        + '\')" value = "#0000ff" ></div>';
}

function changeTitleColor(titleCh, colorCh) {
    document.getElementById(titleCh).style.color = document.getElementById(colorCh).value;
}

function titleChanges(item) {
    document.getElementById("title").innerHTML += "<span style='color: black' id='title_" + item + "'> " + item + "</span>";
}

function mainTitleColorPicker(input) {
    let titleArray = mainTitleString(input);
    console.log(titleArray.length);
    if (titleArray.length > 0) {
        document.getElementById("mainTitleOptions").innerHTML = "";
        titleArray.forEach(titleColorPickBuilder);
        document.getElementById("title").innerHTML = "";
        titleArray.forEach(titleChanges);
    }
}

function changeSubtOrSloganColor(idColor, idHTML, idValue) {
    document.getElementById(idColor).style.color = document.getElementById(idValue).value;
    document.getElementById(idHTML).innerHTML = document.getElementById(idValue).value;
}; 

function subtOrSloganChange(idValueIn, idValueOut) {
    document.getElementById(idValueOut).innerHTML = document.getElementById(idValueIn).value;
}; 

function fontSizeChange(idValueOut, idValue) {
    let currentStyle = document.getElementById(idValueOut).style.fontSize;
    let setVal = document.getElementById(idValue).value;
    document.getElementById(idValueOut).style.fontSize = document.getElementById(idValue).value;
}

function changeSloganBGColor(value) {
    document.getElementById('slogan').style.backgroundColor = value;
};

// function submitCopy(value) {
//     optionStorage = window.localStorage;
//     if (value === 'sun') {
//         let title = 'sun';
//         let sun = getValues(title);

//         optionStorage.setItem('sun', JSON.stringify(sun));
//         let sunny = optionStorage.getItem('sun')
//         console.log(JSON.parse(sunny));
//     } else if (value === 'cloud') {
//         let cloud = getValues();
//         console.log(cloud);
//     } else if (value === 'rain') {
//         let rain = getValues();
//         console.log(rain);
//     } else if (value === 'snow') {
//         let snow = getValues();
//         console.log(snow);
//     }
// };

// function getValues(title) {
//     let object = {}
//     object.title = title;
//     object.logo = document.getElementById('logo').innerHTML;
//     object.logoColor = document.getElementById('logo').style.color;
//     object.logoShadow = document.getElementById("logo").style.textShadow;


//     return object;
// };


