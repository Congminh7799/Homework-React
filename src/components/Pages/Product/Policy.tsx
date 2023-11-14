import Policy from "../../../types/Product/Policy"

const Policy = ({ policy }: { policy: Policy }) => {
    return (
        <>
            <p className="mr-2 flex items-center space-x-2 mt-4">
                <span className="text-cyan-300 text-2xl">{<policy.icon />}</span>
                <strong>{policy.title}</strong>
                <span className="text-gray-500">{policy.description}</span>
            </p>
        </>
    )
}

export default Policy;