import React from 'react';
import CardWrapper from '@/components/CardWrapper';
import { CreateTweetForm, TweetList } from '@/components/Twitterform';

const Page = () => {
    return (
        <div className="flex flex-col items-center h-screen w-screen space-y-4">
            <CardWrapper title="Create Tweet">
                <CreateTweetForm />
            </CardWrapper>
            <CardWrapper title="Tweets">
                <TweetList />
            </CardWrapper>
        </div>
    );
};

export default Page;
