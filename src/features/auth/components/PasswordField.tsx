import * as PasswordToggleField from "@radix-ui/react-password-toggle-field";
import type { UseFormRegisterReturn } from "react-hook-form";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { ClosedEye } from "@/components/icons/ClosedEye";

interface PasswordFieldProps {
  registration: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
}

export function PasswordField({ registration, error, disabled = false }: PasswordFieldProps) {
  return (
    <PasswordToggleField.Root>
      <div className="w-full">
        <div className="relative">
          <PasswordToggleField.Input
            {...registration}
            placeholder=" "
            aria-invalid={!!error}
            disabled={disabled}
            className={`peer w-full pl-3 pr-12 py-6 pb-1 rounded-lg border-1 focus:outline-none duration-200
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
            Password
          </label>
          <PasswordToggleField.Toggle
            onMouseDown={(e) => e.preventDefault()}
            disabled={disabled}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-brand-grey/50 p-1 rounded-full duration-400"
          >
            <PasswordToggleField.Icon visible={<EyeIcon />} hidden={<ClosedEye />} />
          </PasswordToggleField.Toggle>
        </div>
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    </PasswordToggleField.Root>
  );
}