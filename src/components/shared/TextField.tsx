import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import Text from '@shared/Text';
import Input from '@shared/Input';
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
}

// 외부로부터 Ref를 받을 수 있게 하기 위해서 forwardRef를 사용

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hasError, helpMessage, onFocus, onBlur, ...props },
    ref,
  ) {
    const [focus, setFocus] = useState(false);
    const labelColor = hasError ? 'red' : focus ? 'blue' : undefined;

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocus(true);
      onFocus?.(event);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocus(false);
      onBlur?.(event);
    };

    return (
      <div>
        {label ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}

        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    );
  },
);

export default TextField;
