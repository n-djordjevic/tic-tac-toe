const gameBoard = (() => {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    const gameState = () => {
        const container = document.getElementById('test');
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let j = 0; j < row.length; j++) {
                const element = row[j];
                let e = document.createElement('button');
                e.id = i.toString().concat(j.toString());
                e.className = "btn";
                container.appendChild(e);
                e.innerText = element;
            }
            container.appendChild(document.createElement('br'));
        }
    }
    const getBoard = () => board;
    return {board, gameState, getBoard}
})();

const player = (name, marker) => {
    const mark = (marker, gameBoard) => {

    }
    const getName = () => name;
}

const gm = (player1, player2, gameBoard) => {
    let b = document.getElementsByClassName('btn')
    const mark = (player, gameBoard) => {
        
    }
    const events = () => {
        Array.from(b).forEach(btn => {
            btn.addEventListener("click", mark);
        });
    }
    return {events};
}

gameBoard.gameState();
const player1 = player("niks", "x");
const player2 = player("diks", "o");
const gameMaster = gm(player1, player2, gameBoard);
gameMaster.events();