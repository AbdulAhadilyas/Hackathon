import React from 'react'
import Button from '@mui/material/Button';

function MuiBUtton({ style, ...prop  }) {
    return (
        <Button {...prop} sx={[btnStyle , style]} variant="contained"/>
    )
}
const btnStyle = {
    color: '#FFFFFF',
    fontWeight: "600",
    borderRadius: 2,
    boxShadow: 8
}
export default MuiBUtton
