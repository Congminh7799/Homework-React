const FormError = ({ msg }: { msg: string }) => {
    return (
        <>
            <div className="text-left w-full">
                <i className="text-red-500 !text-left text-xs">{msg}</i>
            </div>
        </>
    )
}

export default FormError;