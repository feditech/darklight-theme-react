import Theme from "../../context";
import { useContext } from "react";


function Child3 () {
    const theme = useContext(Theme)
    const themeColor = theme[0];
    const setTheme = theme[1]; 

    console.log(theme)
    return (
        <div>
            <h1>Child3</h1>

            <button onClick={()=> {themeColor=='light'? setTheme('dark') : setTheme('light')  }  } >{themeColor=='light'? 'dark' : 'light'  }</button>
        </div>
    )
}

export default Child3;