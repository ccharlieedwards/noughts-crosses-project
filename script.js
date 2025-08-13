let popup = document.getElementById('popup')
let turn = Number(1)
let TL = Number(0),
    TM = Number(0),
    TR = Number(0),
    ML = Number(0),
    MM = Number(0),
    MR = Number(0),
    BL = Number(0),
    BM = Number(0),
    BR = Number(0);
let drawcalculator = Number(0);

function openPopup(){
  popupTL.classList.add('open-popup')
  popupTM.classList.add('open-popup')
  popupTR.classList.add('open-popup')
  popupML.classList.add('open-popup')
  popupMM.classList.add('open-popup')
  popupMR.classList.add('open-popup')
  popupBL.classList.add('open-popup')
  popupBM.classList.add('open-popup')
  popupBR.classList.add('open-popup')
  WhiteBackgroundBox.classList.add('open-popup')
  ButtonTL.classList.add('open-popup')
  ButtonTM.classList.add('open-popup')
  ButtonTR.classList.add('open-popup')
  ButtonML.classList.add('open-popup')
  ButtonMM.classList.add('open-popup')
  ButtonMR.classList.add('open-popup')
  ButtonBL.classList.add('open-popup')
  ButtonBM.classList.add('open-popup')
  ButtonBR.classList.add('open-popup')
  btn.classList.add('close-start-game')
  CrossesTurn.classList.add('open-popup')
}

ButtonTL.addEventListener('click', MarkSquareTL);
ButtonTM.addEventListener('click', MarkSquareTM);
ButtonTR.addEventListener('click', MarkSquareTR);
ButtonML.addEventListener('click', MarkSquareML);
ButtonMM.addEventListener('click', MarkSquareMM);
ButtonMR.addEventListener('click', MarkSquareMR);
ButtonBL.addEventListener('click', MarkSquareBL);
ButtonBM.addEventListener('click', MarkSquareBM);
ButtonBR.addEventListener('click', MarkSquareBR);

function ClosePopupCross(){
  WinMessageCross.classList.remove('open-win-message');
  WinMessageCircle.classList.remove('open-win-message');
  DrawMessage.classList.remove('open-win-message');
  turn = Number(1);
  TL = Number(0),
  TM = Number(0),
  TR = Number(0),
  ML = Number(0),
  MM = Number(0),
  MR = Number(0),
  BL = Number(0),
  BM = Number(0),
  BR = Number(0);
  drawcalculator = Number(0);
  btn.classList.remove('close-start-game');
}

function ClosePopupDraw(){
  WinMessageCross.classList.remove('open-win-message');
  WinMessageCircle.classList.remove('open-win-message');
  DrawMessage.classList.remove('open-win-message');
  turn = Number(1);
  TL = Number(0),
  TM = Number(0),
  TR = Number(0),
  ML = Number(0),
  MM = Number(0),
  MR = Number(0),
  BL = Number(0),
  BM = Number(0),
  BR = Number(0);
  drawcalculator = Number(0);
  btn.classList.remove('close-start-game');
}

function ClosePopupCircle(){
  WinMessageCircle.classList.remove('open-win-message');
  WinMessageCross.classList.remove('open-win-message');
  DrawMessage.classList.remove('open-win-message');
  turn = Number(1);
  TL = Number(0),
  TM = Number(0),
  TR = Number(0),
  ML = Number(0),
  MM = Number(0),
  MR = Number(0),
  BL = Number(0),
  BM = Number(0),
  BR = Number(0);
  drawcalculator = Number(0);
  btn.classList.remove('close-start-game');
}

