import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'

const AppTooltip = () => {
    return (
        <div>
            <>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      
    </OverlayTrigger>
  ))}
</>
        </div>
    )
}

export default AppTooltip
