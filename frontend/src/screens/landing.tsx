import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();
     
    return (
        <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <img src={"/chessBoard.jpg"} alt="" className="max-w-96" />
                </div>
                <div className="pt-16">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold text-white">Play Chess Online on the #2 Platform</h1>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button 
                            onClick={ () => navigate("/game") }
                        >
                            Play Online
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}