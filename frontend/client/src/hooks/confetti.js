import { useCallback, useRef } from 'react';

const useConfettiHelper = () => {
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.2 },
        particleCount: Math.floor(3000 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 200,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 200
    });

    makeShot(0.35, {
      spread: 200,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 200,
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 200,
      startVelocity: 45
    });
  }, [makeShot]);

  return {
    fire,
    getInstance,
    canvasStyles
  };
};

export default useConfettiHelper;
