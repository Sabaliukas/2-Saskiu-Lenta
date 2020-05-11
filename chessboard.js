"use strict";

function renderChessboard( size ) {
    let HTML = '';
    const DOMchessboard = document.querySelector( '.chessboard');

    //validacija

    // logika
    HTML =`
            <div class="row" style="height: 25%;">
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
            </div>
            <div class="row" style="height: 25%;">
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
            </div>
            <div class="row" style="height: 25%;">
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
            </div>
            <div class="row" style="height: 25%;">
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
                <div class="cell white" style="width: 25%;"></div>
                <div class="cell black" style="width: 25%;"></div>
        </div> `;
    DOMchessboard.innerHTML = HTML
    
    return;
}

renderChessboard( 8 )