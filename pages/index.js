import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
    return (
        <div className="text-blue-400">
            <Head>
                <title>Rein Pizza</title>
                <meta name="description" content="Best pizza shop in Vegas" />
            </Head>
            <h1>Hi!</h1>
        </div>
    );
}
