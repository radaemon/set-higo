import DiamondOutlined from '../components/SetFigures/DiamondOutlined';
import DiamondSolid from '../components/SetFigures/DiamondSolid';
import DiamondStriped from '../components/SetFigures/DiamondStriped';
import OvalOutlined from '../components/SetFigures/OvalOutlined';
import OvalSolid from '../components/SetFigures/OvalSolid';
import OvalStriped from '../components/SetFigures/OvalStriped';
import SquiggleOutlined from '../components/SetFigures/SquiggleOutlined';
import SquiggleSolid from '../components/SetFigures/SquiggleSolid';
import SquiggleStriped from '../components/SetFigures/SquiggleStriped';

type CardObject = {
  color: 1 | 2 | 3;
  quantity: 1 | 2 | 3;
  shape: 1 | 2 | 3;
  texture: 1 | 2 | 3;
  visibility: boolean;
};

type SetTuple = [CardObject, CardObject, CardObject];

type StatusDisplay = {
  color: 'red' | 'blue' | '';
  text: 'Set found' | 'Incorrect set';
  thinking: boolean;
};

type ModalState = {
  noSetsDeck: boolean;
  noSetsBoard: boolean;
  seconds: number;
};

const components = {
  '11': OvalSolid,
  '12': OvalOutlined,
  '13': OvalStriped,
  '21': DiamondSolid,
  '22': DiamondOutlined,
  '23': DiamondStriped,
  '31': SquiggleSolid,
  '32': SquiggleOutlined,
  '33': SquiggleStriped,
} as const;

const colors = {
  1: '#fa0000',
  2: '#388b3b',
  3: '#a128d0',
} as const;

export type { SetTuple, CardObject, StatusDisplay, ModalState };
export { components, colors };
