import React from 'react';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
    const path = context?.params?.myPage?.[0];

    if (path === 'badRedirect') {
        return {
            props: {},
            redirect: {destination: '/myPage#myHash', permanent: false},
        }
    }

    return {
        props: {content: "Contenty McContentface"}
    }
};

const MyPage = (props) => {
    const {content, __N_REDIRECT} = props;
    console.log("Props received: ", props);

    return (
        <div>
            {content ? (
                <div>
                    <Link href={"/goodRedirect"}>{"Redirect via separate route (should always produce correct props)"}</Link>
                    <br/><br/>
                    <Link href={"/badRedirect"}>{"Redirect via common route. Will render with incorrect props if the current url includes a #hash"}</Link>
                    <br/><br/>
                    {`My content props: ${content}`}
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
