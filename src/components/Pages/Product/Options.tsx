import TypeOptions from "../../../types/Product/TypeOptions"

const Option = ({ option, isActive = false, onClick }: { option: TypeOptions, isActive?: boolean, onClick?: any }) => {
    const classActive = isActive ? "bg-gray-500 text-white hover:!bg-gray-500" : null;
    return (
        <>
            <button onClick={onClick} className={"mr-2 p-1 border border-black border-2 hover:bg-gray-300" + ' ' + classActive}>{option.title}</button>
        </>
    )
}

export default Option;