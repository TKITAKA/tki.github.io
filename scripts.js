var myWindowFade = document.getElementById('start-window-fade'),
    myWindow = document.getElementById('window'),
    videoOverlay = document.getElementById('video-overlay'),
    noteOverlay = document.getElementById('note-overlay'),
    computerOverlay = document.getElementById('overlay-computer'),
    imageOverlay = document.getElementById('image-overlay'),
    aboutOverlay = document.getElementById('about-overlay'),
    trashWindow = document.getElementById('trash-window');

function resizeWindows() {
    myWindowFade.style.width = window.innerWidth + "px";
    myWindowFade.style.height = window.innerHeight + "px";
    myWindow.style.width = window.innerWidth + "px";
    myWindow.style.height = window.innerHeight + "px";
}

resizeWindows(); // 초기 설정
window.onresize = resizeWindows; // 창 크기 변경 시 설정

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString();
}

function showTimer() {
    'use strict';
    var myDiv = document.getElementById("history"),
        date = new Date(),
        year = date.getUTCFullYear(),
        month = date.getUTCMonth() + 1, // 월은 0부터 시작하므로 +1
        day = date.getUTCDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    myDiv.textContent = year + '/' + month + '/' + day;
}

showTimer(); // 초기 설정

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];
document.getElementById("number-day").innerHTML = d.getUTCDate();

document.getElementById('strat-win').onclick = function () {
    'use strict';
    if (document.getElementById('start-window-fade').style.opacity <= .1) {
        fadeInByMe(document.getElementById('start-window-fade'));
        fadeInByMe(document.getElementById('start-window'));
    } else if (document.getElementById('start-window-fade').style.opacity >= 1) {
        fadeOutByMe(document.getElementById('start-window-fade'));
        fadeOutByMe(document.getElementById('start-window'));
    }
};

document.getElementById('start-window-fade').onclick = function () {
    'use strict';
    fadeOutByMe(document.getElementById('start-window-fade'));
    fadeOutByMe(document.getElementById('start-window'));
};

document.getElementById('close-all').onclick = function () {
    if (document.getElementById('start-window-fade').style.opacity >= 1) {
        fadeOutByMe(document.getElementById('start-window-fade'));
        fadeOutByMe(document.getElementById('start-window'));
    }
    if (computerOverlay.style.transform == "scale(1)") {
        computerOverlay.style.transform = "scale(0)";
        document.getElementById('a1').style.borderBottom = '2px solid #76b9ed';
    }
    if (imageOverlay.style.transform == "scale(1)") {
        imageOverlay.style.transform = "scale(0)";
        document.getElementById('a2').style.borderBottom = '2px solid #76b9ed';
    }
    if (videoOverlay.style.transform == "scale(1)") {
        videoOverlay.style.transform = "scale(0)";
        document.getElementById('a3').style.borderBottom = '2px solid #76b9ed';
    }
    if (noteOverlay.style.transform == "scale(1)") {
        noteOverlay.style.transform = "scale(0)";
        document.getElementById('a4').style.borderBottom = '2px solid #76b9ed';
    }
    if (aboutOverlay.style.transform == "scale(1)") {
        aboutOverlay.style.transform = "scale(0)";
        document.getElementById('a5').style.borderBottom = '2px solid #76b9ed';
    }
    if (trashWindow.style.transform == "scale(1)") {
        trashWindow.style.transform = "scale(0)";
    }
};

function fadeOutByMe(element) {
    'use strict';
    var opacity = 1,
        timer = setInterval(function () {
            if (element) {
                if (opacity <= .1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    document.getElementById('container-start').classList.remove('activecontainer');
                }
                element.style.opacity = opacity;
                opacity -= 0.1;
            } else {
                clearInterval(timer);
                console.error('Element not found in fadeOutByMe');
            }
        }, 50);
}

function fadeInByMe(element) {
    'use strict';
    var opacity = 0.1,
        timer = setInterval(function () {
            if (element) {
                if (opacity >= 1) {
                    clearInterval(timer);
                }
                if (opacity >= .5) {
                    document.getElementById('container-start').classList.add('activecontainer');
                }
                element.style.opacity = opacity;
                opacity += 0.1;
            } else {
                clearInterval(timer);
                console.error('Element not found in fadeInByMe');
            }
        }, 50);
    element.style.display = 'block';
}

function toggleOverlay(dataId) {
    // 모든 오버레이 요소를 선택
    var overlays = document.querySelectorAll('.overlay-computer');

    // 모든 오버레이를 숨김
    overlays.forEach(overlay => {
        overlay.style.transform = "scale(0)";
    });

    // 선택된 오버레이만 열기
    var selectedOverlay = document.querySelector('.overlay-computer[data-id="' + dataId + '"]');
    if (selectedOverlay) {
        selectedOverlay.style.transform = "scale(1)";
    }
}

