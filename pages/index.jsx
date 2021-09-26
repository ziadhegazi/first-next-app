import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";
import Head from "next/head";

const Home = () => {
    const { title, text, btn } = styles;

    return (
        <>
            <Head>
                <title>Hegazi List | Home</title>
                <meta name="keywords" content="People" />
            </Head>
            <div>
                <h1 className={title}>Homepage</h1>
                <p className={text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis in, maiores quaerat consequuntur ut odit mollitia
                    laborum deleniti repellendus a minus delectus sequi nihil
                    placeat aliquam nulla temporibus! Ratione, dolore.
                </p>
                <p className={text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis in, maiores quaerat consequuntur ut odit mollitia
                    laborum deleniti repellendus a minus delectus sequi nihil
                    placeat aliquam nulla temporibus! Ratione, dolore.
                </p>
                <Link href="/people">
                    <a className={btn}>See all people</a>
                </Link>
            </div>
        </>
    );
};

export default Home;
