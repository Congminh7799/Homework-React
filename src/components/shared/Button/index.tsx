/**
 * Button Component
 */

import Button from "../../../types/Button";

const Button = ({ label, className, icon, onClick, iconActive = false }: Button) => {
    
    const classBtn = 'btn p-2 space-x-2 font-medium rounded text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center ';

    return (
        <button onClick={onClick} type="button" className={className ? classBtn + ' ' + className : classBtn}> <p className={iconActive ? 'text-red-600' : ''}>{icon ? icon : ''}</p> <p>{label}</p></button >
    )
}

export default Button;