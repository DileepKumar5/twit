// // "use client"

// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { useForm } from "react-hook-form"
// // import { z } from "zod"
// // import { Button } from "@/components/ui/button"
// // import {
// //     Form,
// //     FormControl,
// //     FormDescription,
// //     FormField,
// //     FormItem,
// //     FormLabel,
// //     FormMessage,
// // } from "@/components/ui/form"
// // import { Input } from "@/components/ui/input"
// // import { Uploadtwit } from "@/app/actions/Uploadtwit"

// // export const formSchema = z.object({
// //     twit: z.string().min(1, {
// //         message: "Twit is empty",
// //     }),
// // })
// // const Twitterform = () => {
// //     const form = useForm<z.infer<typeof formSchema>>({
// //         resolver: zodResolver(formSchema),
// //         defaultValues: {
// //             twit: "",
// //         },
// //     })

// //     function onSubmit(values: z.infer<typeof formSchema>) {

// //         console.log(values)
// //         Uploadtwit(values)
// //     }
// //     return (
// //         <div>
// //             <Form {...form}>
// //                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
// //                     <FormField
// //                         control={form.control}
// //                         name="twit"
// //                         render={({ field }) => (
// //                             <FormItem>
// //                                 {/* <FormLabel>Username</FormLabel> */}
// //                                 <FormControl>
// //                                     <Input placeholder="Write your twit" {...field} />
// //                                 </FormControl>
// //                                 {/* <FormDescription>
// //                                     This is your public display name.
// //                                 </FormDescription> */}
// //                                 <FormMessage />
// //                             </FormItem>
// //                         )}
// //                     />
// //                     <Button type="submit" className="flex items-center justify-center">Submit</Button>
// //                 </form>
// //             </Form>

// //         </div>
// //     )
// // }

// // export default Twitterform
// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { CreateTwit, DeleteTwit } from "@/app/actions/Uploadtwit"

// // Schema for creating a tweet
// export const createTweetSchema = z.object({
//     twit: z.string().nonempty({ message: "Tweet content is required" }),
// });

// // Schema for deleting a tweet
// export const deleteTweetSchema = z.object({
//     id: z.string().nonempty({ message: "Tweet ID is required" }),
// });

// // CreateTweetForm Component
// const CreateTweetForm = () => {
//     const form = useForm<z.infer<typeof createTweetSchema>>({
//         resolver: zodResolver(createTweetSchema),
//         defaultValues: {
//             twit: "",
//         },
//     });

//     function onSubmit(values: z.infer<typeof createTweetSchema>) {
//         console.log(values);
//         CreateTwit(values);
//     }

//     return (
//         <div>
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                     <FormField
//                         control={form.control}
//                         name="twit"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Tweet Content</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Write your tweet" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit" className="flex items-center justify-center">Submit</Button>
//                 </form>
//             </Form>
//         </div>
//     );
// };

// // DeleteTweetForm Component
// const DeleteTweetForm = () => {
//     const form = useForm<z.infer<typeof deleteTweetSchema>>({
//         resolver: zodResolver(deleteTweetSchema),
//         defaultValues: {
//             id: "",
//         },
//     });

//     function onSubmit(values: z.infer<typeof deleteTweetSchema>) {
//         console.log(values);
//         DeleteTwit(values);
//     }

//     return (
//         <div>
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                     <FormField
//                         control={form.control}
//                         name="id"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Tweet ID</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter Tweet ID to delete" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//                     <Button type="submit" className="flex items-center justify-center">Delete</Button>
//                 </form>
//             </Form>
//         </div>
//     );
// };

// export { CreateTweetForm, DeleteTweetForm };
"use client"

import { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CreateTwit, DeleteTwit, GetAllTwits } from "@/app/actions/Uploadtwit"

// Schema for creating a tweet
export const createTweetSchema = z.object({
    twit: z.string().nonempty({ message: "Tweet content is required" }),
});

// Define the tweet type
interface Tweet {
    id: string;
    twit: string;
    createdAt: Date;
    updatedAt: Date;
}

// CreateTweetForm Component
const CreateTweetForm = () => {
    const form = useForm<z.infer<typeof createTweetSchema>>({
        resolver: zodResolver(createTweetSchema),
        defaultValues: {
            twit: "",
        },
    });

    function onSubmit(values: z.infer<typeof createTweetSchema>) {
        console.log(values);
        CreateTwit(values);
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="twit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tweet Content</FormLabel>
                                <FormControl>
                                    <Input placeholder="Write your tweet" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="flex items-center justify-center">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

// TweetList Component
const TweetList = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);  // Correctly type the state

    useEffect(() => {
        async function fetchTweets() {
            const allTweets: Tweet[] = await GetAllTwits();
            setTweets(allTweets);
        }
        fetchTweets();
    }, []);

    const handleDelete = async (id: string) => {  // Explicitly type the parameter
        await DeleteTwit({ id });
        setTweets(tweets.filter(tweet => tweet.id !== id));
    };

    return (
        <div>
            {tweets.map(tweet => (
                <div key={tweet.id} className="flex justify-between items-center border p-2 m-2">
                    <span>{tweet.twit}</span>
                    <Button onClick={() => handleDelete(tweet.id)}>Delete</Button>
                </div>
            ))}
        </div>
    );
};

export { CreateTweetForm, TweetList };
