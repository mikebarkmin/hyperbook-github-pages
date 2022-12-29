"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6967],{76967:function(O){O.exports=JSON.parse('{"commands":{"MOTION_MOVESTEPS":"иди %1 корака","MOTION_TURNRIGHT":"окрет @turnRight за %1 степени","MOTION_TURNLEFT":"окрет @turnLeft за %1 степени","MOTION_POINTINDIRECTION":"усмери се ка %1","MOTION_POINTTOWARDS":"усмери се ка %1","MOTION_GOTOXY":"иди до x: %1 y: %2","MOTION_GOTO":"иди до %1","MOTION_GLIDESECSTOXY":"клизи %1 секунди до x: %2 y: %3","MOTION_GLIDETO":"клизи %1 секунди до %2","MOTION_CHANGEXBY":"промени x за %1","MOTION_SETX":"нека x буде %1","MOTION_CHANGEYBY":"промени y за %1","MOTION_SETY":"нека y буде %1","MOTION_SETROTATIONSTYLE":"подеси начин окретања %1","LOOKS_SAYFORSECS":"изговори %1 током %2 секунде","LOOKS_SAY":"изговори %1","LOOKS_THINKFORSECS":"замисли %1 током %2 секунде","LOOKS_THINK":"замисли %1","LOOKS_SHOW":"прикажи","LOOKS_HIDE":"сакриј","LOOKS_SWITCHCOSTUMETO":"замени костим са %1","LOOKS_NEXTCOSTUME":"следећи костим","LOOKS_NEXTBACKDROP_BLOCK":"следећа позадина","LOOKS_SWITCHBACKDROPTO":"промени позадину у %1","LOOKS_SWITCHBACKDROPTOANDWAIT":"промени позадину у %1 и чекај","LOOKS_CHANGEEFFECTBY":"промени ефекат %1 за %2","LOOKS_SETEFFECTTO":"нека ефекат %1 буде %2","LOOKS_CLEARGRAPHICEFFECTS":"уклони графичке ефекте","LOOKS_CHANGESIZEBY":"промени величину за %1","LOOKS_SETSIZETO":"нека величина буде %1 %","LOOKS_GOTOFRONTBACK":"иди на %1 слој","LOOKS_GOFORWARDBACKWARDLAYERS":"иди %1 %2 слоја","SOUND_PLAY":"покрени звук %1","SOUND_CHANGEEFFECTBY":"промени ефекат %1 за %2","SOUND_SETEFFECTO":"нека ефекат %1 буде %2","SOUND_CLEAREFFECTS":"уклони звучне ефекте","SOUND_PLAYUNTILDONE":"репродукуј звук %1 до краја","SOUND_STOPALLSOUNDS":"заустави све звукове","music.playDrumForBeats":"удараљка %1 током %2 откуцаја","music.restForBeats":"пауза %1 откуцаја","music.playNoteForBeats":"свирај ноту %1 током %2 откуцаја","music.setInstrument":"нека инструмент буде %1","SOUND_CHANGEVOLUMEBY":"промени јачину звука за %1","SOUND_SETVOLUMETO":"нека јачина звука буде %1%","music.changeTempo":"промени темпо за %1","music.setTempo":"нека темпо буде %1","pen.clear":"обриши све","pen.stamp":"печат","pen.penDown":"спусти оловку","pen.penUp":"подигни оловку","pen.setColor":"нека боја оловке буде %1","pen.changeHue":"промени боју оловке за %1","pen.setColorParam":"нека %1 оловке буде %2","pen.changeColorParam":"промени %1 оловке за %2","pen.setHue":"нека боја оловке буде %1","pen.changeShade":"промени сенку оловке за %1","pen.setShade":"нека сенка оловке буде %1","pen.changeSize":"промени дебљину оловке за %1","pen.setSize":"нека дебљина оловке буде %1","EVENT_WHENFLAGCLICKED":"када је кликнуто на @greenFlag","EVENT_WHENKEYPRESSED":"када је дирка %1 притиснута","EVENT_WHENTHISSPRITECLICKED":"када је кликнуто на овај лик","EVENT_WHENSTAGECLICKED":"када је кликнуто на позорницу","EVENT_WHENBACKDROPSWITCHESTO":"када се позадина промени у %1","EVENT_WHENGREATERTHAN":"када је %1 > %2","EVENT_WHENBROADCASTRECEIVED":"када примим %1","EVENT_BROADCAST":"разгласи %1","EVENT_BROADCASTANDWAIT":"разгласи %1 и чекај","CONTROL_WAIT":"чекај %1 секунду","CONTROL_REPEAT":"понови %1","CONTROL_FOREVER":"понављај заувек","CONTROL_IF":"ако је %1 онда","CONTROL_WAITUNTIL":"чекај док не %1","CONTROL_REPEATUNTIL":"понављај до %1","CONTROL_STOP":"заустави %1","CONTROL_STARTASCLONE":"када се појавим као умножак","CONTROL_CREATECLONEOF":"направи дупликат од %1","CONTROL_DELETETHISCLONE":"обриши овај умножак","SENSING_ASKANDWAIT":"питај %1 и чекај","videoSensing.videoToggle":"нека видео буде %1","videoSensing.setVideoTransparency":"нека провидност видеа буде  %1","videoSensing.whenMotionGreaterThan":"када је кретање видеа > %1","SENSING_RESETTIMER":"постави тајмер на 0","DATA_SETVARIABLETO":"нека %1 буде %2","DATA_CHANGEVARIABLEBY":"промени %1 за %2","DATA_SHOWVARIABLE":"прикажи променљиву %1","DATA_HIDEVARIABLE":"сакриј променљиву %1","DATA_ADDTOLIST":"додај %1 у %2","DATA_DELETEOFLIST":"обриши %1 из %2","DATA_DELETEALLOFLIST":"обриши све из %1","MOTION_IFONEDGEBOUNCE":"ако си на рубу, окрени се","DATA_INSERTATLIST":"убаци %1 на %2 у %3","DATA_REPLACEITEMOFLIST":"замени елемент %1 у %2 са %3","DATA_SHOWLIST":"прикажи листу %1","DATA_HIDELIST":"сакриј листу %1","SENSING_OF_XPOSITION":"x положај","SENSING_OF_YPOSITION":"y положај","SENSING_OF_DIRECTION":"смер","SENSING_OF_COSTUMENUMBER":"број костима","LOOKS_COSTUMENUMBERNAME":"костим %1","SENSING_OF_SIZE":"величина","SENSING_OF_BACKDROPNAME":"име позадине","LOOKS_BACKDROPNUMBERNAME":"позадина %1","SENSING_OF_BACKDROPNUMBER":"број позадине","SOUND_VOLUME":"јачина звука","music.getTempo":"темпо","SENSING_TOUCHINGOBJECT":"додирује ли %1?","SENSING_TOUCHINGCOLOR":"додирује ли боју %1?","SENSING_COLORISTOUCHINGCOLOR":"боја %1 додирује %2?","SENSING_DISTANCETO":"удаљеност од %1","SENSING_ANSWER":"одговор","SENSING_KEYPRESSED":"дугме %1 је притиснуто?","SENSING_MOUSEDOWN":"миш притиснут?","SENSING_MOUSEX":"миш x","SENSING_MOUSEY":"миш y","SENSING_SETDRAGMODE":"нека начин превлачења буде %1","SENSING_LOUDNESS":"јачина звука","videoSensing.videoOn":"видео %1 на %2","SENSING_TIMER":"тајмер","SENSING_OF":"%1 од %2","SENSING_CURRENT":"тренутно %1","SENSING_DAYSSINCE2000":"дана после 2000","SENSING_USERNAME":"корисничко име","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"случајан број од %1 до %2","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_GT":"%1 > %2","OPERATORS_AND":"%1 и %2","OPERATORS_OR":"%1 или %2","OPERATORS_NOT":"није %1","OPERATORS_JOIN":"споји %1 и %2","OPERATORS_LETTEROF":"%1 слово од %2","OPERATORS_LENGTH":"дужина %1","OPERATORS_MOD":"%1 мод %2","OPERATORS_ROUND":"заокружи %1","OPERATORS_MATHOP":"%1 од %2","OPERATORS_CONTAINS":"%1 садржи %2","DATA_ITEMOFLIST":"елемент %1 из %2","DATA_ITEMNUMOFLIST":"место од %1 у %2","DATA_LENGTHOFLIST":"дужина %1","DATA_LISTCONTAINSITEM":"да ли %1 садржи %2?","CONTROL_ELSE":"у супротном","SENSING_USERID":"корисников ид","SENSING_LOUD":"гласно?","text2speech.speakAndWaitBlock":"изговори %1","text2speech.setVoiceBlock":"нека глас буде %1","text2speech.setLanguageBlock":"нека језик буде %1","translate.translateBlock":"преведи %1 на %2","translate.viewerLanguage":"језик","makeymakey.whenKeyPressed":"када је дирка %1 притиснута","makeymakey.whenKeysPressedInOrder":"када је %1 притиснуто по реду","microbit.whenButtonPressed":"када је %1 дугме притиснуто","microbit.isButtonPressed":"%1 дугме притиснуто?","microbit.whenGesture":"када је %1","microbit.displaySymbol":"прикажи %1","microbit.displayText":"прикажи текст %1","microbit.clearDisplay":"обриши екран","microbit.whenTilted":"када је нагнуто %1","microbit.isTilted":"нагнуто %1?","microbit.tiltAngle":"угао нагиба %1","microbit.whenPinConnected":"када је пин %1 повезан","ev3.motorTurnClockwise":"мотор %1: окрени овако током %2 секунди","ev3.motorTurnCounterClockwise":"мотор %1: окрени овако током %2 секунди","ev3.motorSetPower":"мотор %1: подеси снагу %2 %","ev3.getMotorPosition":"мотор %1: место","ev3.whenButtonPressed":"када је дугме %1 притиснуто","ev3.whenDistanceLessThan":"када је растојање < %1","ev3.whenBrightnessLessThan":"кад је осветљеност < %1","ev3.buttonPressed":"дугме %1 је притиснуто?","ev3.getDistance":"растојање","ev3.getBrightness":"осветљеност","ev3.beepNote":"изведи ноту %1 током %2 секунди","wedo2.motorOn":"укључи %1","wedo2.motorOff":"искључи %1","wedo2.startMotorPower":"подеси снагу %1 на %2","wedo2.setMotorDirection":"подеси смер %1 у %2","wedo2.whenDistance":"када је растојање %1 од %2","wedo2.getDistance":"растојање","wedo2.motorOnFor":"укључи %1 током %2 секунди","wedo2.setLightHue":"подеси боју светлости на %1","wedo2.playNoteFor":"свирај ноту %1 током %2 секунди","wedo2.whenTilted":"када је нагнуто %1","wedo2.isTilted":"нагнуто %1?","wedo2.getTiltAngle":"угао нагиба %1","gdxfor.whenGesture":"када је %1","gdxfor.whenForcePushedOrPulled":"када је сензор силе %1","gdxfor.getForce":"сила","gdxfor.whenTilted":"када је нагнуто %1","gdxfor.isTilted":"нагнуто %1?","gdxfor.getTilt":"угао нагиба %1","gdxfor.isFreeFalling":"пада?","gdxfor.getSpin":"брзина обртања %1","gdxfor.getAcceleration":"убрзање %1","boost.motorOnFor":"укључи мотор %1 током %2 секунди","boost.motorOnForRotation":"укључи мотор %1 током %2 окрета","boost.motorOn":"укључи мотор %1","boost.motorOff":"искључи мотор %1","boost.setMotorPower":"подеси брзину мотора %1 на %2 %","boost.setMotorDirection":"подеси смер мотора %1: %2","boost.getMotorPosition":"место мотора %1","boost.whenColor":"када је цигла боје %1 виђена","boost.seeingColor":"виђена је %1 цигла?","boost.whenTilted":"када је нагнуто %1","boost.getTiltAngle":"угао нагиба %1","boost.setLightHue":"подеси боју светлости на %1"},"dropdowns":{},"ignorelt":[],"soundEffects":["висина тона","померање лево/десно"],"microbitWhen":["померен","протресен","скок"],"osis":["друге програме лика"],"definePrefix":["дефиниши"],"defineSuffix":[],"palette":{"Motion":"Кретање","Looks":"Изглед","Sound":"Звук","Events":"Догађаји","Control":"Управљање","Sensing":"Осећаји","Operators":"Оператори","Variables":"Променљиве","My Blocks":"Моји блокови"},"math":["абс","цео део","цео+1","корен","sin","cos","tg","arcsin","arccos","arctan","ln","log","e ^","10 ^"],"aliases":{},"name":"Српски","percentTranslated":100}')}}]);