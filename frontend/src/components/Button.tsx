export const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    return <button className={`px-8 py-4 bg-green-400 rounded-lg font-bold hover:bg-green-800 hover:scale-95 transition-all`} onClick={onClick}>
        { children }
    </button>
}