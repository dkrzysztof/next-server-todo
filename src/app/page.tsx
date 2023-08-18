import { prisma } from "@/db";
import TodoItem from "../components/todo-item.component";
import Header from "../components/header.component";

const getTodos = async () => {
  return await prisma.todo.findMany();
};

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <Header title="Todos" buttonHref="/new" buttonText="New" />
      <ul className="pl-4">
        {todos.map((props) => (
          <TodoItem key={props.id} {...props} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
