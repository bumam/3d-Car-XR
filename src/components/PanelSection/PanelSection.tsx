import s from './PanelSection.module.scss';
import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface PanelProps {
  className?: string;
  title: string;
}

export const PanelSection: FC<PropsWithChildren<PanelProps>> = ({ children, title, className }) => {
  return (
    <div className={classNames(s.PanelSection, className)}>
      <div className={s.PanelSection__title}>{title}</div>
      <div className={s.PanelSection__values}>{children}</div>
    </div>
  );
};
