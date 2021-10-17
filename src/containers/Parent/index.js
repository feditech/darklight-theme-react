import { useState } from "react";
import Theme from "../../context";
import Child1 from "../Child1";
import './css/style.css'

function Parent() {
    const [theme, SetTheme] = useState("light")
    return (
        <Theme.Provider value={[theme, SetTheme]}>
            <div className={theme}>
                <h1>Parent</h1>
                <Child1 />


            </div>

        </Theme.Provider>

    )
}

export default Parent;