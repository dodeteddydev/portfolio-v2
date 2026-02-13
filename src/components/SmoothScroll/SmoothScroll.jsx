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
    if (!content) return;

    const setBodyHeight = () => {
      const height = content.getBoundingClientRect().height;
      document.body.style.height = `${height}px`;
    };

    const clamp = () => {
      const max = content.getBoundingClientRect().height - window.innerHeight;
      target.current = Math.max(0, Math.min(target.current, max));
    };

    const ro = new ResizeObserver(() => {
      setBodyHeight();
      clamp();
    });

    ro.observe(content);
    setBodyHeight();

    const onWheel = (e) => {
      target.current += e.deltaY;
      clamp();
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    let lastY = 0;

    const onTouchStart = (e) => {
      lastY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      const delta = lastY - y;
      lastY = y;
      target.current += delta;
      clamp();
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let raf;

    const loop = () => {
      current.current += (target.current - current.current) * ease;
      content.style.transform = `translateY(${-current.current}px)`;
      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      ro.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      style={{ position: "fixed", inset: 0, overflow: "hidden" }}
    >
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
});

export default SmoothScroll;
