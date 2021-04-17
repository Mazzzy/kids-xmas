import React, { useRef } from 'react';

import { useClickOutside } from '@/lib/utils';
import styles from './quickview.module.css';

import { QuickPreview } from '@/lib/types';

type Props = {
  closeModal: () => void;
  openModalState: boolean;
  product: QuickPreview;
};

const QuickView = ({ closeModal, openModalState, product }: Props) => {
  const { title, image, price } = product;
  const domNode = useRef<HTMLDivElement>(null);

  useClickOutside(closeModal, domNode, false);

  return (
    <div className={openModalState ? `${styles.modal_wrapper} ${styles.active}` : styles.modal_wrapper}>
      <div className={styles.modal} ref={domNode}>
        <button type="button" className={styles.close} onClick={closeModal}>
          &times;
        </button>
        <div className={styles.quick_view}>
          <div className={styles.quick_view_image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.quick_view_details}>
            <span>{title}</span>
            <span className={styles.product_price}>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
