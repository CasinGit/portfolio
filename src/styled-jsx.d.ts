// custom.d.ts
// import 'react';

declare module React {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean | undefined;
        global?: boolean;
    }
}