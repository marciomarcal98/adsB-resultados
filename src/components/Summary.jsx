import { Rectangle } from "./Rectangle";

import iconMemory from '../assets/icon-memory.svg'

export function Summary() {
    return (
        <section>
            <h2>Summary</h2>

            <Rectangle icon={iconMemory} type={"Reaction"} number={80} />
            <Rectangle type={"Memory"} number={92} />
            <Rectangle type={"Verbal"} number={61} />
            <Rectangle type={"Visual"} number={73} />
        </section>
    )
}