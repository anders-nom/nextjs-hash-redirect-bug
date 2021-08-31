import Link from 'next/link';

const MyIndexPage = () => {
    return (
        <div>
            <Link href={"/myPage#myHash"}>{"Go to my page with hash"}</Link>
        </div>
    );
};

export default MyIndexPage;
