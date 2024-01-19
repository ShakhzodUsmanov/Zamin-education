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

const SignupForm = () => {
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="signup w-full justify-center">
      <div className="container flex flex-col w-full justify-center text-center">
        <div className="h1-header">Ro’yxatdan o’tish</div>

        <Form {...form}>
          <div className="w-full flex-start flex-col">
            <form
              onSubmit={console.log("Submit")}
              className="w-2/3 mt-4 grid grid-cols-4 gap-10 "
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-start-1 col-end-3">
                    <FormLabel className="shad-form_label">
                      Foydalanuvchi nomi yoki email
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-start-3 col-end-5">
                    <FormLabel className="shad-form_label">
                      Parolni kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-start-1 col-end-3">
                    <FormLabel className="shad-form_label">
                      Foydalanuvchi nomi yoki email
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-start-3 col-end-5">
                    <FormLabel className="shad-form_label">
                      Parolni kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-start-1 col-end-3">
                    <FormLabel className="shad-form_label">
                      Foydalanuvchi nomi yoki email
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-start-3 col-end-5">
                    <FormLabel className="shad-form_label">
                      Parolni kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="shad-button_primary w-full mt-8 col-start-2 col-end-4"
              >
                Ro’yxatdan o’tish
              </Button>
            </form>

            <div className="mt-5 w-full">
              <LineText icons={false} />
            </div>

            <div className="messengers flex justify-between w-2/5 mt-4 pb-7">
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

        <p className="p-ghost mt-8 pb-10">
          Agarda siz tizimdan ro’yxatdan o’tgan bo’lsangiz kirish tugmasini
          bosing.{" "}
          <Link to="sign-up" className="a-link">
            Kirish
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
