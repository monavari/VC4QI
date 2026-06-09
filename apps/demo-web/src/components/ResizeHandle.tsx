import { useCallback, useEffect, useRef } from 'react';

interface UseResizeOptions {
  defaultWidth: number;
  minWidth?: number;
  maxWidth?: number;
  /** 'right' = dragging right increases width (left panel), 'left' = dragging left increases width (right panel) */
  side: 'right' | 'left';
}

export function useResizeWidth({ defaultWidth, minWidth = 160, maxWidth = 480, side }: UseResizeOptions) {
  const widthRef = useRef(defaultWidth);
  const panelRef = useRef<HTMLElement | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    startX.current = e.clientX;
    startWidth.current = widthRef.current;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current || !panelRef.current) return;
      const dx = e.clientX - startX.current;
      const next = Math.min(maxWidth, Math.max(minWidth,
        startWidth.current + (side === 'right' ? dx : -dx)
      ));
      widthRef.current = next;
      panelRef.current.style.width = `${next}px`;
    }
    function onMouseUp() {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [side, minWidth, maxWidth]);

  return { panelRef, onMouseDown, defaultWidth };
}

interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void;
  side: 'right' | 'left';
}

export function ResizeHandle({ onMouseDown, side }: ResizeHandleProps) {
  return (
    <div
      onMouseDown={onMouseDown}
      style={{ cursor: 'col-resize', zIndex: 10 }}
      className={`shrink-0 w-1 hover:w-1 relative group ${side === 'right' ? '' : ''}`}
    >
      {/* Invisible wider hit area */}
      <div className="absolute inset-y-0 -left-1 -right-1 group-hover:bg-blue-400/30 transition-colors" />
      <div className="absolute inset-y-0 left-0 w-px bg-slate-200 group-hover:bg-blue-400 transition-colors" />
    </div>
  );
}
