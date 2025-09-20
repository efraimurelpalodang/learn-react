import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// type RegisterFormSchema = {
//   username: string;
//   password: string;
// };

const RegisterFormSchema = z.object({
  username: z.string().min(3, "minimal 3 karakter bang").max(10, "maximal 10 aja oyy"),
  password: z.string().min(8, "minimal 8 karakter ya bang"),
});

type RegisterFormSchema = z.infer<typeof RegisterFormSchema>;

export default function RhfPage() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(RegisterFormSchema),
  });

  function handleRegisterUser(val: RegisterFormSchema) {
    alert("form submited");
    console.log(val);
  }

  return (
    <div>
      <h1>Form Hook Page</h1>
      <form action="" onSubmit={form.handleSubmit(handleRegisterUser)} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label>
          Username
          <input type="text" {...form.register("username")} autoComplete="off" /> <br />
          <span style={{ fontSize: "10px", color: "red" }}>{form.formState.errors.username?.message}</span>
        </label>
        <label>
          Password
          <input type="password" {...form.register("password")} autoComplete="off" /> <br />
          <span style={{ fontSize: "10px", color: "red" }}>{form.formState.errors.password?.message}</span>
        </label>
        <button type="submit">Register user</button>
      </form>
    </div>
  );
}
