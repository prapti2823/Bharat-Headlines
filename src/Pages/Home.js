import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Home = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchNewsData = async (category) => {
        try {
            setLoading(true);
            const apiKey = process.env.REACT_APP_SECRET_KEY;
            const corsProxy = 'https://cors-anywhere.herokuapp.com/';
            let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

            if (category !== "all") {
                apiUrl += `&category=${category}`;
            }

            const response = await axios.get(corsProxy + apiUrl);
            return response.data.articles;
        } catch (error) {
            console.log(error);
            return [];
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const articles = await fetchNewsData(category);
                setData(articles);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return (

        <>
            {loading ? (
                <div className='flex justify-center p-10'>
                    <CircularProgress />
                </div>
            ) : (
                <div className='grid 2xl:grid-cols-4 grid-cols-3 max-[769px]:grid-cols-2 max-[665px]:grid-cols-1 p-4'>
                    {data && data.map((article, index) => (
                        <div key={index} className="p-3">
                            <Card className="rounded-xl">
                                <div>
                                    <Card.Img src={article.urlToImage} className='w-full h-72 rounded-tr-xl rounded-tl-xl !rounded-bl-none !rounded-br-none' alt={article.title} />
                                    {/* <img src={article.urlToImage} className='w-full h-72 rounded-tr-md rounded-tl-md' alt={article.title}/> */}
                                </div>
                                <div>
                                    <Card.Body className="p-3">
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
            )}</>
    )
}

export default Home;