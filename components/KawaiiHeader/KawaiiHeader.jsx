import { useState, useEffect } from 'react';
import { Confirm } from 'semantic-ui-react';

import AnimatedHeader from './AnimatedHeader';
import ModalHeaderContent from '@components/Commons/ModalHeaderContent';
import { PosMeMuero } from '@components/SVGIcons';

import styles from './kawaiiHeader.module.css';

const KawaiiHeader = () => {
  const [visible, setVisible] = useState(true);
  const [meMori, setMeMori] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const closeModal = () => setModalOpen(false);
  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  useEffect(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);

  useEffect(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <AnimatedHeader
        visible={visible}
        onClick={toggleVisible}
        onComplete={() => setCount(prevCount => prevCount + 1)}
        muerto={meMori}
      />

      <Confirm
        open={modalOpen}
        content={
          <ModalHeaderContent
            header='Se Murió (O.O)'
            content={
              <>
                <p>Lo tocaste tanto que lo mataste.</p>
                <p>Por otro lado, eres una persona muy curiosa y has descubierto esto. :)</p>
              </>
            }
            image={<PosMeMuero size='154px' />}
          />
        }
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButton='Ay, lo siento'
        confirmButton='OK'
        closeOnDimmerClick={false}
      />
    </div>
  );
};

export default KawaiiHeader;
