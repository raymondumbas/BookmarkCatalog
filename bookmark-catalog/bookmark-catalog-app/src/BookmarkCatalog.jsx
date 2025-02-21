import { useState } from "react";
import { useEffect } from "react";

function BookmarkCatalog(props){

    const [mode, setMode] = useState("view");

    if(mode == "view"){
        return(
            <>
            </>
        )
    }

    else if (mode == "create"){
        return(
            <>
            </>
        )
    }
}

export default BookmarkCatalog;