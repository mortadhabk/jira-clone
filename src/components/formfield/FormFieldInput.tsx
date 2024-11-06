import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignInFormFieldProps } from "@/app/(auth)/types/authtypes";
export const FormFieldInput: React.FC<SignInFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  
}) => (
  <>
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              {...register(name, { valueAsNumber })}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
export default FormField;
