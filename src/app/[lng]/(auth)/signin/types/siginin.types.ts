import { z } from 'zod';
import { signInSchema } from './signin.schema';

export type SignInProps = z.infer<typeof signInSchema>