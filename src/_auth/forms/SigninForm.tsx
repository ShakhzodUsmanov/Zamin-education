import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import LineText from "@/components/shared/LineText";

const SigninForm = () => {
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="signing">
      <div className="container flex justify-between lg:flex-row flex-col">
        <div className="signin-text lg:w-1/2 w-full mt-4">
          <div className="h1-header">
            Zamin Ta’lim platformasiga xush kelibsiz
          </div>
          <p className="p-ghost mt-8">
            Agarda siz ro’yxatdan o’tmagan bo’lsangiz, ro’yxatdan o’tishingiz
            talab qilinadi.{" "}
            <Link to="sign-up" className="a-link">
              Ro’yxatdan o’tish
            </Link>
          </p>
        </div>

        <Form {...form}>
          <div className="sm:w-420 flex-start flex-col">
            <form
              onSubmit={console.log("Submit")}
              className="flex flex-col w-full mt-4 gap-9"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Foydalanuvchi nomi yoki email" type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Parolni kiriting"
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="shad-button_primary w-full mt-8">
                Tizimga kirish
              </Button>
            </form>

            <div className="mt-5 w-full">
              <LineText icons={false} />
            </div>

            <div className="messengers flex justify-between w-full mt-4 pb-7">
              <Link to="#" className="signin-icons">
                <img src="/assets/icons/google-colorful.svg" alt="google" />
              </Link>
              <Link to="#" className="signin-icons">
                <img src="/assets/icons/apple-colorful.svg" alt="google" />
              </Link>
              <Link to="#" className="signin-icons">
                <img src="/assets/icons/facebook-colorful.svg" alt="google" />
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;
