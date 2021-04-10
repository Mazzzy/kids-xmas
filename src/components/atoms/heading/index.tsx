import { FC } from 'react';

interface HeadingProps {
  className?: string;
  title?: string;
}

const HeadingText: FC<HeadingProps> = ({ className, title }) => {
  return <h3 className={className}>{title || ''}</h3>;
};

export default HeadingText;
