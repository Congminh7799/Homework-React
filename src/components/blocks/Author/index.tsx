import TypeAuthors from "../../../types/Author"

const Author = ({ author }: { author: TypeAuthors }) => {
    return (
        <>
            <div className="mb-2 rounded border p-4 border-black">
                <div className="text-xl font-bold mb-2">{author.name}</div>
                <div className="w-1/4 mb-2">
                    <img className="h-auto w-16 h-16 rounded-full" src={author.image} alt="Author Image" />
                </div>
                <ul>
                    {
                        author.profiles.map((item, index: number) => {
                            return (
                                <li key={index}>
                                    <p><strong>{item.title}: </strong> {item.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Author;