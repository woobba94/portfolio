import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
