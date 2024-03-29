import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThreadHeader.module.css';
import { Icon } from '../Icon';
import { Box } from '../Box';
import { ActionButton } from '../ActionButton';

const ThreadHeader = ({ title, handleClose }) => (
  <Box
    className={styles.container}
    style={{
      paddingBlockStart: '10px',
    }}
  >
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '0.5rem',
      }}
    >
      <ActionButton onClick={handleClose} ghost display="inline" square small>
        <Icon name="arrow-back" size="1.25rem" />
      </ActionButton>
      <h4 className={styles.nospace}>{title}</h4>
    </Box>
  </Box>
);

export default ThreadHeader;

ThreadHeader.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string,
};
