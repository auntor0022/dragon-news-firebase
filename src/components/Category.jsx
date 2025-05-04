import React, { use } from 'react';
import { NavLink } from 'react-router';
// import { useLoaderData } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(res => res.json());

const Category = () => {

    // const categories = useLoaderData();
    // console.log(categories);

    const categories = use(categoriesPromise);
    // console.log(categories);

    return (
        <div>
            <h2 className='font-semibold text-xl'>All Caterogy</h2>
            <div className='grid grid-cols-1 mt-5 text-[#9F9F9F] gap-7'>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className={"btn font-medium text-xl border-0 bg-base-100 hover:bg-base-200"}
                    to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;