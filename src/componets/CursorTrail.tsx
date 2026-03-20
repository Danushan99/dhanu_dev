import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  alpha: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      points.current.push({ x: e.clientX, y: e.clientY + window.scrollY, alpha: 1 });
      if (points.current.length > 20) points.current.shift();
    };
    window.addEventListener('mousemove', onMove);

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.current.forEach((pt, i) => {
        pt.alpha -= 0.04;
        if (pt.alpha < 0) pt.alpha = 0;
        const radius = 4 * ((i + 1) / points.current.length);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${pt.alpha})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9998, opacity: 0.7 }}
    />
  );
}
