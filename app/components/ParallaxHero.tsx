'use client';

import { useRef, useEffect, useCallback } from 'react';

const FRAME_SRCS = [
  '/frames/fame_left_8.png',
  '/frames/fame_left_7.png',
  '/frames/fame_left_6.png',
  '/frames/fame_left_5.png',
  '/frames/fame_left_4.png',
  '/frames/fame_left_3.png',
  '/frames/fame_left_2.png',
  '/frames/fame_left_1.png', // index 7 = default / center
  '/frames/fame_right_1.png',
  '/frames/fame_right_2.png',
  '/frames/fame_right_3.png',
  '/frames/fame_right_4.png',
  '/frames/fame_right_5.png',
  '/frames/fame_right_6.png',
  '/frames/fame_right_7.png',
];

const DEFAULT_FRAME = 7;
const BG_COLOR = '#E6E6E6';
const BRIGHTNESS = 1.35;
// Speed of lerp: higher = faster catch-up (0–1 per frame)
const LERP_SPEED = 0.3;

export function ParallaxHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);

  // Float values so we can lerp smoothly between frames
  const displayedFrameRef = useRef<number>(DEFAULT_FRAME); // current lerped position
  const targetFrameRef = useRef<number>(DEFAULT_FRAME);    // where we want to be
  const lastDrawnIndexRef = useRef<number>(-1);
  const rafRef = useRef<number | null>(null);

  const drawFrameIndex = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.filter = `brightness(${BRIGHTNESS})`;

    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
    ctx.filter = 'none';
  }, []);

  // Continuous animation loop: lerps displayedFrame toward targetFrame
  const startLoop = useCallback(() => {
    if (rafRef.current !== null) return;

    const tick = () => {
      const current = displayedFrameRef.current;
      const target = targetFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) < 0.01) {
        // Close enough — snap and stop
        displayedFrameRef.current = target;
        const idx = Math.round(target);
        if (idx !== lastDrawnIndexRef.current) {
          drawFrameIndex(idx);
          lastDrawnIndexRef.current = idx;
        }
        rafRef.current = null;
        return;
      }

      displayedFrameRef.current = current + diff * LERP_SPEED;
      const idx = Math.round(displayedFrameRef.current);
      if (idx !== lastDrawnIndexRef.current) {
        drawFrameIndex(idx);
        lastDrawnIndexRef.current = idx;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [drawFrameIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      drawFrameIndex(Math.round(displayedFrameRef.current));
    };
    resize();
    window.addEventListener('resize', resize);

    framesRef.current = FRAME_SRCS.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (i === DEFAULT_FRAME) drawFrameIndex(DEFAULT_FRAME);
      };
      return img;
    });

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrameIndex]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    targetFrameRef.current = ratio * (FRAME_SRCS.length - 1);
    startLoop();
  }, [startLoop]);

  const handleMouseLeave = useCallback(() => {
    targetFrameRef.current = DEFAULT_FRAME;
    startLoop();
  }, [startLoop]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', height: '100%' }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