function CheckWin() {
    let TopRow = TL + TM + TR,
        MiddleRow = ML + MM + MR,
        BottomRow = BL + BM + BR,       
        LeftColumn = TL + ML + BL,
        MiddleColumn = TM + MM + BM,
        RightColumn = TR + MR + BR,
        DiagonalLtoR = TL + MM + BR,
        DiagonalRtoL = TR + MM + BL;
    drawcalculator = drawcalculator + 1;
    if (TopRow == 3 || MiddleRow == 3 || BottomRow == 3 || LeftColumn == 3 || MiddleColumn == 3 || RightColumn == 3 || DiagonalLtoR == 3 || DiagonalRtoL == 3) {
        turn = Number(3);
        WinMessageCross.classList.add('open-win-message');
        WhiteBackgroundBox.classList.remove('open-popup')
        popupTL.classList.remove('open-popup');
        popupTM.classList.remove('open-popup');
        popupTR.classList.remove('open-popup');   
        popupML.classList.remove('open-popup');
        popupMM.classList.remove('open-popup');
        popupMR.classList.remove('open-popup');
        popupBL.classList.remove('open-popup');
        popupBM.classList.remove('open-popup');
        popupBR.classList.remove('open-popup');
        ButtonTL.classList.remove('open-popup');
        ButtonTM.classList.remove('open-popup');
        ButtonTR.classList.remove('open-popup');
        ButtonML.classList.remove('open-popup');
        ButtonMM.classList.remove('open-popup');
        ButtonMR.classList.remove('open-popup');
        ButtonBL.classList.remove('open-popup');
        ButtonBM.classList.remove('open-popup');
        ButtonBR.classList.remove('open-popup');
        CrossTL.classList.remove('MarkSquare-TL');
        CrossTM.classList.remove('MarkSquare-TM');
        CrossTR.classList.remove('MarkSquare-TR');
        CrossML.classList.remove('MarkSquare-ML');
        CrossMM.classList.remove('MarkSquare-MM');
        CrossMR.classList.remove('MarkSquare-MR');
        CrossBL.classList.remove('MarkSquare-BL');
        CrossBM.classList.remove('MarkSquare-BM');
        CrossBR.classList.remove('MarkSquare-BR');
        CircleTL.classList.remove('MarkSquare-TL');
        CircleTM.classList.remove('MarkSquare-TM');
        CircleTR.classList.remove('MarkSquare-TR');
        CircleML.classList.remove('MarkSquare-ML');
        CircleMM.classList.remove('MarkSquare-MM');
        CircleMR.classList.remove('MarkSquare-MR');
        CircleBL.classList.remove('MarkSquare-BL');
        CircleBM.classList.remove('MarkSquare-BM');
        CircleBR.classList.remove('MarkSquare-BR');
        CirclesTurn.classList.remove('open-popup');
        CrossesTurn.classList.remove('open-popup');
    }   else if (TopRow == -3 || MiddleRow == -3 || BottomRow == -3 || LeftColumn == -3 || MiddleColumn == -3 || RightColumn == -3 || DiagonalLtoR == -3 || DiagonalRtoL == -3) {
        turn = Number(3);
        WinMessageCircle.classList.add('open-win-message');
        WhiteBackgroundBox.classList.remove('open-popup')
        popupTL.classList.remove('open-popup');
        popupTM.classList.remove('open-popup');
        popupTR.classList.remove('open-popup');   
        popupML.classList.remove('open-popup');
        popupMM.classList.remove('open-popup');
        popupMR.classList.remove('open-popup');
        popupBL.classList.remove('open-popup');
        popupBM.classList.remove('open-popup');
        popupBR.classList.remove('open-popup');
        ButtonTL.classList.remove('open-popup');
        ButtonTM.classList.remove('open-popup');
        ButtonTR.classList.remove('open-popup');
        ButtonML.classList.remove('open-popup');
        ButtonMM.classList.remove('open-popup');
        ButtonMR.classList.remove('open-popup');
        ButtonBL.classList.remove('open-popup');
        ButtonBM.classList.remove('open-popup');
        ButtonBR.classList.remove('open-popup');
        CrossTL.classList.remove('MarkSquare-TL');
        CrossTM.classList.remove('MarkSquare-TM');
        CrossTR.classList.remove('MarkSquare-TR');
        CrossML.classList.remove('MarkSquare-ML');
        CrossMM.classList.remove('MarkSquare-MM');
        CrossMR.classList.remove('MarkSquare-MR');
        CrossBL.classList.remove('MarkSquare-BL');
        CrossBM.classList.remove('MarkSquare-BM');
        CrossBR.classList.remove('MarkSquare-BR');
        CircleTL.classList.remove('MarkSquare-TL');
        CircleTM.classList.remove('MarkSquare-TM');
        CircleTR.classList.remove('MarkSquare-TR');
        CircleML.classList.remove('MarkSquare-ML');
        CircleMM.classList.remove('MarkSquare-MM');
        CircleMR.classList.remove('MarkSquare-MR');
        CircleBL.classList.remove('MarkSquare-BL');
        CircleBM.classList.remove('MarkSquare-BM');
        CircleBR.classList.remove('MarkSquare-BR');
        CirclesTurn.classList.remove('open-popup');
        CrossesTurn.classList.remove('open-popup');
    } else if (drawcalculator == 9) {
        DrawMessage.classlist.add('open-win-message');
        WhiteBackgroundBox.classList.remove('open-popup')
        popupTL.classList.remove('open-popup');
        popupTM.classList.remove('open-popup');
        popupTR.classList.remove('open-popup');   
        popupML.classList.remove('open-popup');
        popupMM.classList.remove('open-popup');
        popupMR.classList.remove('open-popup');
        popupBL.classList.remove('open-popup');
        popupBM.classList.remove('open-popup');
        popupBR.classList.remove('open-popup');
        ButtonTL.classList.remove('open-popup');
        ButtonTM.classList.remove('open-popup');
        ButtonTR.classList.remove('open-popup');
        ButtonML.classList.remove('open-popup');
        ButtonMM.classList.remove('open-popup');
        ButtonMR.classList.remove('open-popup');
        ButtonBL.classList.remove('open-popup');
        ButtonBM.classList.remove('open-popup');
        ButtonBR.classList.remove('open-popup');
        CrossTL.classList.remove('MarkSquare-TL');
        CrossTM.classList.remove('MarkSquare-TM');
        CrossTR.classList.remove('MarkSquare-TR');
        CrossML.classList.remove('MarkSquare-ML');
        CrossMM.classList.remove('MarkSquare-MM');
        CrossMR.classList.remove('MarkSquare-MR');
        CrossBL.classList.remove('MarkSquare-BL');
        CrossBM.classList.remove('MarkSquare-BM');
        CrossBR.classList.remove('MarkSquare-BR');
        CircleTL.classList.remove('MarkSquare-TL');
        CircleTM.classList.remove('MarkSquare-TM');
        CircleTR.classList.remove('MarkSquare-TR');
        CircleML.classList.remove('MarkSquare-ML');
        CircleMM.classList.remove('MarkSquare-MM');
        CircleMR.classList.remove('MarkSquare-MR');
        CircleBL.classList.remove('MarkSquare-BL');
        CircleBM.classList.remove('MarkSquare-BM');
        CircleBR.classList.remove('MarkSquare-BR');
        CirclesTurn.classList.remove('open-popup');
        CrossesTurn.classList.remove('open-popup');
    }
    if (turn == 1){
        CrossesTurn.classList.add('open-popup');
        CirclesTurn.classList.remove('open-popup');
    } else if (turn == 2) {
        CirclesTurn.classList.add('open-popup');
        CrossesTurn.classList.remove('open-popup');
    }
}


