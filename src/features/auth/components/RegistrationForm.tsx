import { useForm, type SubmitHandler } from 'react-hook-form';

interface RegistrationFormInputs {
  Kitchen_name: string;
  First_name: string;
  Last_name: string;
  companyEmail: string;
  restaurantType: string;
  branch: number;
  mobile: string;
}

function RegistrationForm() {

  const {register,handleSubmit,formState: { errors }} = useForm<RegistrationFormInputs>({ defaultValues: {branch: 1},});

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=
      "absolute md:bottom-[100px] md:left-[290px] flex h-auto w-[450px] flex-col justify-center gap-[16px] rounded-3xl border border-[#D9D9D9] bg-[#FFFFFF] px-5 pt-10 pb-6"
    >
      <div id="text" className="flex flex-col gap-4 font-[InterVariable] text-[#333333]">
        <p className="text-3xl font-bold">
          Enjoy 10% commission on first month!
        </p>
        <p className="text-black text-lg font-light">
          Partner with Slyce to help drive growth
          and take your business to the next level.
        </p>
      </div>

      <div id='fields' className="flex flex-col gap-4 text-sm">

        {/* Kitchen Name */}
        <div className="flex flex-col">
          <input type="text" placeholder="Kitchen name" {...register('Kitchen_name', { required: 'Kitchen name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.Kitchen_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Kitchen_name.message}
            </span>
          )}
        </div>

        {/* First Name */}
        <div className="flex flex-col">
          <input type="text" placeholder="First name"
            {...register('First_name', { required: 'First name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.First_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.First_name.message}
            </span>
          )}
        </div>

        {/* LastName */}
        <div className="flex flex-col">
          <input type="text" placeholder="Last name" {...register('Last_name', { required: 'Last name is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.Last_name && (
            <span className="mt-1 text-sm text-red-500">
              {errors.Last_name.message}
            </span>
          )}
        </div>


        {/* Company Email */}
        <div className="flex flex-col">
          <input type="email" placeholder="Company email"
            {...register('companyEmail', {
              required: 'Company email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.companyEmail && (
            <span className="mt-1 text-sm text-red-500">
              {errors.companyEmail.message}
            </span>
          )}
        </div>

        {/* Restaurant Type Dropdown */}
        <div className="flex flex-col">
          <select {...register('restaurantType', { required: 'Restaurant type is required' })}
            className="rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          >
            <option >Restaurant Type</option>
            <option value="Home Kitchen">Home Kitchen</option>
            <option value="Official Brand">Official Brand</option>
          </select>
          {errors.restaurantType && (
            <span className="mt-1 text-sm text-red-500">
              {errors.restaurantType.message}
            </span>
          )}
        </div>

        {/* Branch */}
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Branch"
            {...register('branch', { required: 'Branch is required', valueAsNumber: true })}
            className="text-sm rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.branch && (
            <span className="mt-1 text-sm text-red-500">{errors.branch.message}</span>
          )}
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <input
            type="tel"
            placeholder="Mobile number"
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Invalid mobile number',
              },
            })}
            className="text-sm rounded-lg border border-[#E8E8E8] bg-[#F7F7F7] px-3 py-3 outline-none focus:border-black"
          />
          {errors.mobile && (
            <span className="mt-1 text-sm text-red-500">{errors.mobile.message}</span>
          )}
        </div>

      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="font-[Intervariable] font-bold rounded-lg bg-[#4CB050] px-3 py-3 text-white transition hover:bg-[#43a046]"
      >
        Get Started
      </button>
    </form>
  );
}

export default RegistrationForm;
