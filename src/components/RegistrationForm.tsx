import { useForm, type SubmitHandler } from 'react-hook-form';

// Define form data shape
interface RegistrationFormInputs {
  Kitchen_name: string;
  First_name: string;
  Last_name: string;
  email: string;
}

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>();

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <div className="z-0 -mt-2 flex w-full">
      <img
        src="/images/landingpage.png"
        alt="Landing Page"
        className="w-full"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute bottom-[160px] left-[311px] flex h-auto w-[450px] flex-col justify-center gap-4 rounded-3xl border border-[#D9D9D9] bg-[#FFFFFF] px-5 py-10"
      >
        <div id='text' className=' flex flex-col gap-4 font-[InterVariable] text-[#333333]'>
          <p className="text-3xl font-bold">
            Enjoy 10% commision on first month!
          </p>
          <p className='text-black text-lg font-light'>
            Partner with Slyce to help drive growth
           and take your business to the next level.
          </p>
        </div>

        {/* Kitchen Name */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Kitchen name"
            {...register('Kitchen_name', {
              required: 'Kitchen name is required',
            })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.Kitchen_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Kitchen_name.message}
            </span>
          )}
        </div>

        {/* First Name */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="First name"
            {...register('First_name', { required: 'First name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.First_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.First_name.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Last name"
            {...register('Last_name', { required: 'Last name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.Last_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Last_name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Last name"
            {...register('Last_name', { required: 'Last name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.Last_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Last_name.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Last name"
            {...register('Last_name', { required: 'Last name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-2.5 outline-none focus:border-black"
          />
          {errors.Last_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Last_name.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-lg bg-[#4CB050] py-2 text-white transition hover:bg-[#43a046]"
        >
          Get started
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
