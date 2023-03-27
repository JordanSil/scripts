(function(thisObj) {
  var scriptPalette = scriptBuildUI(thisObj);
  if (scriptPalette !== null && scriptPalette instanceof Window) {
    scriptPalette.center();
    scriptPalette.show();
  } else {
    scriptPalette.layout.layout(true);
  }

  function scriptBuildUI(thisObj) {
    var myWindow = (thisObj instanceof Panel) ? thisObj : new Window("palette", "STR", undefined, {resizeable: true});
    
    var dir = Folder.current.fsName;
    var iconsA = {a: File(dir+"/stricons/1.png"), b: File(dir+"/stricons/1.png"), c: File(dir+"/stricons/1.png"), d: File(dir+"/stricons/1h.png")};
    var iconsB = {a: File(dir+"/stricons/2.png"), b: File(dir+"/stricons/2.png"), c: File(dir+"/stricons/2.png"), d: File(dir+"/stricons/2h.png")};
    var iconsC = {a: File(dir+"/stricons/3.png"), b: File(dir+"/stricons/3.png"), c: File(dir+"/stricons/3.png"), d: File(dir+"/stricons/3h.png")};

    var btnSize = [27, 28];    
   
    var buttonPanel = myWindow.add("group", undefined, "");
    buttonPanel.spacing = 10;
    buttonPanel.margins = 0;    
    
    var sortGroup = buttonPanel.add("group", undefined, "");
    sortGroup.orientation = "column";
    sortGroup.spacing = 5;
    sortGroup.margins = [0, 0, 0, 0];
    var sortName = sortGroup.add("statictext", undefined, "Sort");
    var sortButton = sortGroup.add("iconbutton", undefined, ScriptUI.newImage(iconsA.a, iconsA.b, iconsA.c, iconsA.d));
    sortButton.helpTip = "Sort Layers";
    sortButton.size = btnSize;
   
    var reverseGroup = buttonPanel.add("group", undefined, "");
    reverseGroup.orientation = "column";
    reverseGroup.alignment = "center";
    reverseGroup.spacing = 5;
    reverseGroup.margins = [0, 0, 0, 0];
    var reverseName = reverseGroup.add("statictext", undefined, "Reverse");   
    var reverseButton = reverseGroup.add("iconButton", undefined, ScriptUI.newImage(iconsC.a, iconsC.b, iconsC.c, iconsC.d));
    reverseButton.helpTip = "Reverse Layers";
    reverseButton.size = btnSize;
    
    var trimGroup = buttonPanel.add("group", undefined, "");
    trimGroup.orientation = "column";
    trimGroup.spacing = 5;
    trimGroup.margins = [0, 0, 0, 0];
    var trimName = trimGroup.add("statictext", undefined, "Trim");
    var trimButton = trimGroup.add("iconbutton", undefined, ScriptUI.newImage(iconsB.a, iconsB.b, iconsB.c, iconsB.d));
    trimButton.helpTip = "Trim all layers to first selected layer";
    trimButton.size = btnSize;        

    sortButton.onClick = function() {
      app.beginUndoGroup("sort");
      var myLayers = app.project.activeItem.selectedLayers;
      if (myLayers.length <= 1) {
        alert("You need to select at least two layers");
        return;
      } else {
        for (var i = 1; i <= myLayers.length; i++) {
          var pi = i - 1;
          myLayers[i].moveBefore(myLayers[pi]);
          }
        }
      app.endUndoGroup("sort");
    }

    trimButton.onClick = function() {
      app.beginUndoGroup("sort");
      var myLayers = app.project.activeItem.selectedLayers;
      if (myLayers.length <= 1) {
        alert("You need to select at least two layers");
        return;
      } else {
        for (var i = 1; i <= myLayers.length; i++) {
          var inP = myLayers[0].inPoint;
          var outP = myLayers[0].outPoint;
          myLayers[i].inPoint = inP;
          myLayers[i].outPoint = outP;
        }
      }
      app.endUndoGroup("sort");
    }

    reverseButton.onClick = function() {
      app.beginUndoGroup("sort");
      var myLayers = app.project.activeItem.selectedLayers;
      var length = myLayers.length;
      var newLayers = [];
      if (myLayers.length <= 1) {
        alert("You need to select at least two layers");
        return;
      } else {
        for (i = 0; i < length; i++) {
          newLayers[i] = myLayers[i].index;
        }
        newLayers = newLayers.sort(function(a, b) {return a - b});
        for (i = 0; i < length - 1; i++) {
          var pi = i + 1;
          var layerCont;
          if (app.project.activeItem.layer(newLayers[i]).index == app.project.activeItem.layer(newLayers[pi]).index - 1) {
            var layerCont = true;
          } else {
            var layerCont = false;
            break;
          }
        }
        if (layerCont == false) {
          for (i = 0; i < length; i++) {
            var lengthN = newLayers.length;
            for (i = 0; i < lengthN / 2; i++) {
              var mi = (lengthN - 1) - i;
              app.project.activeItem.layer(newLayers[i]).moveBefore(app.project.activeItem.layer(newLayers[mi]));
              app.project.activeItem.layer(newLayers[mi]).moveBefore(app.project.activeItem.layer(newLayers[i]));
            }
          }
        } else {
          for (i = 0; i < length; i++) {
            var mi = length - 1;
            app.project.activeItem.layer(newLayers[0]).moveAfter(app.project.activeItem.layer(newLayers[mi - i]));
          }
        }
      }
      app.endUndoGroup("sort");
    }

    return myWindow;
  }
})(this);
