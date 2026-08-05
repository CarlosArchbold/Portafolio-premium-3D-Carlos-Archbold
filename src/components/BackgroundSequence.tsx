import React, { useEffect, useRef, useState } from 'react';

const BackgroundSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameIndex = useRef(0);

  const TOTAL_FRAMES = 121; // Total de imágenes
  const FRAME_FORMAT_LENGTH = 5; // Formato 00001.png

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      // Genera 00001.png, 00002.png... hasta 00121.png
      const fileName = `${String(i).padStart(FRAME_FORMAT_LENGTH, '0')}.png`;
      const img = new Image();
      img.src = `/assets/${fileName}`;

      img.onload = () => {
        count++;
        if (count === TOTAL_FRAMES) setIsLoaded(true);
      };
      
      img.onerror = () => {
        console.error(`Error loading image: /assets/${fileName}`);
        count++;
        if (count === TOTAL_FRAMES) setIsLoaded(true);
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    if (img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useEffect(() => {
    if (!isLoaded) return;


    // Configurar el tamaño inicial del canvas
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    // Dibujar el primer frame tan pronto como cargue
    drawFrame(0);

    const handleScroll = () => {
      const html = document.documentElement;
      const maxScroll = html.scrollHeight - window.innerHeight;
      
      // Evitar errores si la página no tiene suficiente contenido para hacer scroll
      if (maxScroll <= 0) return;

      const scrollFraction = html.scrollTop / maxScroll;
      
      // Mapear el porcentaje de scroll al número de frame correspondiente
      const newIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(scrollFraction * TOTAL_FRAMES))
      );

      // Solo redibujar si cambiamos de frame (mejora el rendimiento)
      if (newIndex !== frameIndex.current) {
        frameIndex.current = newIndex;
        requestAnimationFrame(() => drawFrame(newIndex));
      }
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redibujar el frame actual para evitar parpadeos al redimensionar la ventana
        drawFrame(frameIndex.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, images]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 object-cover pointer-events-none"
      style={{ display: 'block' }}
    />
  );
};

export default BackgroundSequence;