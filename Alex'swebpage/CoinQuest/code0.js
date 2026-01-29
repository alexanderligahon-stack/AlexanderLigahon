gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects2= [];
gdjs.Main_32MenuCode.GDTitleTextObjects1= [];
gdjs.Main_32MenuCode.GDTitleTextObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDControlsObjects1= [];
gdjs.Main_32MenuCode.GDControlsObjects2= [];
gdjs.Main_32MenuCode.GDCatchPhraseObjects1= [];
gdjs.Main_32MenuCode.GDCatchPhraseObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "instupendo - comfort chain.mp3", true, 70, 1.3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Animation").setAnimationName("Hover");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].getBehavior("Animation").setAnimationName("Clicked");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Main_32MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CoinQuest", false);
}
{gdjs.evtTools.sound.unloadSound(runtimeScene, "instupendo - comfort chain.mp3");
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDCatchPhraseObjects1.length = 0;
gdjs.Main_32MenuCode.GDCatchPhraseObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDCatchPhraseObjects1.length = 0;
gdjs.Main_32MenuCode.GDCatchPhraseObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
