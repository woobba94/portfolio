import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onload = function () {
  // // flag
  // let greetingFlag = false;
  // let skillFlag = false;
  // // 그려지는 속도 가중치 1.0 = 1배
  // let speed = 1.2;
  // let path = document.querySelector('.CenterLine svg path');
  // let pathLength = path.getTotalLength();
  // // console.log(pathLength);
  // path.style.strokeDasharray = pathLength + ' ' + pathLength;
  // path.style.strokeDashoffset = pathLength;
  // window.addEventListener('scroll', () => {
  //   // 얼마나 스크롤된 상태인지 저장
  //   let scrollPercentage =
  //     (document.documentElement.scrollTop + document.body.scrollTop) /
  //     (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  //   // console.log(scrollPercentage);
  //   // Length to offset the dashes
  //   let drawLength = pathLength * scrollPercentage * speed;
  //   if (!skillFlag && scrollPercentage > 0.31) {
  //     skillFlag = true;
  //     console.log('아이콘 펼치기');
  //     let iconWrap = document.querySelector('.Skills .skills-wrap');
  //     iconWrap.classList.add('unfold-icon');
  //     let skillsAnimationBox = document.querySelector('.Skills').firstChild;
  //     skillsAnimationBox.classList.add('animation-box');
  //     setTimeout(setProgress, 2500);
  //   } else if (!greetingFlag && scrollPercentage > 0.13) {
  //     greetingFlag = true;
  //     console.log('Greeting right 페이드 시작');
  //     document.querySelector('.Greetings .right').classList.add('fade-right');
  //     // let greetingsLinepath = document.querySelector('.GreetingsLine svg path');
  //     // greetingsLinepath.style.display = 'block';
  //     // greetingsLinepath.classList.add('draw');
  //   }
  //   // Draw in reverse
  //   path.style.strokeDashoffset = pathLength - drawLength;
  //   // scroll-down object
  //   const downTarget = document.querySelectorAll('.scroll-down');
  //   for (let i = 0; i < downTarget.length; i++) {
  //     let pos = window.pageYOffset * downTarget[i].dataset.rate;
  //     if (downTarget[i].dataset.direction === 'vertical') {
  //       downTarget[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
  //     } else {
  //       let posX = window.pageYOffset * downTarget[i].dataset.ratex;
  //       let posY = window.pageYOffset * downTarget[i].dataset.ratey;
  //       downTarget[i].style.transform = 'translate3d(' + posX + 'px,' + posY + 'px,0px)';
  //     }
  //   }
  //   // scroll-up object
  //   const upTarget = document.querySelectorAll('.scroll-up');
  //   for (let i = 0; i < upTarget.length; i++) {
  //     let pos = window.pageYOffset * upTarget[i].dataset.rate;
  //     if (upTarget[i].dataset.direction === 'vertical') {
  //       upTarget[i].style.transform = 'translate3d(0px, ' + -pos + 'px, 0px)';
  //     } else {
  //       let posX = window.pageYOffset * upTarget[i].dataset.ratex;
  //       let posY = window.pageYOffset * upTarget[i].dataset.ratey;
  //       upTarget[i].style.transform = 'translate3d(' + -posX + 'px,' + -posY + 'px,0px)';
  //     }
  //   }
  // });
};

// function setProgress() {
//   const skillsPercent = [0.8, 0.7, 0.7, 0.5, 0.9, 0.4, 0.6];
//   let index = 0;
//   var ProgressBar = require('progressbar.js');
//   const progressBox = document.querySelectorAll('.skill-logo');
//   [].forEach.call(progressBox, function (progressBox) {
//     var bar = new ProgressBar.Circle(progressBox, {
//       color: '#f44957',
//       trailColor: '#eee',
//       trailWidth: 1,
//       duration: 3000,
//       easing: 'bounce',
//       strokeWidth: 6,
//       from: { color: '#000', a: 0 },
//       to: { color: '#f44957', a: 1 },
//       // Set default step function for all animate calls
//       step: function (state, circle) {
//         circle.path.setAttribute('stroke', state.color);

//         var value = Math.round(circle.value() * 100);
//         circle.setText(value + '%');
//       },
//     });
//     bar.animate(skillsPercent[index]); // Number from 0.0 to 1.0
//     index++;
//   });
//   const progressTexts = document.querySelectorAll('.progressbar-text');
//   [].forEach.call(progressTexts, function (progressTexts) {
//     progressTexts.style = '';
//   });
// }

(function () {
  // 양식의 모든 데이터를 가져오고 객체를 반환합니다.
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements)
      .filter(function (k) {
        if (elements[k].name === 'honeypot') {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // Edge의 html 컬렉션에 대한 특별한 경우
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item;
      });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];

      // 단수 형식 요소에는 하나의 값만 있습니다.
      formData[name] = element.value;

      // 요소에 여러 항목이 있는 경우 해당 값을 가져옵니다.
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // 데이터에 양식별 값 추가
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // 기본 시트 이름
    formData.formGoogleSendEmail = form.dataset.email || ''; // 기본적으로 이메일 없음

    return { data: formData, honeypot: honeypot };
  }

  function handleFormSubmit(event) {
    // jquery 없이 양식 제출 처리
    event.preventDefault(); // 아래 xhr을 통해 제출하고 있습니다.
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // 허니팟 필드가 채워지면 스팸 봇에 의해 채워졌다고 가정합니다.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        form.reset();
        var formElements = form.querySelector('.form-elements');
        if (formElements) {
          formElements.style.display = 'none'; // 숨기기 양식
        }
        var thankYouMessage = form.querySelector('.thankyou_message');
        if (thankYouMessage) {
          thankYouMessage.style.display = 'block';
        }
      }
    };
    // 포스트 데이터로 보내기 위한 url 인코딩 양식 데이터
    var encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      })
      .join('&');
    xhr.send(encoded);
  }

  function loaded() {
    // 우리 양식의 submit 이벤트에 바인딩
    var forms = document.querySelectorAll('form.gform');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', handleFormSubmit, false);
    }
  }
  document.addEventListener('DOMContentLoaded', loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

// document.addEventListener('DOMContentLoaded', () => {
//   var canvas = document.getElementById('forest');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//     recursiveTree(ctx, ctx.canvas.width / 2 - 1, ctx.canvas.height, 35, -Math.PI / 2, 12, 5);
//   }
// });

// var recursiveTree = function (ctx, startX, startY, length, angle, depth, branchWidth) {
//   // console.log(startX);
//   var rand = Math.random,
//     newLength,
//     newAngle,
//     newDepth,
//     maxBranch = 3,
//     endX,
//     endY,
//     maxAngle = (2 * Math.PI) / 4,
//     subBranches;

//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   endX = startX + length * Math.cos(angle);
//   endY = startY + length * Math.sin(angle);
//   ctx.lineCap = 'round';
//   ctx.lineWidth = branchWidth;
//   ctx.lineTo(endX, endY);

//   if (depth <= 2) {
//     ctx.strokeStyle = '#f36796';
//   } else {
//     ctx.strokeStyle = '#f44957';
//   }
//   ctx.stroke();

//   newDepth = depth - 1;

//   if (!newDepth) {
//     return;
//   }

//   subBranches = rand() * (maxBranch - 1) + 1;

//   branchWidth *= 0.7;

//   for (var i = 0; i < subBranches; i++) {
//     newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
//     newLength = length * (0.7 + rand() * 0.3);
//     recursiveTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
//   }
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
