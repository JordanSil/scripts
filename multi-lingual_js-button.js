<script>
var host = window.location.host;
var path = window.location.pathname;
var sub = path.split('/');
var subL = window.location.pathname.split('/').length;
var buttonEn = document.getElementById('lang-en');
var buttonDe = document.getElementById('lang-de');
var buttonCn = document.getElementById('lang-cn');
var buttonCn = document.getElementById('lang-tw');
var buttonCn = document.getElementById('lang-pt');
var buttonEnM = document.getElementById('lang-en-m');
var buttonDeM = document.getElementById('lang-de-m');
var buttonCnM = document.getElementById('lang-cn-m');
var buttonCnM = document.getElementById('lang-tw-m');
var buttonCnM = document.getElementById('lang-pt-m');

var engLang = function() {
  if (sub[1] !== 'de' && sub[1] !== 'cn' && sub[1] !== 'tw' && sub[1] !== 'pt' &&
      sub[1] !== 'de-content' && sub[1] !== 'cn-content' && sub[1] !== 'tw-content' && sub[1] !== 'pt-content') {} else {
    if (subL == 3 && sub[2] == 'home') {
      self.location = '/';
    } else if (subL == 3 && sub[1].length == 10) {
      var enUrl = '/en-content/' + sub[2];
      self.location = enUrl;
    } else if (subL == 3 && sub[1].length == 2) {
      var enUrl = '/' + sub[2];
      self.location = enUrl;
    }
  }
};

var deLang = function() {
  if (sub[1] == 'de' || sub[1] == 'de-content') {} else {
    if (subL == 2 && sub[1] == '') {
      var deUrl = '/' + 'de' + '/home';
      self.location = deUrl;
    } else if (subL == 2) {
      var deUrl = '/' + 'de' + path;
      self.location = deUrl;
    } else if (subL == 3 && sub[1].length == 10) {
      var deUrl = '/de-content/' + sub[2];
      self.location = deUrl;
    } else if (subL == 3 && sub[1].length == 2) {
      var deUrl = '/de/' + sub[2];
      self.location = deUrl;
    }
  }
};

var cnLang = function() {
  if (sub[1] == 'cn' || sub[1] == 'cn-content') {} else {
    if (subL == 2 && sub[1] == '') {
      var deUrl = '/' + 'cn' + '/home';
      self.location = deUrl;
    } else if (subL == 2) {
      var deUrl = '/' + 'cn' + path;
      self.location = deUrl;
    } else if (subL == 3 && sub[1].length == 10) {
      var deUrl = '/cn-content/' + sub[2];
      self.location = deUrl;
    } else if (subL == 3 && sub[1].length == 2) {
      var deUrl = '/cn/' + sub[2];
      self.location = deUrl;
    }
  }
};

var twLang = function() {
  if (sub[1] == 'cn' || sub[1] == 'tw-content') {} else {
    if (subL == 2 && sub[1] == '') {
      var twUrl = '/' + 'tw' + '/home';
      self.location = twUrl;
    } else if (subL == 2) {
      var twUrl = '/' + 'tw' + path;
      self.location = twUrl;
    } else if (subL == 3 && sub[1].length == 10) {
      var twUrl = '/tw-content/' + sub[2];
      self.location = twUrl;
    } else if (subL == 3 && sub[1].length == 2) {
      var twUrl = '/tw/' + sub[2];
      self.location = twUrl;
    }
  }
}; 

var ptLang = function() {
  if (sub[1] == 'pt' || sub[1] == 'pt-content') {} else {
    if (subL == 2 && sub[1] == '') {
      var ptUrl = '/' + 'pt' + '/home';
      self.location = ptUrl;
    } else if (subL == 2) {
      var ptUrl = '/' + 'pt' + path;
      self.location = ptUrl;
    } else if (subL == 3 && sub[1].length == 10) {
      var ptUrl = '/pt-content/' + sub[2];
      self.location = ptUrl;
    } else if (subL == 3 && sub[1].length == 2) {
      var ptUrl = '/pt/' + sub[2];
      self.location = ptUrl;
    }
  }
}; 
  
  buttonEn.onclick = enLang;
  buttonDe.onclick = deLang;
  buttonCn.onclick = cnLang;
  buttonTw.onclick = twLang;
  buttonPt.onclick = ptLang;
  buttonEnM.onclick = enLang;
  buttonDeM.onclick = deLang;
  buttonCnM.onclick = cnLang;
  buttonTwM.onclick = twLang;
  buttonPtM.onclick = ptLang;
 
</script>
