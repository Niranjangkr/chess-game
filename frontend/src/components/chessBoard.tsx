import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

const ChessBoard = ({ board, socket, setBoard, chess }: {
  chess: any;
  setBoard: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}
) => {
  const [from, setFrom] = useState<Square | null>(null);

  return (
    <div className="bg-white">
      {
        Array.isArray(board) && board.map((row, i) => {
          return <div key={i} className="flex">
            {
              row.map((square, j) => {
                const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;

                return <div key={j}
                  className={`w-16 h-16 ${(i + j) % 2 === 0 ? "bg-green-500" : "bg-slate-200"}`}
                  onClick={() => {
                    if (!from) {
                      setFrom(squareRepresentation);
                    } else {
                      socket.send(JSON.stringify({
                        type: MOVE,
                        payload: {
                          move: {
                            from,
                            to: squareRepresentation
                          }
                        }
                      }))
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepresentation
                      });
                      setBoard(chess.board())
                      console.log({
                        from,
                        to: squareRepresentation
                      })
                    }
                  }}
                >
                  <div className="w-full h-full flex justify-center">
                    <div className="h-full justify-center flex flex-col">
                      {square ? <img className="w-6" src={`/pieces/${square.color === "b"? square.type : `${square.type.toUpperCase()} copy`}.png`} /> : null}
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        })
      }
    </div>
  )
}

export default ChessBoard