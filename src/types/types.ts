import DiamondOutlined from '../components/SetFigures/DiamondOutlinedd';
import DiamondSolid from '../components/SetFigures/DiamondSolidd';
import DiamondStripped from '../components/SetFigures/DiamondStripped';
import OvalOutlined from '../components/SetFigures/OvalOutlinedd';
import OvalSolid from '../components/SetFigures/OvalSolidd';
import OvalStriped from '../components/SetFigures/OvalStripedd';
import SquiggleOutlined from '../components/SetFigures/SquiggleOutlinedd';
import SquiggleSolid from '../components/SetFigures/SquiggleSolidd';
import SquiggleStriped from '../components/SetFigures/SquiggleStripedd';

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
  '23': DiamondStripped,
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
