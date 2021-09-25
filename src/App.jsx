import { Provider } from "./AppState"
import HoverableRoot from "./HoverableRoot"

import PrintState from './PrintState'


export default function App(){

    return <Provider>
        <HoverableRoot/>
        <PrintState/>
    </Provider>
}