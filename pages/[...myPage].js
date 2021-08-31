import React from 'react';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const path = context?.params?.myPage?.[0];

    if (path === 'myPage') {
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
            {content ? (
                <div>
                    <Link href={"/goodRedirect"}>{"Redirect via non-dynamic route (should always work)"}</Link>
                    <br/><br/>
                    <Link href={"/badRedirect"}>{"Redirect via dynamic catch-all route. Will render with incorrect props if the current url includes a #hash"}</Link>
                    <br/><br/>
                    {`My content: ${content}`}
                </div>
            ) : __N_REDIRECT ? (
                <div>
                    {`Did not receive content props, received instead __N_REDIRECT: ${__N_REDIRECT}`}
                    <br/><br/>
                    <Link href={"/"}>{"Go back to root"}</Link>
                </div>
            ) : (
                <div>
                    {'This should never happen'}
                </div>
            )}
        </div>
    );
};

export default MyPage;
