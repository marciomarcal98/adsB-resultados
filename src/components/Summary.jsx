import { Rectangle } from "./Rectangle";

import iconMemory from '../assets/icon-memory.svg'
import iconReaction from '../assets/icon-reaction.svg'
import iconVerbal from '../assets/icon-verbal.svg'
import iconVisual from '../assets/icon-visual.svg'

export function Summary() {
    return (
        <section>
            <h2>Summary</h2>

            <Rectangle icon={iconReaction} type={"Reaction"} number={80} />
            <Rectangle icon={iconMemory} type={"Memory"} number={92} />
            <Rectangle type={"Verbal"} number={61} icon={iconVerbal} />
            <Rectangle type={"Visual"} number={73} icon={iconVisual} />

            <button>Continue</button>
        </section>
    )
}