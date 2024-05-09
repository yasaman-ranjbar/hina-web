import { signInSchema } from './signin.schema';
import { z } from 'zod';

export type SignInProps = z.infer<typeof signInSchema>