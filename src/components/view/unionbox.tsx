import { UnionTab } from "./uniontab"
import { UnionBody } from "./unionbody"

export const UnionBox = () => {
    return (
        <>
           <div className="unioncontainer">
                <UnionTab />
                <UnionBody />
            </div> 
        </>
    )
}