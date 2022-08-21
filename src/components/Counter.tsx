type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
const Counter = ({count, onIncrease, onDecrease}: CounterProps) => {
    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={onIncrease}> +1 </button>
            <button onClick={onDecrease}> -1 </button>
        </div>
    )
}
export default Counter;