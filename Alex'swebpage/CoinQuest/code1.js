gdjs.CoinQuestCode = {};
gdjs.CoinQuestCode.localVariables = [];
gdjs.CoinQuestCode.idToCallbackMap = new Map();
gdjs.CoinQuestCode.GDPlayerObjects1= [];
gdjs.CoinQuestCode.GDPlayerObjects2= [];
gdjs.CoinQuestCode.GDEnemyObjects1= [];
gdjs.CoinQuestCode.GDEnemyObjects2= [];
gdjs.CoinQuestCode.GDPlatformObjects1= [];
gdjs.CoinQuestCode.GDPlatformObjects2= [];
gdjs.CoinQuestCode.GDHp_9595TextObjects1= [];
gdjs.CoinQuestCode.GDHp_9595TextObjects2= [];
gdjs.CoinQuestCode.GDCoin_9595TextObjects1= [];
gdjs.CoinQuestCode.GDCoin_9595TextObjects2= [];
gdjs.CoinQuestCode.GDDeathZoneObjects1= [];
gdjs.CoinQuestCode.GDDeathZoneObjects2= [];
gdjs.CoinQuestCode.GDCoinObjects1= [];
gdjs.CoinQuestCode.GDCoinObjects2= [];
gdjs.CoinQuestCode.GDGameOverTextObjects1= [];
gdjs.CoinQuestCode.GDGameOverTextObjects2= [];
gdjs.CoinQuestCode.GDRestartObjects1= [];
gdjs.CoinQuestCode.GDRestartObjects2= [];


gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CoinQuestCode.GDPlayerObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.CoinQuestCode.GDEnemyObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CoinQuestCode.GDPlayerObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.CoinQuestCode.GDCoinObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CoinQuestCode.GDPlayerObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDDeathZoneObjects1Objects = Hashtable.newFrom({"DeathZone": gdjs.CoinQuestCode.GDDeathZoneObjects1});
gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDRestartObjects1Objects = Hashtable.newFrom({"Restart": gdjs.CoinQuestCode.GDRestartObjects1});
gdjs.CoinQuestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.CoinQuestCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.CoinQuestCode.GDGameOverTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.CoinQuestCode.GDRestartObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Yume Nikki (OST ) - Snow World.mp3", true, 50, 1.1);
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDDeathZoneObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDDeathZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDGameOverTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin_Text"), gdjs.CoinQuestCode.GDCoin_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hp_Text"), gdjs.CoinQuestCode.GDHp_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CoinQuestCode.GDHp_9595TextObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDHp_9595TextObjects1[i].getBehavior("Text").setText("HP: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.CoinQuestCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CoinQuestCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0)))));
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDCoin_9595TextObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDCoin_9595TextObjects1[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.CoinQuestCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CoinQuestCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1)))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(3), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Run");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.CoinQuestCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects, gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(3), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(10);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].resetTimer("DamageCooldown");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("DamageCooldown") > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].resetTimer("DamageCooldown");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.CoinQuestCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects, gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CoinQuestCode.GDCoinObjects1 */
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "retro-coin-4-236671.mp3", false, 55, 1.1);
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeathZone"), gdjs.CoinQuestCode.GDDeathZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDPlayerObjects1Objects, gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDDeathZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.CoinQuestCode.GDGameOverTextObjects1);
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.CoinQuestCode.GDRestartObjects1);
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDGameOverTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableNumber(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CoinQuestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariableBoolean(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CoinQuestCode.GDPlayerObjects1[k] = gdjs.CoinQuestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.CoinQuestCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GameOverText"), gdjs.CoinQuestCode.GDGameOverTextObjects1);
/* Reuse gdjs.CoinQuestCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.CoinQuestCode.GDRestartObjects1);
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDGameOverTextObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDGameOverTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.CoinQuestCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDRestartObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.CoinQuestCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CoinQuestCode.mapOfGDgdjs_9546CoinQuestCode_9546GDRestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CoinQuestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.CoinQuestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CoinQuestCode.GDPlayerObjects1[i].returnVariable(gdjs.CoinQuestCode.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CoinQuest", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.CoinQuestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CoinQuestCode.GDPlayerObjects1.length = 0;
gdjs.CoinQuestCode.GDPlayerObjects2.length = 0;
gdjs.CoinQuestCode.GDEnemyObjects1.length = 0;
gdjs.CoinQuestCode.GDEnemyObjects2.length = 0;
gdjs.CoinQuestCode.GDPlatformObjects1.length = 0;
gdjs.CoinQuestCode.GDPlatformObjects2.length = 0;
gdjs.CoinQuestCode.GDHp_9595TextObjects1.length = 0;
gdjs.CoinQuestCode.GDHp_9595TextObjects2.length = 0;
gdjs.CoinQuestCode.GDCoin_9595TextObjects1.length = 0;
gdjs.CoinQuestCode.GDCoin_9595TextObjects2.length = 0;
gdjs.CoinQuestCode.GDDeathZoneObjects1.length = 0;
gdjs.CoinQuestCode.GDDeathZoneObjects2.length = 0;
gdjs.CoinQuestCode.GDCoinObjects1.length = 0;
gdjs.CoinQuestCode.GDCoinObjects2.length = 0;
gdjs.CoinQuestCode.GDGameOverTextObjects1.length = 0;
gdjs.CoinQuestCode.GDGameOverTextObjects2.length = 0;
gdjs.CoinQuestCode.GDRestartObjects1.length = 0;
gdjs.CoinQuestCode.GDRestartObjects2.length = 0;

gdjs.CoinQuestCode.eventsList0(runtimeScene);
gdjs.CoinQuestCode.GDPlayerObjects1.length = 0;
gdjs.CoinQuestCode.GDPlayerObjects2.length = 0;
gdjs.CoinQuestCode.GDEnemyObjects1.length = 0;
gdjs.CoinQuestCode.GDEnemyObjects2.length = 0;
gdjs.CoinQuestCode.GDPlatformObjects1.length = 0;
gdjs.CoinQuestCode.GDPlatformObjects2.length = 0;
gdjs.CoinQuestCode.GDHp_9595TextObjects1.length = 0;
gdjs.CoinQuestCode.GDHp_9595TextObjects2.length = 0;
gdjs.CoinQuestCode.GDCoin_9595TextObjects1.length = 0;
gdjs.CoinQuestCode.GDCoin_9595TextObjects2.length = 0;
gdjs.CoinQuestCode.GDDeathZoneObjects1.length = 0;
gdjs.CoinQuestCode.GDDeathZoneObjects2.length = 0;
gdjs.CoinQuestCode.GDCoinObjects1.length = 0;
gdjs.CoinQuestCode.GDCoinObjects2.length = 0;
gdjs.CoinQuestCode.GDGameOverTextObjects1.length = 0;
gdjs.CoinQuestCode.GDGameOverTextObjects2.length = 0;
gdjs.CoinQuestCode.GDRestartObjects1.length = 0;
gdjs.CoinQuestCode.GDRestartObjects2.length = 0;


return;

}

gdjs['CoinQuestCode'] = gdjs.CoinQuestCode;
