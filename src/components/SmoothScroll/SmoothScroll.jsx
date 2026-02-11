import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SmoothScroll = forwardRef(({ children }, ref) => {
  const contentRef = useRef(null);
  const current = useRef(0);
  const target = useRef(0);
  const ease = 0.08;

  useImperativeHandle(ref, () => ({
    scrollTo(y) {
      target.current = y;
    },
  }));

  useEffect(() => {
    const content = contentRef.current;
    let lastY = 0;

    const setBodyHeight = () => {
      document.body.style.height = `${content.getBoundingClientRect().height}px`;
    };

    setBodyHeight();
    window.addEventListener("resize", setBodyHeight);

    const clamp = () => {
      target.current = Math.max(
        0,
        Math.min(
          target.current,
          document.body.scrollHeight - window.innerHeight,
        ),
      );
    };

    const onWheel = (e) => {
      target.current += e.deltaY;
      clamp();
    };

    const onTouchStart = (e) => {
      lastY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      const delta = lastY - y;
      lastY = y;
      target.current += delta;
      clamp();
      e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    const loop = () => {
      current.current += (target.current - current.current) * ease;
      content.style.transform = `translateY(${-current.current}px)`;
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("resize", setBodyHeight);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
});

export default SmoothScroll;
