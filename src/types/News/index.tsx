import Comment from "./Comment";

type News = {
    title: string;
    image: string;
    date?: string;
    author: string;
    content: string;
    comments?: Comment[]
}

export default News;