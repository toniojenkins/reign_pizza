import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
export default function Home() {
    return (
        <div className="text-blue-400">
            <Head>
                <title>Rein Pizza</title>
                <meta name="description" content="Best pizza shop in Vegas" />
            </Head>
            <Featured />
            <PizzaList />
        </div>
    );
}
