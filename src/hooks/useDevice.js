import { useWindowDimensions } from '@/hooks/index';

const MOBILE_WIDTH = 768;

export default function useDevice() {
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_WIDTH;

  return { isMobile };
}
