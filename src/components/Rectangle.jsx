export function Rectangle({ type, number, icon }) {
    return (
        <div>
            <img src={icon} alt="" />
            <span>{type}</span>
            <strong>{number} / 100</strong>
        </div>
    )
}