import React, { useContext } from "react"
import { UserContext } from "../../context/UserContext/UserProvider"
import { useUserStore } from "../../Stores/userStore"

type HeaderProps = {
    variant?: string
    as?: string
}

const Tag = ({ tagName, children, ...props }: any) => (
    React.createElement(tagName, props, children)
)

export function Typographic({ as = 'h1' }: HeaderProps) {

    const user = useContext(UserContext)
    const title = useUserStore((state) => state.title)

    return <Tag tagName={as} className="foo">{title}</Tag>
}