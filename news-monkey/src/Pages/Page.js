import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Page = ({ category }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchNewsData = async (category) => {
        try {
            let apiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=958b6021ec534787be1fca413af2a492";

            if (category !== "all") {
                apiUrl += `&category=${category}`;
            }

            const response = await axios.get(apiUrl);
            return response.data.articles;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const fetchData = async () => {
        try {
            const articles = await fetchNewsData(category);
            setData(articles);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className='grid 2xl:grid-cols-4 grid-cols-3 max-md:grid-cols-2 max-[665px]:grid-cols-1 p-5'>
            {data.map((article, index) => (
                <div key={index} className="p-5 flex flex-col">
                    <Card className="container rounded-xl bg-slate-300 flex-grow">
                        <div>
                            <Card.Img src={article.urlToImage} className='w-full h-72 rounded-tr-xl rounded-tl-xl' alt={article.title}/>
                        </div>
                        <div>
                            <Card.Body className="p-5">
                                <Card.Title>
                                    <div className="font-bold">{article.title}</div>
                                </Card.Title>
                                <Card.Text className="text-[12px]">{article.description}</Card.Text>
                                <Card.Footer>
                                    <div>Author - {article.author}</div>
                                    <div>Newspaper - {article.source.name}</div>
                                </Card.Footer>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Page;



// const [data, setData] = useState([]);

// const fetchNewsData = async (category) => {
//     try {
//         const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=958b6021ec534787be1fca413af2a492`);
//         return response.data.articles;
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }

// const fetchData = async () => {
//     try {
//         const categories = ['business', 'sports', 'entertainment', 'technology', 'science', 'health'];

//         const results = await Promise.all(categories.map(category => fetchNewsData(category)));

//         // Flatten the array of arrays into a single array
//         const combinedData = results.flat();

//         setData(combinedData);
//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(() => {
//     fetchData();
// }, []);