function opencom() {
    if (computerOverlay) {
        computerOverlay.style.transform = "scale(1)";
        const a1Element = document.getElementById('a1');
        if (a1Element) {
            a1Element.style.display = "block";
        } else {
            console.error('Element #a1 not found');
        }
    } else {
        console.error('Element #overlay-computer not found');
    }
}

function closecom(dataId) {
    var overlayToClose = document.querySelector('.overlay-computer[data-id="' + dataId + '"]');
    if (overlayToClose) {
        overlayToClose.style.transform = "scale(0)";
    } else {
        console.error('Overlay with data-id ' + dataId + ' not found');
    }
}

const a1Element = document.getElementById('a1');
if (a1Element) {
    a1Element.style.display = "none";
} else {
    console.error('Element #a1 not found');
}

function closeopencom() {
    computerOverlay.style.transform = "scale(0)";
    document.getElementById('a1').style.display = "block";
    document.getElementById('a1').style.borderBottom = '2px solid #76b9ed';
}

document.getElementById('a1').onclick = function () {
    if (computerOverlay.style.transform == "scale(1)") {
        computerOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
    } else {
        computerOverlay.style.transform = "scale(1)";
        this.style.border = 'none';
    }
};

function openimg() {
    imageOverlay.style.transform = "scale(1)";
    document.getElementById('a2').style.display = "block";
}

function closeimg() {
    imageOverlay.style.transform = "scale(0)";
    document.getElementById('a2').style.display = "none";
}

document.getElementById('a2').onclick = function () {
    if (imageOverlay.style.transform == "scale(1)") {
        imageOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
    } else {
        imageOverlay.style.transform = "scale(1)";
        this.style.border = 'none';
    }
};

function openvid() {
    videoOverlay.style.transform = "scale(1)";
    document.getElementById('a3').style.display = "block";
}

function closevid() {
    videoOverlay.style.transform = "scale(0)";
    document.getElementById('a3').style.display = "none";
}

document.getElementById('a3').onclick = function () {
    if (videoOverlay.style.transform == "scale(1)") {
        videoOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
    } else {
        videoOverlay.style.transform = "scale(1)";
        this.style.border = 'none';
    }
};

function opennote() {
    noteOverlay.style.transform = "scale(1)";
    document.getElementById('a4').style.display = "block";
}

function closenote() {
    noteOverlay.style.transform = "scale(0)";
    document.getElementById('a4').style.display = "none";
}

document.getElementById('a4').onclick = function () {
    if (noteOverlay.style.transform == "scale(1)") {
        noteOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
    } else {
        noteOverlay.style.transform = "scale(1)";
        this.style.border = 'none';
    }
};

function openabout() {
    aboutOverlay.style.transform = "scale(1)";
    document.getElementById('a5').style.display = "block";
}

function closeabout() {
    aboutOverlay.style.transform = "scale(0)";
    document.getElementById('a5').style.display = "none";
}

document.getElementById('a5').onclick = function () {
    if (aboutOverlay.style.transform == "scale(1)") {
        aboutOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
    } else {
        aboutOverlay.style.transform = "scale(1)";
        this.style.border = 'none';
    }
};

var isDown = false;
var offset = [0, 0];
var mousePosition;
var div = document.getElementById('overlay-computer');
var mouseclick = document.getElementById('first-row-win');

mouseclick.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

var resizer = document.getElementsByClassName('resizer')[0];
resizer.addEventListener('mousedown', initDrag, false);
div.onresize = function () {
    resizer.style.bottom = 0;
    resizer.style.right = 0;
};

var startX, startY, startWidth, startHeight;

function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(div).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(div).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    div.style.width = (startWidth + e.clientX - startX) + 'px';
    div.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

div.onscroll = function () {
    resizer.style.bottom = (0 - div.scrollTop) + "px";
    resizer.style.right = 0;
};

function uperCom(dataId) {
    var overlay = document.querySelector('.overlay-computer[data-id="' + dataId + '"]');
    var upercam = document.getElementById('upercam' + dataId);
    var returncam = document.getElementById('returncam' + dataId);
    if (overlay && returncam && upercam) {
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.top = "0";
        overlay.style.left = "0";
        upercam.style.display = 'none';
        returncam.style.display = 'inline';
    }
}

function returnCom(dataId) {
    var overlay = document.querySelector('.overlay-computer[data-id="' + dataId + '"]');
    var upercam = document.getElementById('upercam' + dataId);
    var returncam = document.getElementById('returncam' + dataId);
    if (overlay && returncam && upercam) {
        overlay.style.width = "70%";
        overlay.style.height = "60%";
        overlay.style.top = "20%";
        overlay.style.left = "15%";
        upercam.style.display = 'inline';
        returncam.style.display = 'none';
    }
}

function powerOff() {
    fadeOutByMe(myWindow);
}

$(document).ready(function(){
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        console.log('New tab activated!');
    });
});


