'use client';
import BtnOauth from '@/components/auth/BtnOauth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SpinnerMini } from '@/components/ui/SpinnerMini';
import { authSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { z } from 'zod';

type FormFields = z.infer<typeof authSchema>;

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<FormFields>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: 'johndoe@finance.org',
      password: 'pass1234',
    },
  });

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    const { email, password } = data;
    const res = await signIn('credentials', {
      email,
      password,

      redirect: false,
    });

    if (res?.error) {
      form.setError('root', { message: 'Invalid credentials.' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* Email Form Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-preset-5-bold text-grey-500">
                Email
              </FormLabel>
              <FormControl>
                <Input className="border-beige-500" placeholder="" {...field} />
              </FormControl>
              <FormMessage className="w-full text-red-800" />
            </FormItem>
          )}
        />

        {/* Password Form Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-preset-5-bold text-grey-500">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      className="border-beige-500"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="w-full text-red-800" />
              </FormItem>
            );
          }}
        />
        {/* Error message for root errors */}
        {form.formState.errors.root && (
          <p className="text-red-800">{form.formState.errors.root.message}</p>
        )}
        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={form.formState.isSubmitting}
          className="text-preset-4-bold mt-4 w-full cursor-pointer py-6 text-white"
        >
          {form.formState.isSubmitting ? <SpinnerMini /> : 'Login'}
        </Button>

        {/* Github Button */}
        <BtnOauth provider="github">
          Sign in with Github{' '}
          <FaGithub style={{ width: '24px', height: '24px' }} />
        </BtnOauth>
      </form>
    </Form>
  );
}

export default LoginForm;