function MarkSquareTL() {
    if (turn == 1 && TL == 0) {
        CrossTL.classList.add('MarkSquare-TL');
        TL = Number(1);
        turn = Number(2); 
    } else if (turn == 2 && TL == 0) {
        CircleTL.classList.add('MarkSquare-TL');
        TL = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareTM() {
    if (turn == 1 && TM == 0) {
        CrossTM.classList.add('MarkSquare-TM');
        TM = Number(1);
        turn = Number(2);
    } else if (turn == 2 && TM == 0) {
        CircleTM.classList.add('MarkSquare-TM');
        TM = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareTR() {
    if (turn == 1 && TR == 0) {
        CrossTR.classList.add('MarkSquare-TR');
        TR = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && TR == 0) {
        CircleTR.classList.add('MarkSquare-TR');
        TR = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareML() {
    if (turn == 1 && ML == 0) {
        CrossML.classList.add('MarkSquare-ML');
        ML = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && ML == 0) {
        CircleML.classList.add('MarkSquare-ML');
        ML = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareMM() {
    if (turn == 1 && MM == 0) {
        CrossMM.classList.add('MarkSquare-MM');
        MM = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && MM == 0) {
        CircleMM.classList.add('MarkSquare-MM');
        MM = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareMR() {
    if (turn == 1 && MR == 0) {
        CrossMR.classList.add('MarkSquare-MR');
        MR = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && MR == 0) {
        CircleMR.classList.add('MarkSquare-MR');
        MR = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareBL() {
    if (turn == 1 && BL == 0) {
        CrossBL.classList.add('MarkSquare-BL');
        BL = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && BL == 0) {
        CircleBL.classList.add('MarkSquare-BL');
        BL = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareBM() {
    if (turn == 1 && BM == 0) {
        CrossBM.classList.add('MarkSquare-BM');
        BM = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && BM == 0) {
        CircleBM.classList.add('MarkSquare-BM');
        BM = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}

function MarkSquareBR() {
    if (turn == 1 && BR == 0) {
        CrossBR.classList.add('MarkSquare-BR');
        BR = Number(1);
        turn = Number(2);   
    } else if (turn == 2 && BR == 0) {
        CircleBR.classList.add('MarkSquare-BR');
        BR = Number(-1);
        turn = Number(1);
    }
    CheckWin();
}


