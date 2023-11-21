import React from "react";

type Button = {
    label: string;
    className?: string;
    icon? : React.ReactNode;
    onClick?: any,
    iconActive?: boolean
}

export default Button;