import React from "react";

type Button = {
    label: string;
    className?: string;
    icon? : React.ReactNode;
    onClick?: any
}

export default Button;