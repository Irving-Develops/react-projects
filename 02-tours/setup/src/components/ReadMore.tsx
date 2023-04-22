import React, {useState} from "react"
import { ReadMoreProps } from "types/components"
import Button from "./Button"

const ReadMore = ({info}: ReadMoreProps) => {

    const [readMore, setReadMore] = useState(false)

    const handleClick = () => {
        setReadMore(!readMore)
    }
    return (
      <>
        {readMore ? (
          <p>
            {info.substring(0, 200)}...
            <Button children={"read more"} onClick={() => handleClick()} />
          </p>
        ) : (
          <p>
            {" "}
            {info}
            <Button children={"read less"} onClick={() => handleClick()} />
          </p>
        )}
      </>
    );
}

export default ReadMore