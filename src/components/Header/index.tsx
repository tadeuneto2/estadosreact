import { BearCounter } from "../../App"
import { useUserStore } from "../../Stores/userStore"
import { Typographic } from "../../designSystem/Typographic"


export function HeaderComponent() {
    const title = useUserStore((state) => state.title)

    return <>
    <BearCounter />
    <span>{title}</span>
    <Typographic />
    </>
}