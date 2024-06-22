// "use server";

// import { createTweetSchema, deleteTweetSchema } from "@/components/Twitterform";
// import { prisma } from "@/lib/prisma";
// import { z } from "zod";

// // export const Uploadtwit = async (values: z.infer<typeof formSchema>) => {

// //     console.log(values);
// //     const twitter = await prisma.twitmodel.create({
// //         data: {
// //             twit: values.twit,

// //         }
// //     })
// //     console.log(Uploadtwit);


// // }
// export const CreateTwit = async (values: z.infer<typeof createTweetSchema>) => {
//     console.log(values);

//     const newTweet = await prisma.twitmodel.create({
//         data: {
//             twit: values.twit,
//         },
//     });

//     console.log(newTweet);
// }

// export const DeleteTwit = async (values: z.infer<typeof deleteTweetSchema>) => {
//     console.log(values);

//     const deletedTweet = await prisma.twitmodel.delete({
//         where: {
//             id: values.id,
//         },
//     });

//     console.log(deletedTweet);
// }
"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for creating a tweet
const createTweetSchema = z.object({
    twit: z.string().nonempty({ message: "Tweet content is required" }),
});

// Schema for deleting a tweet
const deleteTweetSchema = z.object({
    id: z.string().nonempty({ message: "Tweet ID is required" }),
});

// Function to create a tweet
export const CreateTwit = async (values: z.infer<typeof createTweetSchema>) => {
    const newTweet = await prisma.twitmodel.create({
        data: {
            twit: values.twit,
        },
    });
    return newTweet;
}

// Function to delete a tweet
export const DeleteTwit = async (values: z.infer<typeof deleteTweetSchema>) => {
    const deletedTweet = await prisma.twitmodel.delete({
        where: {
            id: values.id,
        },
    });
    return deletedTweet;
}

// Function to get all tweets
export const GetAllTwits = async () => {
    const allTwits = await prisma.twitmodel.findMany();
    return allTwits;
}
