/********************** 
 * Abpsychopy_V7 Test *
 **********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.396), (- 0.396), (- 0.396)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'ABPsychoPy_v7';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InitCodeRoutineBegin());
flowScheduler.add(InitCodeRoutineEachFrame());
flowScheduler.add(InitCodeRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
flowScheduler.add(trainingInstructionsRoutineBegin());
flowScheduler.add(trainingInstructionsRoutineEachFrame());
flowScheduler.add(trainingInstructionsRoutineEnd());
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
const TrainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingLoopBegin, TrainingLoopScheduler);
flowScheduler.add(TrainingLoopScheduler);
flowScheduler.add(TrainingLoopEnd);
flowScheduler.add(experimentInstructionsRoutineBegin());
flowScheduler.add(experimentInstructionsRoutineEachFrame());
flowScheduler.add(experimentInstructionsRoutineEnd());
flowScheduler.add(BlankRoutineBegin());
flowScheduler.add(BlankRoutineEachFrame());
flowScheduler.add(BlankRoutineEnd());
const TrialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrialLoopBegin, TrialLoopScheduler);
flowScheduler.add(TrialLoopScheduler);
flowScheduler.add(TrialLoopEnd);
flowScheduler.add(ThankYouRoutineBegin());
flowScheduler.add(ThankYouRoutineEachFrame());
flowScheduler.add(ThankYouRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "InitCode"
  InitCodeClock = new util.Clock();
  import * as random from 'random';
  import * as xlrd from 'xlrd';
  var CDIpos, T1lags, exactFrames, frame_rate, infile, lags, lagsNeeded, nCDIpos, nConditions, nLags, nStimuli, nTrials, nVal, stimFrames, stimTime, trialNum, val;
  random.seed();
  infile = "ABConditions.xlsb.xlsx";
  nTrials = 24;
  stimTime = 0.117;
  frame_rate = win.getActualFrameRate();
  exactFrames = Number.parseInt((frame_rate * stimTime));
  stimFrames = Math.round(exactFrames);
  nStimuli = 21;
  lags = [3, 5];
  nLags = lags.length;
  lagsNeeded = Number.parseInt((nTrials / nLags));
  val = [1, 2, 3];
  nVal = val.length;
  CDIpos = [1, 2];
  nCDIpos = CDIpos.length;
  nConditions = ((nLags * nVal) * nCDIpos);
  T1lags = [4, 5, 6];
  trialNum = 0;
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: 'Welcome!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('darkturquoise'),  opacity: 1,
    depth: 0.0 
  });
  
  textInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions',
    text: 'During this experiment, you’re going to see a stream of white words flashing up on the screen. The words in the stream will flash on the screen super quickly. Among those words, two of them will be green. Your job is to remember the two green words in each stream of words. At the end of each trial, the computer will prompt you to indicate which green words you saw in that stream by typing in the first two letters of each of the green words in order. While you’re typing in the letters, I would also like you to say the green words out loud. So if you saw the words “apple” and “lemon” written in green, you would type in the letters ‘A P’ and say out-loud “apple”, then type in the letters ‘L E’ and say out-loud “lemon”. Then, the computer will tell you to press the space bar to continue. If you feel like you need to take a break at any point, you may do so at this point between trials. If you don’t remember or didn’t see one or both of the green words, that is okay, just take your very best guess!\n\nYou will start the experiment with several practice trials. You will need to get 5 correct practice trials in a row before you can continue to the experiment. At the end of each practice trial, you will be given feedback on your performance so you can know if you were correct and what the correct answer was. The first practice trial’s stream will be exceptionally slow, and then will increase in speed after each correct trial until it reaches the experiment’s speed after the fourth correct trial. If you get a practice trial incorrect, you will start back at the slowest speed. After you get 5 correct practice trials in a row, you will move on to the experiment.\n\nThank you for participating in my experiment. Good luck, have fun!\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1.4, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  textSpace = new visual.TextStim({
    win: psychoJS.window,
    name: 'textSpace',
    text: 'Press the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  keyStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trainingInstructions"
  trainingInstructionsClock = new util.Clock();
  textTrainingInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTrainingInstructions',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  textSpaceTraining = new visual.TextStim({
    win: psychoJS.window,
    name: 'textSpaceTraining',
    text: 'Press the space bar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyTrainingStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "training_TrialCode"
  training_TrialCodeClock = new util.Clock();
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
          
          trainingTrialNumber = 0;
  trainingNumCorrect = 0;
  trainingStimTime = 0.5;
  trainingNstimuli = 15;
  trainingNums = list(range(0, nTrials));
  random.shuffle(trainingNums);
  
  // Initialize components for Routine "trainingRSVPcode"
  trainingRSVPcodeClock = new util.Clock();
  // Initialize components for Routine "training_RSVPtrial"
  training_RSVPtrialClock = new util.Clock();
  textRSVP_training = new visual.TextStim({
    win: psychoJS.window,
    name: 'textRSVP_training',
    text: 'default text',
    font: 'Helvetica',
    units: 'cm', 
    pos: [0, 0], height: 5,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "training_ResponseT1"
  training_ResponseT1Clock = new util.Clock();
  textT1_training = new visual.TextStim({
    win: psychoJS.window,
    name: 'textT1_training',
    text: "Enter the first two letters of the first green word.\n\n(don't forget to also say the whole word out loud)",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyT1_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textResp1__training = new visual.TextStim({
    win: psychoJS.window,
    name: 'textResp1__training',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "training_ResponseT2"
  training_ResponseT2Clock = new util.Clock();
  textT2_training = new visual.TextStim({
    win: psychoJS.window,
    name: 'textT2_training',
    text: "Enter the first two letters of the second green word.\n\n(don't forget to also say the whole word out loud)",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyT2_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textResp2__training = new visual.TextStim({
    win: psychoJS.window,
    name: 'textResp2__training',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "trainingResults"
  trainingResultsClock = new util.Clock();
  textTraining_youwere = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_youwere',
    text: 'You were',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  textTraining_accuracy = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_accuracy',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  textTraining_yourResp = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_yourResp',
    text: 'You responded with:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  textTraining_theirResp = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_theirResp',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  textTraining_corrResp = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_corrResp',
    text: 'The correct responses were:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  textTraining_corrAnswer = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_corrAnswer',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('lime'),  opacity: 1,
    depth: -6.0 
  });
  
  textTraining_yourStreak = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_yourStreak',
    text: 'Your training streak is:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  textTraining_streak = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_streak',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  textTraining_space = new visual.TextStim({
    win: psychoJS.window,
    name: 'textTraining_space',
    text: 'Press the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  keySpaceTraining = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "experimentInstructions"
  experimentInstructionsClock = new util.Clock();
  textExpInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textExpInstructions',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  textSpaceBegin = new visual.TextStim({
    win: psychoJS.window,
    name: 'textSpaceBegin',
    text: 'Press the space bar to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyExpStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "TrialCode"
  TrialCodeClock = new util.Clock();
  trialNumber = 0;
  pCDIi = 0;
  nCDIi = 0;
  uCDIi = 0;
  
  // Initialize components for Routine "RSVPcode"
  RSVPcodeClock = new util.Clock();
  // Initialize components for Routine "RSVPTrial"
  RSVPTrialClock = new util.Clock();
  textRSVP = new visual.TextStim({
    win: psychoJS.window,
    name: 'textRSVP',
    text: 'default text',
    font: 'Helvetica',
    units: 'cm', 
    pos: [0, 0], height: 5,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ResponseT1"
  ResponseT1Clock = new util.Clock();
  textT1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textT1',
    text: 'Enter the first two letters of the first green word.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyT1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  T1acc = [];
  
  textResp1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textResp1',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "ResponseT2"
  ResponseT2Clock = new util.Clock();
  textT2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textT2',
    text: 'Enter the first two letters of the second green word.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  keyT2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  T2acc = [];
  
  textResp2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textResp2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "ContSpace"
  ContSpaceClock = new util.Clock();
  textSpaceCont = new visual.TextStim({
    win: psychoJS.window,
    name: 'textSpaceCont',
    text: 'Press space to begin next trial',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keySpace = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank"
  BlankClock = new util.Clock();
  textBlank = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ThankYou"
  ThankYouClock = new util.Clock();
  textThanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'textThanks',
    text: 'You have now completed the experiment.\nThank you for your participation!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function InitCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'InitCode'-------
    t = 0;
    InitCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    inbook = xlrd.open_workbook(infile);
    distSheet = inbook.sheet_by_index(0);
    T1Sheet = inbook.sheet_by_index(1);
    T2Sheet = inbook.sheet_by_index(2);
    neuSheet = inbook.sheet_by_index(3);
    pleasSheet = inbook.sheet_by_index(4);
    distractors = [];
    T1s = [];
    T2s = [];
    nCDIs = [];
    pCDIs = [];
    for (var rowx = 0, _pj_a = distSheet.nrows; (rowx < _pj_a); rowx += 1) {
        Drow = distSheet.row_values(rowx);
        distractors.append(Drow[0]);
    }
    for (var rowx = 0, _pj_a = T1Sheet.nrows; (rowx < _pj_a); rowx += 1) {
        T1row = T1Sheet.row_values(rowx);
        T2row = T2Sheet.row_values(rowx);
        T1s.append(T1row[0]);
        T2s.append(T2row[0]);
    }
    for (var rowx = 0, _pj_a = neuSheet.nrows; (rowx < _pj_a); rowx += 1) {
        Nrow = neuSheet.row_values(rowx);
        Prow = pleasSheet.row_values(rowx);
        nCDIs.append(Nrow[0]);
        pCDIs.append(Prow[0]);
    }
    T1order = [];
    T2order = [];
    nTargs = T1s.length;
    while ((T1order.length < nTrials)) {
        random.shuffle(T1s);
        random.shuffle(T2s);
        T1order.slice(T1order.length, (T1order.length + nTargs)) = T1s;
        T2order.slice(T2order.length, (T2order.length + nTargs)) = T2s;
    }
    Norder = [];
    Porder = [];
    numCDIs = T1s.length;
    while ((Norder.length < (nTrials / 2))) {
        random.shuffle(nCDIs);
        random.shuffle(pCDIs);
        Norder.slice(Norder.length, (Norder.length + numCDIs)) = T1s;
        Porder.slice(Porder.length, (Porder.length + numCDIs)) = T2s;
    }
    allLags = [];
    allVal = [];
    while ((allLags.length < nTrials)) {
        for (var L, _pj_c = 0, _pj_a = lags, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            L = _pj_a[_pj_c];
            cLags = ([L] * lagsNeeded);
            allLags.append(cLags);
        }
    }
    while ((allVal.length < nTrials)) {
        for (var V, _pj_c = 0, _pj_a = val, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            V = _pj_a[_pj_c];
            allVal.append(V);
        }
    }
    console.log(allLags, allVal);
    
    // keep track of which components have finished
    InitCodeComponents = [];
    
    for (const thisComponent of InitCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function InitCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'InitCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InitCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InitCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function InitCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'InitCode'-------
    for (const thisComponent of InitCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "InitCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function InstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyStart.keys = undefined;
    keyStart.rt = undefined;
    _keyStart_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(textWelcome);
    InstructionsComponents.push(textInstructions);
    InstructionsComponents.push(textSpace);
    InstructionsComponents.push(keyStart);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function InstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }

    
    // *textInstructions* updates
    if (t >= 0.0 && textInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions.tStart = t;  // (not accounting for frame time here)
      textInstructions.frameNStart = frameN;  // exact frame index
      
      textInstructions.setAutoDraw(true);
    }

    
    // *textSpace* updates
    if (t >= 10 && textSpace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textSpace.tStart = t;  // (not accounting for frame time here)
      textSpace.frameNStart = frameN;  // exact frame index
      
      textSpace.setAutoDraw(true);
    }

    
    // *keyStart* updates
    if (t >= 10 && keyStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyStart.tStart = t;  // (not accounting for frame time here)
      keyStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyStart.clearEvents(); });
    }

    if (keyStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyStart.getKeys({keyList: ['space'], waitRelease: false});
      _keyStart_allKeys = _keyStart_allKeys.concat(theseKeys);
      if (_keyStart_allKeys.length > 0) {
        keyStart.keys = _keyStart_allKeys[_keyStart_allKeys.length - 1].name;  // just the last key pressed
        keyStart.rt = _keyStart_allKeys[_keyStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function InstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyStart.keys', keyStart.keys);
    if (typeof keyStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyStart.rt', keyStart.rt);
        routineTimer.reset();
        }
    
    keyStart.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function BlankRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Blank'-------
    t = 0;
    BlankClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    BlankComponents = [];
    BlankComponents.push(textBlank);
    
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function BlankRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Blank'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlank* updates
    if (t >= 0.0 && textBlank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlank.tStart = t;  // (not accounting for frame time here)
      textBlank.frameNStart = frameN;  // exact frame index
      
      textBlank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function BlankRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Blank'-------
    for (const thisComponent of BlankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function trainingInstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainingInstructions'-------
    t = 0;
    trainingInstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    textTrainingInstructions.setText('You are about to begin the training portion of the experiment. As a reminder, you will need to get 5 correct practice trials in a row before you can continue to the experiment. At the end of each practice trial, you will be given feedback on your performance so you can know if you were correct and what the correct answer was. The first practice trial’s stream will be exceptionally slow, and then will increase in speed after each correct trial until it reaches the experiment’s speed after the fourth correct trial. If you get a practice trial incorrect, you will start back at the slowest speed. After you get 5 correct practice trials in a row, you will move on to the experiment.');
    keyTrainingStart.keys = undefined;
    keyTrainingStart.rt = undefined;
    _keyTrainingStart_allKeys = [];
    // keep track of which components have finished
    trainingInstructionsComponents = [];
    trainingInstructionsComponents.push(textTrainingInstructions);
    trainingInstructionsComponents.push(textSpaceTraining);
    trainingInstructionsComponents.push(keyTrainingStart);
    
    for (const thisComponent of trainingInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trainingInstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainingInstructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainingInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textTrainingInstructions* updates
    if (t >= 0.0 && textTrainingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTrainingInstructions.tStart = t;  // (not accounting for frame time here)
      textTrainingInstructions.frameNStart = frameN;  // exact frame index
      
      textTrainingInstructions.setAutoDraw(true);
    }

    
    // *textSpaceTraining* updates
    if (t >= 5 && textSpaceTraining.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textSpaceTraining.tStart = t;  // (not accounting for frame time here)
      textSpaceTraining.frameNStart = frameN;  // exact frame index
      
      textSpaceTraining.setAutoDraw(true);
    }

    
    // *keyTrainingStart* updates
    if (t >= 5 && keyTrainingStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyTrainingStart.tStart = t;  // (not accounting for frame time here)
      keyTrainingStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyTrainingStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyTrainingStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyTrainingStart.clearEvents(); });
    }

    if (keyTrainingStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyTrainingStart.getKeys({keyList: ['space'], waitRelease: false});
      _keyTrainingStart_allKeys = _keyTrainingStart_allKeys.concat(theseKeys);
      if (_keyTrainingStart_allKeys.length > 0) {
        keyTrainingStart.keys = _keyTrainingStart_allKeys[_keyTrainingStart_allKeys.length - 1].name;  // just the last key pressed
        keyTrainingStart.rt = _keyTrainingStart_allKeys[_keyTrainingStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainingInstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainingInstructions'-------
    for (const thisComponent of trainingInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyTrainingStart.keys', keyTrainingStart.keys);
    if (typeof keyTrainingStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyTrainingStart.rt', keyTrainingStart.rt);
        routineTimer.reset();
        }
    
    keyTrainingStart.stop();
    // the Routine "trainingInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function TrainingLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Training = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 9999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Training'
  });
  psychoJS.experiment.addLoop(Training); // add the loop to the experiment
  currentLoop = Training;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTraining of Training) {
    const snapshot = Training.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(training_TrialCodeRoutineBegin(snapshot));
    thisScheduler.add(training_TrialCodeRoutineEachFrame(snapshot));
    thisScheduler.add(training_TrialCodeRoutineEnd(snapshot));
    const training_RSVPLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(training_RSVPLoopBegin, training_RSVPLoopScheduler);
    thisScheduler.add(training_RSVPLoopScheduler);
    thisScheduler.add(training_RSVPLoopEnd);
    thisScheduler.add(training_ResponseT1RoutineBegin(snapshot));
    thisScheduler.add(training_ResponseT1RoutineEachFrame(snapshot));
    thisScheduler.add(training_ResponseT1RoutineEnd(snapshot));
    thisScheduler.add(training_ResponseT2RoutineBegin(snapshot));
    thisScheduler.add(training_ResponseT2RoutineEachFrame(snapshot));
    thisScheduler.add(training_ResponseT2RoutineEnd(snapshot));
    thisScheduler.add(trainingResultsRoutineBegin(snapshot));
    thisScheduler.add(trainingResultsRoutineEachFrame(snapshot));
    thisScheduler.add(trainingResultsRoutineEnd(snapshot));
    thisScheduler.add(BlankRoutineBegin(snapshot));
    thisScheduler.add(BlankRoutineEachFrame(snapshot));
    thisScheduler.add(BlankRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function training_RSVPLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  training_RSVP = new TrialHandler({
    psychoJS: psychoJS,
    nReps: $trainingNstimuli, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'training_RSVP'
  });
  psychoJS.experiment.addLoop(training_RSVP); // add the loop to the experiment
  currentLoop = training_RSVP;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTraining_RSVP of training_RSVP) {
    const snapshot = training_RSVP.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trainingRSVPcodeRoutineBegin(snapshot));
    thisScheduler.add(trainingRSVPcodeRoutineEachFrame(snapshot));
    thisScheduler.add(trainingRSVPcodeRoutineEnd(snapshot));
    thisScheduler.add(training_RSVPtrialRoutineBegin(snapshot));
    thisScheduler.add(training_RSVPtrialRoutineEachFrame(snapshot));
    thisScheduler.add(training_RSVPtrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function training_RSVPLoopEnd() {
  psychoJS.experiment.removeLoop(training_RSVP);

  return Scheduler.Event.NEXT;
}

function TrainingLoopEnd() {
  psychoJS.experiment.removeLoop(Training);

  return Scheduler.Event.NEXT;
}

function TrialLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Trial = new TrialHandler({
    psychoJS: psychoJS,
    nReps: $nTrials, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'Trial'
  });
  psychoJS.experiment.addLoop(Trial); // add the loop to the experiment
  currentLoop = Trial;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of Trial) {
    const snapshot = Trial.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TrialCodeRoutineBegin(snapshot));
    thisScheduler.add(TrialCodeRoutineEachFrame(snapshot));
    thisScheduler.add(TrialCodeRoutineEnd(snapshot));
    const RSVPLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(RSVPLoopBegin, RSVPLoopScheduler);
    thisScheduler.add(RSVPLoopScheduler);
    thisScheduler.add(RSVPLoopEnd);
    thisScheduler.add(ResponseT1RoutineBegin(snapshot));
    thisScheduler.add(ResponseT1RoutineEachFrame(snapshot));
    thisScheduler.add(ResponseT1RoutineEnd(snapshot));
    thisScheduler.add(ResponseT2RoutineBegin(snapshot));
    thisScheduler.add(ResponseT2RoutineEachFrame(snapshot));
    thisScheduler.add(ResponseT2RoutineEnd(snapshot));
    thisScheduler.add(ContSpaceRoutineBegin(snapshot));
    thisScheduler.add(ContSpaceRoutineEachFrame(snapshot));
    thisScheduler.add(ContSpaceRoutineEnd(snapshot));
    thisScheduler.add(BlankRoutineBegin(snapshot));
    thisScheduler.add(BlankRoutineEachFrame(snapshot));
    thisScheduler.add(BlankRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function RSVPLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  RSVP = new TrialHandler({
    psychoJS: psychoJS,
    nReps: $nStimuli, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'RSVP'
  });
  psychoJS.experiment.addLoop(RSVP); // add the loop to the experiment
  currentLoop = RSVP;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRSVP of RSVP) {
    const snapshot = RSVP.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(RSVPcodeRoutineBegin(snapshot));
    thisScheduler.add(RSVPcodeRoutineEachFrame(snapshot));
    thisScheduler.add(RSVPcodeRoutineEnd(snapshot));
    thisScheduler.add(RSVPTrialRoutineBegin(snapshot));
    thisScheduler.add(RSVPTrialRoutineEachFrame(snapshot));
    thisScheduler.add(RSVPTrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}

function RSVPLoopEnd() {
  psychoJS.experiment.removeLoop(RSVP);

  return Scheduler.Event.NEXT;
}

function TrialLoopEnd() {
  psychoJS.experiment.removeLoop(Trial);

  return Scheduler.Event.NEXT;
}

function training_TrialCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_TrialCode'-------
    t = 0;
    training_TrialCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Lag = 5;
    random.shuffle(T1lags);
    T1lag = T1lags[0];
    T1 = T1order[trainingNums[trainingTrialNumber]];
    T2 = T2order[trainingNums[trainingTrialNumber]];
    T1correct = T1.slice(0, 2);
    T2correct = T2.slice(0, 2);
    random.shuffle(distractors);
    dIndex = 0;
    r = 0;
    
    // keep track of which components have finished
    training_TrialCodeComponents = [];
    
    for (const thisComponent of training_TrialCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function training_TrialCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_TrialCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_TrialCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_TrialCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_TrialCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_TrialCode'-------
    for (const thisComponent of training_TrialCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    trialNumber = (trialNumber + 1);
    thisExp.addData("Lag", Lag);
    thisExp.addData("Valence", Valence);
    thisExp.addData("CDI_position", CDIposition);
    thisExp.addData("T1", T1);
    thisExp.addData("T2", T2);
    thisExp.addData("CDI", CDI);
    thisExp.addData("T1lag", T1lag);
    thisExp.addData("T1_correct_answer", T1correct);
    thisExp.addData("T2_correct_answer", T2correct);
    
    // the Routine "training_TrialCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trainingRSVPcodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainingRSVPcode'-------
    t = 0;
    trainingRSVPcodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RSVPstream = [];
    if ((r === T1lag)) {
        stimWord = T1;
        stimColor = "lime";
    } else {
        if ((r === (T1lag + Lag))) {
            stimWord = T2;
            stimColor = "lime";
        } else {
            if ((r === (T1lag + CDIposition))) {
                stimWord = CDI;
                stimColor = "white";
            } else {
                stimWord = distractors[dIndex];
                stimColor = "white";
                dIndex = (dIndex + 1);
                RSVPstream.append(stimWord);
            }
        }
    }
    
    // keep track of which components have finished
    trainingRSVPcodeComponents = [];
    
    for (const thisComponent of trainingRSVPcodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trainingRSVPcodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainingRSVPcode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainingRSVPcodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingRSVPcodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainingRSVPcodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainingRSVPcode'-------
    for (const thisComponent of trainingRSVPcodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    r = (r + 1);
    thisExp.addData("RSVP_stream", RSVPstream);
    
    // the Routine "trainingRSVPcode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function training_RSVPtrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_RSVPtrial'-------
    t = 0;
    training_RSVPtrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    training_RSVPtrialComponents = [];
    training_RSVPtrialComponents.push(textRSVP_training);
    
    for (const thisComponent of training_RSVPtrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function training_RSVPtrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_RSVPtrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_RSVPtrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textRSVP_training* updates
    if (t >= 0.0 && textRSVP_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textRSVP_training.tStart = t;  // (not accounting for frame time here)
      textRSVP_training.frameNStart = frameN;  // exact frame index
      
      textRSVP_training.setAutoDraw(true);
    }

    frameRemains = 0.0 + trainingStimTime - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textRSVP_training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textRSVP_training.setAutoDraw(false);
    }
    
    if (textRSVP_training.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textRSVP_training.setColor(new util.Color(stimColor));
      textRSVP_training.setText(stimWord);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_RSVPtrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_RSVPtrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_RSVPtrial'-------
    for (const thisComponent of training_RSVPtrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "training_RSVPtrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function training_ResponseT1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_ResponseT1'-------
    t = 0;
    training_ResponseT1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyT1_training.keys = undefined;
    keyT1_training.rt = undefined;
    _keyT1_training_allKeys = [];
    respT1 = "";
    textT1stop = 3000000;
    
    // keep track of which components have finished
    training_ResponseT1Components = [];
    training_ResponseT1Components.push(textT1_training);
    training_ResponseT1Components.push(keyT1_training);
    training_ResponseT1Components.push(textResp1__training);
    
    for (const thisComponent of training_ResponseT1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function training_ResponseT1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_ResponseT1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_ResponseT1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textT1_training* updates
    if (t >= 0.0 && textT1_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textT1_training.tStart = t;  // (not accounting for frame time here)
      textT1_training.frameNStart = frameN;  // exact frame index
      
      textT1_training.setAutoDraw(true);
    }

    
    // *keyT1_training* updates
    if (t >= 0.0 && keyT1_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyT1_training.tStart = t;  // (not accounting for frame time here)
      keyT1_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyT1_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyT1_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyT1_training.clearEvents(); });
    }

    if (keyT1_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyT1_training.getKeys({keyList: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _keyT1_training_allKeys = _keyT1_training_allKeys.concat(theseKeys);
      if (_keyT1_training_allKeys.length > 0) {
        keyT1_training.keys = _keyT1_training_allKeys.map((key) => key.name);  // storing all keys
        keyT1_training.rt = _keyT1_training_allKeys.map((key) => key.rt);
      }
    }
    
    if ((keyT1.keys.length === 1)) {
        respT1 = "".join(keyT1.keys);
    } else {
        if ((keyT1.keys.length === 2)) {
            respT1 = "".join(keyT1.keys);
            textT1stop = Number.parseInt((0.5 + t));
            thisExp.addData("T1_response", respT1);
        }
    }
    if ((t > textT1stop)) {
        continueRoutine = false;
    }
    
    
    // *textResp1__training* updates
    if (t >= 0.0 && textResp1__training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textResp1__training.tStart = t;  // (not accounting for frame time here)
      textResp1__training.frameNStart = frameN;  // exact frame index
      
      textResp1__training.setAutoDraw(true);
    }

    frameRemains = textT1stop  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textResp1__training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textResp1__training.setAutoDraw(false);
    }
    
    if (textResp1__training.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textResp1__training.setText(respT1_training);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_ResponseT1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_ResponseT1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_ResponseT1'-------
    for (const thisComponent of training_ResponseT1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyT1_training.keys', keyT1_training.keys);
    if (typeof keyT1_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyT1_training.rt', keyT1_training.rt);
        }
    
    keyT1_training.stop();
    if ((respT1 === T1correct)) {
        T1accuracy = 1;
        T1acc.append(1);
    } else {
        T1accuracy = 0;
        T1acc.append(0);
    }
    thisExp.addData("T1_accuracy", T1accuracy);
    
    // the Routine "training_ResponseT1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function training_ResponseT2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training_ResponseT2'-------
    t = 0;
    training_ResponseT2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyT2_training.keys = undefined;
    keyT2_training.rt = undefined;
    _keyT2_training_allKeys = [];
    respT1 = "";
    textT1stop = 3000000;
    
    // keep track of which components have finished
    training_ResponseT2Components = [];
    training_ResponseT2Components.push(textT2_training);
    training_ResponseT2Components.push(keyT2_training);
    training_ResponseT2Components.push(textResp2__training);
    
    for (const thisComponent of training_ResponseT2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function training_ResponseT2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training_ResponseT2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = training_ResponseT2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textT2_training* updates
    if (t >= 0.0 && textT2_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textT2_training.tStart = t;  // (not accounting for frame time here)
      textT2_training.frameNStart = frameN;  // exact frame index
      
      textT2_training.setAutoDraw(true);
    }

    
    // *keyT2_training* updates
    if (t >= 0.0 && keyT2_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyT2_training.tStart = t;  // (not accounting for frame time here)
      keyT2_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyT2_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyT2_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyT2_training.clearEvents(); });
    }

    if (keyT2_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyT2_training.getKeys({keyList: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _keyT2_training_allKeys = _keyT2_training_allKeys.concat(theseKeys);
      if (_keyT2_training_allKeys.length > 0) {
        keyT2_training.keys = _keyT2_training_allKeys.map((key) => key.name);  // storing all keys
        keyT2_training.rt = _keyT2_training_allKeys.map((key) => key.rt);
      }
    }
    
    if ((keyT1.keys.length === 1)) {
        respT1 = "".join(keyT1.keys);
    } else {
        if ((keyT1.keys.length === 2)) {
            respT1 = "".join(keyT1.keys);
            textT1stop = Number.parseInt((0.5 + t));
            thisExp.addData("T1_response", respT1);
        }
    }
    if ((t > textT1stop)) {
        continueRoutine = false;
    }
    
    
    // *textResp2__training* updates
    if (t >= 0.0 && textResp2__training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textResp2__training.tStart = t;  // (not accounting for frame time here)
      textResp2__training.frameNStart = frameN;  // exact frame index
      
      textResp2__training.setAutoDraw(true);
    }

    frameRemains = textT2stop  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textResp2__training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textResp2__training.setAutoDraw(false);
    }
    
    if (textResp2__training.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textResp2__training.setText(respT2_training);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of training_ResponseT2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_ResponseT2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training_ResponseT2'-------
    for (const thisComponent of training_ResponseT2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyT2_training.keys', keyT2_training.keys);
    if (typeof keyT2_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyT2_training.rt', keyT2_training.rt);
        }
    
    keyT2_training.stop();
    if ((respT1 === T1correct)) {
        T1accuracy = 1;
        T1acc.append(1);
    } else {
        T1accuracy = 0;
        T1acc.append(0);
    }
    thisExp.addData("T1_accuracy", T1accuracy);
    
    // the Routine "training_ResponseT2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function trainingResultsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trainingResults'-------
    t = 0;
    trainingResultsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if (((T1accuracy_training === 1) && (T2accuracy_training === 1))) {
        accuracy = "correct!";
        accColor = "lime";
        trainingNumCorrect = (trainingNumCorrect + 1);
        trainingStimTime = (trainingStimTime - 0.075);
    } else {
        accuracy = "incorrect.";
        accColor = "red";
        trainingNumCorrect = 0;
    }
    theirResp = ((respT1_training + "     ") + respT2_training);
    corrAnswer = ((((((((T1 + " (") + T1correct) + ")") + "     ") + T2) + " (") + T2correct) + ")");
    streak = (trainingNumCorrect.toString() + "/5");
    
    textTraining_accuracy.setColor(new util.Color(accColor));
    textTraining_accuracy.setText(accuracy);
    textTraining_theirResp.setColor(new util.Color(accColor));
    textTraining_theirResp.setText(theirResp);
    textTraining_corrAnswer.setText(corrAnswer);
    textTraining_streak.setColor(new util.Color(accColor));
    textTraining_streak.setText(streak);
    keySpaceTraining.keys = undefined;
    keySpaceTraining.rt = undefined;
    _keySpaceTraining_allKeys = [];
    // keep track of which components have finished
    trainingResultsComponents = [];
    trainingResultsComponents.push(textTraining_youwere);
    trainingResultsComponents.push(textTraining_accuracy);
    trainingResultsComponents.push(textTraining_yourResp);
    trainingResultsComponents.push(textTraining_theirResp);
    trainingResultsComponents.push(textTraining_corrResp);
    trainingResultsComponents.push(textTraining_corrAnswer);
    trainingResultsComponents.push(textTraining_yourStreak);
    trainingResultsComponents.push(textTraining_streak);
    trainingResultsComponents.push(textTraining_space);
    trainingResultsComponents.push(keySpaceTraining);
    
    for (const thisComponent of trainingResultsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function trainingResultsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trainingResults'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainingResultsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textTraining_youwere* updates
    if (t >= 0.0 && textTraining_youwere.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_youwere.tStart = t;  // (not accounting for frame time here)
      textTraining_youwere.frameNStart = frameN;  // exact frame index
      
      textTraining_youwere.setAutoDraw(true);
    }

    
    // *textTraining_accuracy* updates
    if (t >= 0.0 && textTraining_accuracy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_accuracy.tStart = t;  // (not accounting for frame time here)
      textTraining_accuracy.frameNStart = frameN;  // exact frame index
      
      textTraining_accuracy.setAutoDraw(true);
    }

    
    // *textTraining_yourResp* updates
    if (t >= 0.0 && textTraining_yourResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_yourResp.tStart = t;  // (not accounting for frame time here)
      textTraining_yourResp.frameNStart = frameN;  // exact frame index
      
      textTraining_yourResp.setAutoDraw(true);
    }

    
    // *textTraining_theirResp* updates
    if (t >= 0.0 && textTraining_theirResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_theirResp.tStart = t;  // (not accounting for frame time here)
      textTraining_theirResp.frameNStart = frameN;  // exact frame index
      
      textTraining_theirResp.setAutoDraw(true);
    }

    
    // *textTraining_corrResp* updates
    if (t >= 0.0 && textTraining_corrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_corrResp.tStart = t;  // (not accounting for frame time here)
      textTraining_corrResp.frameNStart = frameN;  // exact frame index
      
      textTraining_corrResp.setAutoDraw(true);
    }

    
    // *textTraining_corrAnswer* updates
    if (t >= 0.0 && textTraining_corrAnswer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_corrAnswer.tStart = t;  // (not accounting for frame time here)
      textTraining_corrAnswer.frameNStart = frameN;  // exact frame index
      
      textTraining_corrAnswer.setAutoDraw(true);
    }

    
    // *textTraining_yourStreak* updates
    if (t >= 0.0 && textTraining_yourStreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_yourStreak.tStart = t;  // (not accounting for frame time here)
      textTraining_yourStreak.frameNStart = frameN;  // exact frame index
      
      textTraining_yourStreak.setAutoDraw(true);
    }

    
    // *textTraining_streak* updates
    if (t >= 0.0 && textTraining_streak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_streak.tStart = t;  // (not accounting for frame time here)
      textTraining_streak.frameNStart = frameN;  // exact frame index
      
      textTraining_streak.setAutoDraw(true);
    }

    
    // *textTraining_space* updates
    if (t >= 0.0 && textTraining_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textTraining_space.tStart = t;  // (not accounting for frame time here)
      textTraining_space.frameNStart = frameN;  // exact frame index
      
      textTraining_space.setAutoDraw(true);
    }

    
    // *keySpaceTraining* updates
    if (t >= 0.5 && keySpaceTraining.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keySpaceTraining.tStart = t;  // (not accounting for frame time here)
      keySpaceTraining.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keySpaceTraining.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keySpaceTraining.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keySpaceTraining.clearEvents(); });
    }

    if (keySpaceTraining.status === PsychoJS.Status.STARTED) {
      let theseKeys = keySpaceTraining.getKeys({keyList: ['space'], waitRelease: false});
      _keySpaceTraining_allKeys = _keySpaceTraining_allKeys.concat(theseKeys);
      if (_keySpaceTraining_allKeys.length > 0) {
        keySpaceTraining.keys = _keySpaceTraining_allKeys[_keySpaceTraining_allKeys.length - 1].name;  // just the last key pressed
        keySpaceTraining.rt = _keySpaceTraining_allKeys[_keySpaceTraining_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingResultsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trainingResultsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trainingResults'-------
    for (const thisComponent of trainingResultsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keySpaceTraining.keys', keySpaceTraining.keys);
    if (typeof keySpaceTraining.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keySpaceTraining.rt', keySpaceTraining.rt);
        routineTimer.reset();
        }
    
    keySpaceTraining.stop();
    // the Routine "trainingResults" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function experimentInstructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'experimentInstructions'-------
    t = 0;
    experimentInstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    textExpInstructions.setText("You have completed the training portion of the experiment and are about to begin the real experiment. You will no longer be given feedback at the end of each trial. Please remember to say the whole words you saw out-loud when you're typing in the first two letters of the words. Also, please make sure to try your best during the entire experiment.");
    keyExpStart.keys = undefined;
    keyExpStart.rt = undefined;
    _keyExpStart_allKeys = [];
    // keep track of which components have finished
    experimentInstructionsComponents = [];
    experimentInstructionsComponents.push(textExpInstructions);
    experimentInstructionsComponents.push(textSpaceBegin);
    experimentInstructionsComponents.push(keyExpStart);
    
    for (const thisComponent of experimentInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function experimentInstructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'experimentInstructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = experimentInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textExpInstructions* updates
    if (t >= 0.0 && textExpInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textExpInstructions.tStart = t;  // (not accounting for frame time here)
      textExpInstructions.frameNStart = frameN;  // exact frame index
      
      textExpInstructions.setAutoDraw(true);
    }

    
    // *textSpaceBegin* updates
    if (t >= 5 && textSpaceBegin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textSpaceBegin.tStart = t;  // (not accounting for frame time here)
      textSpaceBegin.frameNStart = frameN;  // exact frame index
      
      textSpaceBegin.setAutoDraw(true);
    }

    
    // *keyExpStart* updates
    if (t >= 5 && keyExpStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyExpStart.tStart = t;  // (not accounting for frame time here)
      keyExpStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyExpStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyExpStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyExpStart.clearEvents(); });
    }

    if (keyExpStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyExpStart.getKeys({keyList: ['space'], waitRelease: false});
      _keyExpStart_allKeys = _keyExpStart_allKeys.concat(theseKeys);
      if (_keyExpStart_allKeys.length > 0) {
        keyExpStart.keys = _keyExpStart_allKeys[_keyExpStart_allKeys.length - 1].name;  // just the last key pressed
        keyExpStart.rt = _keyExpStart_allKeys[_keyExpStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experimentInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function experimentInstructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'experimentInstructions'-------
    for (const thisComponent of experimentInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyExpStart.keys', keyExpStart.keys);
    if (typeof keyExpStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyExpStart.rt', keyExpStart.rt);
        routineTimer.reset();
        }
    
    keyExpStart.stop();
    // the Routine "experimentInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function TrialCodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'TrialCode'-------
    t = 0;
    TrialCodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    num = condNums[trialNumber];
    Lag = allLags[num];
    Valence = allVal[num];
    if ((Lag === 2)) {
        CDIposition = 1;
    } else {
        CDIposition = allCDIpos[condNums[trialNumber]];
    }
    random.shuffle(T1lags);
    T1lag = T1lags[0];
    T1 = T1order[trialNumber];
    T2 = T2order[trialNumber];
    T1correct = [(T1[0] + T1[1])];
    T2correct = [(T2[0] + T2[1])];
    if ((Valence === 1)) {
        CDI = Norder[nCDIi];
        nCDIi = (nCDIi + 1);
    } else {
        if ((Valence === 2)) {
            CDI = Porder[pCDIi];
            pCDIi = (pCDIi + 1);
        } else {
            CDI = Uorder[uCDIi];
            uCDIi = (uCDIi + 1);
        }
    }
    random.shuffle(distractors);
    dIndex = 0;
    r = 0;
    console.log(T1, T1correct, T2, T2correct);
    
    // keep track of which components have finished
    TrialCodeComponents = [];
    
    for (const thisComponent of TrialCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function TrialCodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'TrialCode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TrialCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function TrialCodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'TrialCode'-------
    for (const thisComponent of TrialCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    trialNumber = (trialNumber + 1);
    thisExp.addData("Lag", Lag);
    thisExp.addData("Valence", Valence);
    thisExp.addData("CDI_position", CDIposition);
    thisExp.addData("T1", T1);
    thisExp.addData("T2", T2);
    thisExp.addData("CDI", CDI);
    thisExp.addData("T1lag", T1lag);
    thisExp.addData("T1_correct_answer", T1correct);
    thisExp.addData("T2_correct_answer", T2correct);
    
    // the Routine "TrialCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function RSVPcodeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RSVPcode'-------
    t = 0;
    RSVPcodeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RSVPstream = [];
    if ((r === T1lag)) {
        stimWord = T1;
        stimColor = "lime";
    } else {
        if ((r === (T1lag + Lag))) {
            stimWord = T2;
            stimColor = "lime";
        } else {
            if ((r === (T1lag + CDIposition))) {
                stimWord = CDI;
                stimColor = "white";
            } else {
                stimWord = distractors[dIndex];
                stimColor = "white";
                dIndex = (dIndex + 1);
                RSVPstream.append(stimWord);
            }
        }
    }
    
    // keep track of which components have finished
    RSVPcodeComponents = [];
    
    for (const thisComponent of RSVPcodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function RSVPcodeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RSVPcode'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RSVPcodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RSVPcodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RSVPcodeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RSVPcode'-------
    for (const thisComponent of RSVPcodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    r = (r + 1);
    thisExp.addData("RSVP_stream", RSVPstream);
    
    // the Routine "RSVPcode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function RSVPTrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'RSVPTrial'-------
    t = 0;
    RSVPTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    RSVPTrialComponents = [];
    RSVPTrialComponents.push(textRSVP);
    
    for (const thisComponent of RSVPTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function RSVPTrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'RSVPTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RSVPTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textRSVP* updates
    if (t >= 0.0 && textRSVP.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textRSVP.tStart = t;  // (not accounting for frame time here)
      textRSVP.frameNStart = frameN;  // exact frame index
      
      textRSVP.setAutoDraw(true);
    }

    if (textRSVP.status === PsychoJS.Status.STARTED && frameN >= (textRSVP.frameNStart + stimFrames)) {
      textRSVP.setAutoDraw(false);
    }
    
    if (textRSVP.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textRSVP.setColor(new util.Color(stimColor));
      textRSVP.setText(stimWord);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RSVPTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RSVPTrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'RSVPTrial'-------
    for (const thisComponent of RSVPTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "RSVPTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ResponseT1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ResponseT1'-------
    t = 0;
    ResponseT1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyT1.keys = undefined;
    keyT1.rt = undefined;
    _keyT1_allKeys = [];
    respT1 = "";
    textT1stop = 3000000;
    
    // keep track of which components have finished
    ResponseT1Components = [];
    ResponseT1Components.push(textT1);
    ResponseT1Components.push(keyT1);
    ResponseT1Components.push(textResp1);
    
    for (const thisComponent of ResponseT1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ResponseT1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ResponseT1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ResponseT1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textT1* updates
    if (t >= 0.0 && textT1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textT1.tStart = t;  // (not accounting for frame time here)
      textT1.frameNStart = frameN;  // exact frame index
      
      textT1.setAutoDraw(true);
    }

    
    // *keyT1* updates
    if (t >= 0.0 && keyT1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyT1.tStart = t;  // (not accounting for frame time here)
      keyT1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyT1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyT1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyT1.clearEvents(); });
    }

    if (keyT1.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyT1.getKeys({keyList: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _keyT1_allKeys = _keyT1_allKeys.concat(theseKeys);
      if (_keyT1_allKeys.length > 0) {
        keyT1.keys = _keyT1_allKeys.map((key) => key.name);  // storing all keys
        keyT1.rt = _keyT1_allKeys.map((key) => key.rt);
      }
    }
    
    if ((keyT1.keys.length === 1)) {
        respT1 = "".join(keyT1.keys);
    } else {
        if ((keyT1.keys.length === 2)) {
            respT1 = "".join(keyT1.keys);
            textT1stop = Number.parseInt((0.5 + t));
            thisExp.addData("T1_response", respT1);
        }
    }
    if ((t > textT1stop)) {
        continueRoutine = false;
    }
    
    
    // *textResp1* updates
    if (t >= 0.0 && textResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textResp1.tStart = t;  // (not accounting for frame time here)
      textResp1.frameNStart = frameN;  // exact frame index
      
      textResp1.setAutoDraw(true);
    }

    frameRemains = textT1stop  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textResp1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textResp1.setAutoDraw(false);
    }
    
    if (textResp1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textResp1.setText(respT1);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResponseT1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ResponseT1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ResponseT1'-------
    for (const thisComponent of ResponseT1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyT1.keys', keyT1.keys);
    if (typeof keyT1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyT1.rt', keyT1.rt);
        }
    
    keyT1.stop();
    if ((respT1 === T1correct)) {
        T1accuracy = 1;
        T1acc.append(1);
    } else {
        T1accuracy = 0;
        T1acc.append(0);
    }
    thisExp.addData("T1_accuracy", T1accuracy);
    
    // the Routine "ResponseT1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ResponseT2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ResponseT2'-------
    t = 0;
    ResponseT2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyT2.keys = undefined;
    keyT2.rt = undefined;
    _keyT2_allKeys = [];
    respT2 = "";
    textT2stop = 3000000;
    
    // keep track of which components have finished
    ResponseT2Components = [];
    ResponseT2Components.push(textT2);
    ResponseT2Components.push(keyT2);
    ResponseT2Components.push(textResp2);
    
    for (const thisComponent of ResponseT2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ResponseT2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ResponseT2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ResponseT2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textT2* updates
    if (t >= 0.0 && textT2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textT2.tStart = t;  // (not accounting for frame time here)
      textT2.frameNStart = frameN;  // exact frame index
      
      textT2.setAutoDraw(true);
    }

    
    // *keyT2* updates
    if (t >= 0.0 && keyT2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyT2.tStart = t;  // (not accounting for frame time here)
      keyT2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyT2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyT2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyT2.clearEvents(); });
    }

    if (keyT2.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyT2.getKeys({keyList: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'return'], waitRelease: false});
      _keyT2_allKeys = _keyT2_allKeys.concat(theseKeys);
      if (_keyT2_allKeys.length > 0) {
        keyT2.keys = _keyT2_allKeys.map((key) => key.name);  // storing all keys
        keyT2.rt = _keyT2_allKeys.map((key) => key.rt);
      }
    }
    
    if ((keyT2.keys.length === 1)) {
        respT2 = "".join(keyT2.keys);
    } else {
        if ((keyT2.keys.length === 2)) {
            respT2 = "".join(keyT2.keys);
            textT2stop = Number.parseInt((0.5 + t));
            thisExp.addData("T2_response", respT2);
        }
    }
    if ((t > textT2stop)) {
        continueRoutine = false;
    }
    
    
    // *textResp2* updates
    if (t >= 0.0 && textResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textResp2.tStart = t;  // (not accounting for frame time here)
      textResp2.frameNStart = frameN;  // exact frame index
      
      textResp2.setAutoDraw(true);
    }

    frameRemains = 0.0 + textT2stop - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textResp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textResp2.setAutoDraw(false);
    }
    
    if (textResp2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      textResp2.setText(respT2);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResponseT2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ResponseT2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ResponseT2'-------
    for (const thisComponent of ResponseT2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyT2.keys', keyT2.keys);
    if (typeof keyT2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyT2.rt', keyT2.rt);
        }
    
    keyT2.stop();
    if ((respT2 === T2correct)) {
        T2accuracy = 1;
        T2acc.append(1);
    } else {
        T2accuracy = 0;
        T2acc.append(0);
    }
    thisExp.addData("T2_accuracy", T2accuracy);
    
    // the Routine "ResponseT2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ContSpaceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ContSpace'-------
    t = 0;
    ContSpaceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keySpace.keys = undefined;
    keySpace.rt = undefined;
    _keySpace_allKeys = [];
    // keep track of which components have finished
    ContSpaceComponents = [];
    ContSpaceComponents.push(textSpaceCont);
    ContSpaceComponents.push(keySpace);
    
    for (const thisComponent of ContSpaceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ContSpaceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ContSpace'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ContSpaceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textSpaceCont* updates
    if (t >= 0.0 && textSpaceCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textSpaceCont.tStart = t;  // (not accounting for frame time here)
      textSpaceCont.frameNStart = frameN;  // exact frame index
      
      textSpaceCont.setAutoDraw(true);
    }

    
    // *keySpace* updates
    if (t >= 0.0 && keySpace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keySpace.tStart = t;  // (not accounting for frame time here)
      keySpace.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keySpace.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keySpace.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keySpace.clearEvents(); });
    }

    if (keySpace.status === PsychoJS.Status.STARTED) {
      let theseKeys = keySpace.getKeys({keyList: ['space'], waitRelease: false});
      _keySpace_allKeys = _keySpace_allKeys.concat(theseKeys);
      if (_keySpace_allKeys.length > 0) {
        keySpace.keys = _keySpace_allKeys[_keySpace_allKeys.length - 1].name;  // just the last key pressed
        keySpace.rt = _keySpace_allKeys[_keySpace_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ContSpaceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ContSpaceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ContSpace'-------
    for (const thisComponent of ContSpaceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keySpace.keys', keySpace.keys);
    if (typeof keySpace.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keySpace.rt', keySpace.rt);
        routineTimer.reset();
        }
    
    keySpace.stop();
    // the Routine "ContSpace" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}

function ThankYouRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ThankYou'-------
    t = 0;
    ThankYouClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ThankYouComponents = [];
    ThankYouComponents.push(textThanks);
    
    for (const thisComponent of ThankYouComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}

function ThankYouRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ThankYou'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ThankYouClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textThanks* updates
    if (t >= 0.0 && textThanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textThanks.tStart = t;  // (not accounting for frame time here)
      textThanks.frameNStart = frameN;  // exact frame index
      
      textThanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textThanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textThanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThankYouComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ThankYouRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ThankYou'-------
    for (const thisComponent of ThankYouComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}

function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
