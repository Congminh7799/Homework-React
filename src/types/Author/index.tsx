type Author= {
    name: string;
    image: string;
    profiles: Profile[]
}

type Profile = {
    title: string,
    description: string
}

export default Author;