"use client";
import { cn } from "./utils";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState } from "react";


const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export function Modal({ children }) {
	return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({ children, className }) => {
	const { setOpen } = useModal();
	return (
		<button className={cn("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden", className)}
			onClick={() => setOpen(true)}>
			{children}
		</button>
	);
};

export const ModalBody = ({ children, className }) => {
	const { open } = useModal();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	const modalRef = useRef(null);
	const { setOpen } = useModal();
	useOutsideClick(modalRef, () => setOpen(false));

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0, }}
					animate={{ opacity: 1, backdropFilter: "blur(10px)", }}
					exit={{ opacity: 0, backdropFilter: "blur(0px)", }}
					className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-150">
					<Overlay />

					<motion.div
						ref={modalRef}
						className={cn("min-h-[40%] max-h-[60%] md:max-w-[30%] mx-4 bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl rounded-2xl relative flex flex-col flex-1 overflow-hidden ", className)}
						initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40, }}
						animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, }}
						exit={{ opacity: 0, scale: 0.8, rotateX: 10, }}
						transition={{ type: "tween", stiffness: 260, damping: 15, }}>
						<CloseIcon />
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};


export const ModalContent = ({ children, className }) => {
	return (
		<div className={cn("flex flex-col flex-1 p-2 md:p-8 ", className)}>
			{children}
		</div>
	);
};

export const ModalFooter = ({ children, className }) => {
	return (
		<div className={cn("flex justify-end p-3 bg-gray-100 dark:bg-neutral-900 ", className)}>
			{children}
		</div>
	);
};

const Overlay = ({ className }) => {
	return (
		<motion.div
			initial={{ opacity: 0, }}
			animate={{ opacity: 1, backdropFilter: "blur(10px)", }}
			exit={{ opacity: 0, backdropFilter: "blur(0px)", }}
			className={`fixed inset-0 h-full w-full bg-black/60 ${className}`}>
		</motion.div>
	);
};

const CloseIcon = () => {
	const { setOpen } = useModal();
	return (
		<button onClick={() => setOpen(false)} className="absolute top-3.5 right-3.5 group ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-black dark:text-white h-5 w-5 group-hover:scale-125 group-hover:rotate-3 transition duration-200 ">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M18 6l-12 12" />
				<path d="M6 6l12 12" />
			</svg>
		</button>
	);
};


export const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		const listener = (event) => {
			// No hacer nada si el elemento que se hace clic es el elemento objetivo o sus hijos
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			callback(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener, { passive: true });
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, callback]);
};
