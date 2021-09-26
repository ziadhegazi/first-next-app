import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    const paths = response.data.map((item) => {
        return {
            params: { id: item.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    // const data = await res.data.json();

    return {
        props: {
            person: res.data,
        },
    };
};

const Details = ({ person }) => {
    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.email}</p>
            <p>{person.website}</p>
            <p>{person.address.city}</p>
        </div>
    );
};

export default Details;
