import useAppState from './AppState'


export default function PrintState(){

    const [state] = useAppState()

    return <pre>
        {JSON.stringify(state, null, 2)}
    </pre>
}