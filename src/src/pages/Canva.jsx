import { useEffect, useRef } from "react";

const GlobalCursorCanvas = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0, moving: false });
    const particles = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        let moveTimeout;

        const onMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            mouse.current.moving = true;

            // stop spawning when mouse stops
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                mouse.current.moving = false;
            }, 150);

            // spawn particles
            for (let i = 0; i < 1; i++) {
                particles.current.push({
                    x: mouse.current.x,
                    y: mouse.current.y,
                    size: Math.random() * 12 + 2,
                    alpha: 1,
                    life: 1,
                    //   vx: (Math.random() - 0.5) * 1.2,
                    //   vy: (Math.random() - 0.5) * 1.2,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    type: Math.random() > 0.3 ? "star" : "ball",
                });
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        const drawStar = (x, y, r, alpha) => {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = "#60a5fa";
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                ctx.lineTo(
                    x + Math.cos((18 + i * 72) * Math.PI / 180) * r,
                    y - Math.sin((18 + i * 72) * Math.PI / 180) * r
                );
                ctx.lineTo(
                    x + Math.cos((54 + i * 72) * Math.PI / 180) * (r / 2),
                    y - Math.sin((54 + i * 72) * Math.PI / 180) * (r / 2)
                );
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current = particles.current.filter((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.012;

                p.alpha = p.life;

                if (p.type === "ball") {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    drawStar(p.x, p.y, p.size + 2, p.alpha);
                }

                return p.life > 0;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1,
            }}
        />
    );
};

export default GlobalCursorCanvas;




// import { useEffect, useRef } from "react";

// const GlobalCursorCanvas = () => {
//   const canvasRef = useRef(null);

//   const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const blob = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     const onMouseMove = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // 🧠 LERP (slow follow)
//       blob.current.x += (mouse.current.x - blob.current.x) * 0.04;
//       blob.current.y += (mouse.current.y - blob.current.y) * 0.04;

//       // 🔵 Big soft blue blob
//       const gradient = ctx.createRadialGradient(
//         blob.current.x,
//         blob.current.y,
//         0,
//         blob.current.x,
//         blob.current.y,
//         160
//       );

//       gradient.addColorStop(0, "rgba(59,130,246,0.35)");
//       gradient.addColorStop(0.5, "rgba(37,99,235,0.18)");
//       gradient.addColorStop(1, "rgba(37,99,235,0)");

//       ctx.beginPath();
//       ctx.fillStyle = gradient;
//       ctx.arc(blob.current.x, blob.current.y, 160, 0, Math.PI * 2);
//       ctx.fill();

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 0,
//         pointerEvents: "none",
//       }}
//     />
//   );
// };

// export default GlobalCursorCanvas;
