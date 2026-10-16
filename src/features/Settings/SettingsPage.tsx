import { useLogout } from "../auth/hooks/useLogout";

function SettingsPage() {

  const { mutate, isPending } = useLogout();

  return (
    <div className="flex flex-col w-full">
      <button
        disabled={isPending}
        className="w-fit py-1 px-3 bg-red-500 text-white font-bold rounded-full hover:cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
        onClick={() => {mutate()}}
      >
        Logout
      </button>
    </div>
  );
}

export default SettingsPage