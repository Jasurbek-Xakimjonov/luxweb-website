import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function CustomCursor() {
  const { t } = useLanguage();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor="hover"]');

      if (projectEl) {
        setCursorType('project');
      } else if (interactiveEl) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-200"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      {cursorType === 'project' ? (
        <div
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37] text-black text-[11px] font-bold tracking-widest shadow-2xl transition-transform duration-150 scale-100 uppercase"
        >
          {t.cursor.view}
        </div>
      ) : cursorType === 'hover' ? (
        <div
          className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 transition-transform duration-150 scale-100"
        />
      ) : (
        <div
          className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white transition-transform duration-150"
        />
      )}
    </div>
  );
}
