import posed from 'react-pose';
import Card from './Card';

const AnimatedCard = posed(Card)({
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 }
});

export default AnimatedCard;
