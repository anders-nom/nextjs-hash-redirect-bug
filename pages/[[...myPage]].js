import React from 'react';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const path = context?.params?.myPage;

    if (path && path[0] === 'myPage') {
        return {
            props: {content: "Hello world!"}
        }
    }

    return {
        props: {},
        redirect: {destination: '/myPage', permanent: false},
    }
};

const MyPage = (props) => {
    const {content, __N_REDIRECT} = props;

    return (
        <div>
            <Link href={"/"}>{"Redirect me"}</Link>
            {content && <div>{`My content: ${content}`}</div>}
            {!content && __N_REDIRECT &&
            <div>{`Did not receive content props, received instead __N_REDIRECT: ${__N_REDIRECT}`}</div>}
        </div>
    );
};

export default MyPage;
