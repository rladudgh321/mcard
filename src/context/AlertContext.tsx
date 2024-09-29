// import {
//   ComponentProps,
//   createContext,
//   useCallback,
//   useContext,
//   useMemo,
//   useState,
// } from 'react';
// import { createPortal } from 'react-dom';
// import Alert from '@shared/Alert';

import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// type AlertProps = ComponentProps<typeof Alert>;
// type AlertOptions = Omit<AlertProps, 'open'>;

// interface AlertContextValue {
//   open: (options: AlertOptions) => void;
// }

// const Context = createContext<AlertContextValue | undefined>(undefined);

// const defaultValue: AlertProps = {
//   open: false,
//   title: null,
//   description: null,
//   onButtonClick: () => {},
// };

// export function AlertContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [alertState, setAlertState] = useState(defaultValue);

//   const close = useCallback(() => {
//     setAlertState(defaultValue);
//   }, []);

//   const open = useCallback(
//     ({ onButtonClick, ...options }: AlertOptions) => {
//       return setAlertState({
//         ...options,
//         onButtonClick: () => {
//           close();
//           onButtonClick();
//         },
//         open: true,
//       });
//     },
//     [close],
//   );

//   const values = useMemo(() => ({ open }), [open]);

//   const $portal = document.getElementById('root-portal');
//   return (
//     <Context.Provider value={values}>
//       {children}
//       {$portal != null
//         ? createPortal(<Alert {...alertState} />, $portal)
//         : null}
//     </Context.Provider>
//   );
// }

// export function useAlertContext() {
//   const values = useContext(Context);
//   if (values == null) {
//     throw new Error('alertContext에서 사용해주세요');
//   }
//   return values;
// }

import Alert from '@shared/Alert';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValue: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
};

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState(defaultValue);
  const $portal = document.getElementById('root-portal');

  const close = useCallback(() => {
    setAlertState(defaultValue);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          onButtonClick();
          close();
        },
        open: true,
      });
    },
    [close],
  );

  const value = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={value}>
      {children}
      {$portal != null ? <Alert {...alertState} /> : null}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const value = useContext(Context);
  if (value == null) {
    throw new Error('컨텍스트 안에서만 활용할 수 있습니다');
  }
  return value;
}
