// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./RkCarousel1-04.jsx')
});