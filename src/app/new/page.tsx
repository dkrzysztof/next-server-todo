import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Header from "../../components/header.component";

const createTodo = async (form: FormData) => {
  "use server";

  const title = form.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });
  redirect("/");
};

export default function New() {
  return (
    <>
      <Header title="New Task" buttonHref="/" buttonText="Back" />
      <form action={createTodo} method="post" className="flex gap-2 flex-col">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Task description"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <button
          type="submit"
          className="border border-slate-300 
      text-slate-300 px-2 py-1 
      rounded hover:bg-slate-700 
      focus-within:bg-slate-700 outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
}
