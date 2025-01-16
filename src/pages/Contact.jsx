import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    reset();
  };

  return (
    <div className="h-fit pb-12 2xl:pb-0 2xl:h-screen bg-gradient-to-t from-red-200 to-white" >
      <div className="h-[110px] md:h-[150px]"></div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center p-4 mb-6 text-xl w-[92%] gap-4 md:w-[500px]">
          <h1 className="md:text-3xl font-bold text-red-700 relative">
            CONTACT
          </h1>
          <div className="w-24 pt-[1%] border-b-2 border-red-700"></div>
        </div>

        <div className="max-w-[70%] md:max-w-[40%] mx-auto text-center pb-8 mb-6">
          <h2 className="text-4xl font-bold text-red-700 pb-3">
            Contact us
          </h2>
          <p className="text-center text-2xl">
            Place your reservation.
          </p>
        </div>

        <form
          className="h-fit md:w-[500px] p-14 rounded-xl bg-white shadow-xl shadow-red-400"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Section name */}
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input type="text" name="name" className="px-3 bg-gray-200 py-2 block my-2 w-full rounded-md"
            {...register("name", { required: true })} />

          {/* Section email */}
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input type="email" name="email" className="px-3 bg-gray-200 py-2 block my-2 w-full rounded-md"
            {...register("email", { required: true })} />

          <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
          <input type="text" name="subject" className="px-3 bg-gray-200 py-2 block my-2 w-full rounded-md"
            {...register("subject", { required: true })} />

          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea name="message" id="" cols="30" rows="10"
            className="px-3 bg-gray-200 py-1 block my-2 h-[70px] md:h-auto w-full rounded-md"
            {...register("message", { required: true, minLength: 2 })}>
          </textarea>
          <>
          </>

          <button className="relative inline-flex items-center gap-x-1.5 rounded-md 
        bg-red-800 px-4 py-1.5 text-lg font-semibold text-white shadow-sm
        hover:bg-red-600 focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50
          disabled:cursor-not-allowed">
            Send
            {<IoIosSend />}
          </button>
        </form>
      </div>
    </div>

  )
}
