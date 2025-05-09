"use client";
import PropTypes from 'prop-types';
import clsx from 'clsx';

const LayoutSection = ({ children, id = "", size = "full", color = "bg-(--color-section-3)", padding = "px-[0.1rem] sm:px-[0.1rem] lg:px-8", className = "" }) => {
  const sizeClass = {
    full: "min-h-screen min-h-dvh",
    half: "min-h-[50vh]",
    auto: "min-h-fit"
  }[size] || "min-h-screen min-h-dvh";

  return (
    <section id={id} className={clsx(sizeClass, color, "max-w-full box-border flex flex-col justify-center items-center select-none ", padding, className)}>
      {children}
    </section>
  );
};

if (import.meta.env.MODE === 'development') {
  LayoutSection.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    size: PropTypes.oneOf(["full", "half", "auto"]),
    color: PropTypes.string,
    padding: PropTypes.string,
    className: PropTypes.string
  };

}

export default LayoutSection;

// half minimo 50% de la pantalla | full minimo 100% de la pantalla | auto tamaño del contenido