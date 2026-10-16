import type { UseFormRegisterReturn } from "react-hook-form";
import type { InputHTMLAttributes } from "react";

interface EmailFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "error"> {
  registration?: UseFormRegisterReturn;
  error?: string;
}

export function EmailField({ registration, error, disabled = false, ...props }: EmailFieldProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          {...registration}
          {...props}
          type="email"
          placeholder=" "
          aria-invalid={!!error}
          disabled={disabled}
          className={`peer w-full px-3 py-6 pb-1 rounded-lg border-1 focus:outline-none duration-200
            ${error ? "border-red-400" : "border-brand-grey focus:border-accent"}`}
        />

        <label
          className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${error ? "text-red-400" : "text-text-grey" } transition-all duration-200 origin-left
            peer-focus:top-3
            peer-focus:scale-75
            ${error ? "peer-focus:text-red-400": "peer-focus:text-accent"}
            peer-[:not(:placeholder-shown)]:top-3
            peer-[:not(:placeholder-shown)]:scale-75`}
        >
          Email
        </label>

      </div>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}