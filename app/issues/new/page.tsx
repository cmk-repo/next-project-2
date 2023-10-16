'use client'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchema';
import { z } from 'zod'
import ErrorMessage from '@/app/api/issues/compoenents/ErrorMessage';
import Spinner from '@/app/api/issues/compoenents/Spinner';

// interface IssueForm {
//     title: string;
//     description: string;
// }

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
    const router = useRouter(); // router form navigation is very importatnt 
    // const { register, control, handleSubmit } = useForm<IssueForm>({
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    })
    const [error, setError] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    //console.log(register('title'))

    const onSubmit = handleSubmit(async (data) => {
        //console.log(data)
        try {
            setSubmitting(true);
            //createIssue(data) // since we are not re using this code so having this in component is okay
            await axios.post('/api/issues', data)
            router.push('/issues')
        } catch (error) {
            setSubmitting(false);
            setError('Unexpected error occured')
        }
    });


    return (
        <div className='max-w-xl' >
            {error && <Callout.Root color="red" className='mb-5'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
            <form className='space-y-3' onSubmit={onSubmit}>
                <TextField.Root>
                    <TextField.Input placeholder='Title' {...register('title')} />
                </TextField.Root>
                {//errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
                }
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Description" {...field} />
                    }
                />
                {//errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
                }

                <ErrorMessage>{errors.description?.message}</ErrorMessage>


                <Button disabled={isSubmitting}> Submit New Issue {isSubmitting && <Spinner />}</Button>
            </form >
        </div >
    )
}

export default NewIssuePage