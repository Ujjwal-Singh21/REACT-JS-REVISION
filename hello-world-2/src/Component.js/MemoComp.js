//pure component feature in functional components using memo

import React from "react";

function MemoComp(){
    console.log('Rendering Memo Component');

    return(
        <div>
            Memo component
        </div>
    )
}

export default React.memo(MemoComp)
// export default MemoComp