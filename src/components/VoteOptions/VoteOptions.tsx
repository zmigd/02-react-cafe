import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';
import React from 'react';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
