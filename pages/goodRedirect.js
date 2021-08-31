import React from 'react';

export const getServerSideProps = async () => {
    return {
        props: {},
        redirect: {destination: '/myPage#myHash', permanent: false},
    }
};

const MyPage = () => null;

export default MyPage;