function openvid() {
    var videoOverlay = document.getElementById('video-overlay');
    if (videoOverlay) {
        videoOverlay.style.transform = "scale(1)";
        document.getElementById('a3').style.display = "block";
    } else {
        console.error('video-overlay element not found');
    }
}

document.querySelectorAll('.image-overlay').forEach(overlay => {
    const imgElement = overlay.querySelector('img'); // 이미지 요소를 찾습니다.
    let scale = 1; // 기본 확대/축소 배율

    overlay.addEventListener('wheel', function(event) {
        event.preventDefault(); // 기본 스크롤 동작 방지
        scale += event.deltaY * -0.01; // 스크롤 방향에 따라 확대 또는 축소
        scale = Math.min(Math.max(.125, scale), 4); // 최소 및 최대 확대/축소 제한
        imgElement.style.transform = `scale(${scale})`; // 이미지에 확대/축소 적용
    });
});

document.querySelector('.second-row-img img').addEventListener('wheel', function(event) {
    event.preventDefault(); // 기본 스크롤 동작 방지
    var scaleIncrement = 0.1;
    var currentScale = parseFloat(this.style.transform.replace(/scale\(([^)]+)\)/, '$1')) || 1; // 현재 scale 값 추출

    if (event.deltaY < 0) { // 스크롤을 위로 올릴 때, 확대
        currentScale += scaleIncrement;
    } else { // 스크롤을 아래로 내릴 때, 축소
        currentScale -= scaleIncrement;
        if (currentScale < 0.1) currentScale = 0.1; // 최소 scale 제한
    }

    this.style.transform = `scale(${currentScale})`; // 새로운 scale 값 적용
});

function openImageOverlay(dataId) {
    var overlay = document.getElementById('image-overlay-' + dataId);
    if (overlay) {
        overlay.style.transform = "scale(1)";
    } else {
        console.error('Image overlay with data-id ' + dataId + ' not found');
    }
}

function closeImageOverlay(dataId) {
    var overlay = document.getElementById('image-overlay-' + dataId);
    if (overlay) {
        overlay.style.transform = "scale(0)";
    } else {
        console.error('Image overlay with data-id ' + dataId + ' not found');
    }
}

// 추가된 코드 부분
function openTrash() {
    var trashOverlay = document.querySelector('.overlay-computer[data-id="3"]');
    if (trashOverlay) {
        trashOverlay.style.transform = "scale(1)";
    } else {
        console.error('Trash overlay not found');
    }
}

function openppt() {
    var trashOverlay = document.querySelector('.overlay-computer[data-id="4"]');
    if (trashOverlay) {
        trashOverlay.style.transform = "scale(1)";
    } else {
        console.error('PPT overlay not found');
    }
}

function teamppt() {
    var trashOverlay = document.querySelector('.overlay-computer[data-id="5"]');
    if (trashOverlay) {
        trashOverlay.style.transform = "scale(1)";
    } else {
        console.error('Team PPT overlay not found');
    }
}

function minippt() {
    var trashOverlay = document.querySelector('.overlay-computer[data-id="6"]');
    if (trashOverlay) {
        trashOverlay.style.transform = "scale(1)";
    } else {
        console.error('Mini PPT overlay not found');
    }
}

function openeresume() {
    var trashOverlay = document.querySelector('.overlay-computer[data-id="7"]');
    if (trashOverlay) {
        trashOverlay.style.transform = "scale(1)";
    } else {
        console.error('Resume overlay not found');
    }
}

function closeWindow(id) {
    // 특정 data-id를 가진 요소를 찾아 스타일을 변경하여 숨김 처리
    var element = document.querySelector('.overlay-computer[data-id="' + id + '"]');
    if (element) {
        element.style.display = 'none';
    }
}


document.querySelectorAll('.image-overlay').forEach(overlay => {
    const imgElement = overlay.querySelector('img'); // 이미지 요소를 찾습니다.
    let isDragging = false;
    let startX, startY, initialX, initialY;
  
  
    // 드래그 시작
    imgElement.addEventListener('mousedown', function(event) {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        initialX = parseInt(window.getComputedStyle(imgElement).left, 10) || 0;
        initialY = parseInt(window.getComputedStyle(imgElement).top, 10) || 0;
        imgElement.style.cursor = 'grabbing';
        event.preventDefault(); // 기본 동작 방지 (예: 텍스트 선택)
    });
  
    // 드래그 중
    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            let currentX = event.clientX;
            let currentY = event.clientY;
            let deltaX = currentX - startX;
            let deltaY = currentY - startY;
  
            imgElement.style.left = (initialX + deltaX) + 'px';
            imgElement.style.top = (initialY + deltaY) + 'px';
        }
    });
  
    // 드래그 종료
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            imgElement.style.cursor = 'grab';
        }
    });
  
    // 초기 상태에서 커서 스타일 설정
    imgElement.style.cursor = 'grab';
  });

  function openhyenjang() {
    window.location.href = 'hyenjang.html';
  }

  function opentikitaka() {
    window.location.href = 'tikitaka.html';
  }
