import React, { useEffect, useState } from "react";
import "./styles.scss"

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const heroSection = document.getElementById("hero-section");

        if (!heroSection) return;

        const handleMouseMove = (e) => {
            const rect = heroSection.getBoundingClientRect();
            const { clientX, clientY } = e;

            // Check if the mouse is within the hero section
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            ) {
                setTrail((prev) => [
                    ...prev,
                    { x: clientX, y: clientY, id: Date.now() },
                ]);

                // Remove older trail positions to limit the number
                setTrail((prev) => prev.slice(-10));
            }
        };

        heroSection.addEventListener("mousemove", handleMouseMove);

        return () => {
            heroSection.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div>
            {trail.map(({ x, y, id }, index) => (
                <div
                    key={id}
                    className="cursor-trail-dot"
                    style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        opacity: (10 - index) / 10,
                        transform: `scale(${1 - index * 0.1})`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default CursorTrail;
