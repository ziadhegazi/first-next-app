import React from "react";
import Head from "next/dist/shared/lib/head";
import axios from "axios";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(response);
    return {
        props: { People: response.data },
    };
};

const People = ({ People }) => {
    const { single } = styles;

    return (
        <>
            <Head>
                <title>Hegazi List | People</title>
                <meta name="keywords" content="People" />
            </Head>
            <div>
                <h1>All people</h1>
                {People.map((person) => (
                    <div key={person.id}>
                        <a className={single}>
                            <h3>{person.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default People;
