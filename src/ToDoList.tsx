import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "toDo를 작성해주세요.",
          })}
          placeholder="toDo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

/*
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  passWord1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.passWord !== data.passWord1) {
      setError(
        "passWord1",
        { message: "passWord are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "server offline" });
  };
  //console.log(error);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span> {errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "firstName is required",
            validate: {
              noDevdog: async (value) =>
                value.includes("devdog") ? "no devdog allowed" : true,
              noDev_dog: (value) =>
                value.includes("dev_dog") ? "no dev_dog allowed" : true,
            },
          })}
          placeholder="firstName"
        />
        <span> {errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: "lastName is required" })}
          placeholder="lastName"
        />
        <span> {errors?.lastName?.message as string}</span>
        <input
          {...register("userName", {
            required: "userName is required",
            minLength: { value: 5, message: "your userName is too Short" },
          })}
          placeholder="userName"
        />
        <span> {errors?.userName?.message as string}</span>
        <input
          {...register("passWord", {
            required: "passWord is required",
            minLength: { value: 5, message: "your passWord is too Short" },
          })}
          placeholder="passWord"
        />
        <span> {errors?.passWord?.message as string}</span>
        <input
          {...register("passWord1", {
            required: "passWord1 is required",
            minLength: { value: 5, message: "your passWord1 is too Short" },
          })}
          placeholder="passWord1"
        />
        <span> {errors?.passWord1?.message as string}</span>
        <button>Add</button>
        <span> {errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}
*/

export default ToDoList;
