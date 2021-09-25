import useAppState from './AppState'

function HoverableItem({hovered, setHovered, children}){
    return <div 
        style={{minWidth: 100, minHeight: 100, padding: 10, margin:10, outline: `1px solid ${hovered? 'red' : 'gray'}`}}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        >
            {children}
    </div>
}

function AnotherWayHoverableItem({id, children}){
    const [state, reduceState] = useAppState()
    const hovered = state[id]
    const setHovered = (value) => reduceState({id, value})


    return <div 
    style={{minWidth: 100, minHeight: 100, padding: 10, margin:10, outline: `1px solid ${hovered? 'red' : 'gray'}`}}
    onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)}
    >
        {id}
        {children}
</div>
}


export default function HoverableRoot(){
    const [state, reduceState] = useAppState()


    return <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <HoverableItem
            hovered={state[1]}
            setHovered={(value) => reduceState({id: 1, value})}
        >
            1
            <HoverableItem
                hovered={state[2]}
                setHovered={(value) => reduceState({id: 2, value})}
            >
                2
            </HoverableItem>
        </HoverableItem>

        <HoverableItem
            hovered={state[3]}
            setHovered={(value) => reduceState({id: 3, value})}
        >
            3
            <HoverableItem
                hovered={state[4]}
                setHovered={(value) => reduceState({id: 4, value})}
            >
                4
            </HoverableItem>
        </HoverableItem>
        <AnotherWayHoverableItem id={5}>
            <AnotherWayHoverableItem id={6} />
        </AnotherWayHoverableItem>
        
        <AnotherWayHoverableItem id={7}>
            <AnotherWayHoverableItem id={8} />
        </AnotherWayHoverableItem>
    </div>
}