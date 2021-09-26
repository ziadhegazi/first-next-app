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

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
};

export default Details;
