import { FC, MouseEvent } from 'react';

import Router from 'next/router';

import styles from './error.module.css';

interface ErrorCompProps {
  statusCode?: number;
}

interface CustomErrorProps {
  title?: string;
  content?: string;
  callToAction?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

function CustomError({ title, content, callToAction, onClick, ...rest }: CustomErrorProps) {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.contents}>
        <h1>{title}</h1>
        <p>{content}</p>
        <button type="button" onClick={onClick}>
          {callToAction}
        </button>
      </div>
    </div>
  );
}

const ErrorComponent: FC<ErrorCompProps> = ({ statusCode, ...rest }): JSX.Element => {
  return (
    <CustomError
      title={'Oops!'}
      content={`${['An unexpected', statusCode || '', 'error occured'].filter(Boolean).join(' ')}.
            Please click the link below to continue browsing.`}
      callToAction={'Go to homepage'}
      onClick={() => Router.replace({ pathname: '/' })}
      {...rest}
    />
  );
};

export default ErrorComponent;
