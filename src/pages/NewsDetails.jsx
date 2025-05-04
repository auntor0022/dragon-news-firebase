import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState({});

    console.log(news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    },[data, id])

    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
            </header>

            <main className='grid grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-semibold text-xl mb-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;