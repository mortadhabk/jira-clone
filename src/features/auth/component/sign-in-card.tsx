import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { z } from "zod";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
const formSchema = z.object({
  email: z.string().trim().min(1, "Required field").email(),
  password: z.string().min(8, 'minimum 8 characters'),
});

export const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none  ">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription className="text-sm">
          You Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary">
            Sign Up
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <Separator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter email address"
                />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Input
                          {...field}
            type="password"
            placeholder="Enter password"

          />

                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

      
          <Button variant="primary" className="w-full" disabled={false}>
            Sign In
          </Button>
        </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="w-6 h-6" />
          Sign In with Google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="w-6 h-6" />
          Sign In with Apple
        </Button>
      </CardContent>
    </Card>
  );
};
