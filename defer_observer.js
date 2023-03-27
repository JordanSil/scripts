<script>
var d = document;
function ytdefer_setup() {
  var els = d.getElementsByClassName('ytdefer');
  var vidClick = d.getElementsByClassName('video-wrapper');
  for (i = 1; i <= vidClick.length; i++) {
  	vidClick[i-1].id = 'video-wrapper'+i;
  }
  var vidWrap = d.getElementsByClassName('ytdefer_vid');
  for (var i = 1; i <= els.length; i++) {
    var e = els[i-1];
    var ds = e.getAttribute('data-src');
    if (!ds) {
      alert("data-src missing for video");
      return;
    }
    var w = e.clientWidth;
    var h = e.clientHeight;
    var dv = vidWrap[i-1];
    dv.id = 'ytdefer_vid' + i;
    dv.style.width = w + 'px';
    dv.style.height = h + 'px';
    dv.style.position = 'relative';
    dv.onresize = ytdefer_resize;
    e.appendChild(dv);
    var vc = vidClick[i-1];
    vc.onclick = gen_ytdefer_clk(i);
  }
  if (typeof(YT) == 'undefined') {
    var js = d.createElement("script");
    js.type = "text/javascript";
    js.src = "https://www.youtube.com/player_api";
    d.body.appendChild(js);
  }
  window.addEventListener('resize', ytdefer_resize);
}

function ytdefer_resize() {
  var els = d.getElementsByClassName('ytdefer');
  for (var i = 1; i <= els.length; i++) {
    var e = els[i-1];
    var w = e.clientWidth;
    var h = e.clientHeight;
    var dv = d.getElementById('ytdefer_vid' + i);
    dv.style.width = w + 'px';
    dv.style.height = h + 'px';
  }
}

function gen_ytdefer_clk(i) {
  return function() {
    var el = d.getElementById('ytdefer_vid' + i);
    var vid_id = el.parentNode.getAttribute('data-src');
    var player = new YT.Player(el.id, {
      height: el.style.height,
      width: el.style.width,
      videoId: vid_id,
      playerVars: {
        'color': 'white',
        'rel': 0,
      },
      events: {
        'onReady': function(ev) {
          ev.target.playVideo()
        }
      }
    });
  }
}

window.addEventListener('load', ytdefer_setup);

function ytdefer_reload() {
  var vidClick = d.getElementsByClassName('video-wrapper');
  var vidWrap = d.getElementsByClassName('ytdefer_vid');
  var checkParent = d.getElementsByClassName('ytdefer');
  for (i = 1; i <= vidClick.length; i++) {
    vidClick[i-1].id = 'video-wrapper'+i;
    vidWrap[i-1].id = 'ytdefer_vid'+i;
    if(checkParent[i-1].children.length <= 0) {
    	checkParent[i-1].appendChild(d.getElementById('ytdefer_vid'+i));
      } else {
    }
  }  
  for (i = 1; i <= vidClick.length; i++) {
    var checkType = d.getElementById('ytdefer_vid' + i).tagName; 
    if (checkType == "DIV"){
 	   var e = vidClick[i-1];
 	   e.onclick = gen_ytdefer_clk(i);
    }
  }
}

var catagoryOneD = document.getElementById('collection-list-grid-d1');
var catagoryTwoD = document.getElementById('collection-list-grid-d2');
var catagoryFiveD = document.getElementById('collection-list-grid-d5');
var catagorySixD = document.getElementById('collection-list-grid-d6');
var catagorySevenD = document.getElementById('collection-list-grid-d7');
var catagoryOneM = document.getElementById('collection-list-grid-m1');
var catagoryTwoM = document.getElementById('collection-list-grid-m2');
var catagoryFiveM = document.getElementById('collection-list-grid-m5');
var catagorySixM = document.getElementById('collection-list-grid-m6');
var observer = new MutationObserver(mutations=>{mutations.forEach(ytdefer_reload);});
observer.observe(catagoryOneD, {childList: true});
observer.observe(catagoryTwoD, {childList: true});
observer.observe(catagorySixD, {childList: true});

function vidStripSevenD() {
    if(!catagorySevenD) {
        window.setTimeout(vidStripSevenD,500);
        return;
    }
    observer.observe(catagorySevenD, {childList: true});
}
vidStripSevenD();

observer.observe(catagoryFiveD, {childList: true});

observer.observe(catagoryOneM, {childList: true});
observer.observe(catagoryTwoM, {childList: true});

function vidStripSixM() {
    if(!catagorySixM) {
        window.setTimeout(vidStripSixM,500);
        return;
    }
    observer.observe(catagorySixM, {childList: true});
}
vidStripSixM();

observer.observe(catagoryFiveM, {childList: true});

</script>
