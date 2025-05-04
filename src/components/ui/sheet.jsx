"use client";

import {forwardRef} from "react";
import clsx from "clsx";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

// Overlay del Sheet
const SheetOverlay = forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={clsx("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

// Contenido del Sheet
const SheetContent = forwardRef(({ side = "right", className, children, ...props }, ref) => {
  const sideClasses = {
    top: "top-0 left-0 right-0 border-b",
    bottom: "bottom-0 left-0 right-0 border-t",
    left: "left-0 top-0 bottom-0 w-3/4 border-r sm:max-w-sm",
    right: "right-0 top-0 bottom-0 w-3/4 border-l sm:max-w-sm",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={clsx(
          "fixed z-50 p-6 shadow-lg transition",
          sideClasses[side],
          className
        )}
        {...props}
      >
        <SheetTitle>
          <VisuallyHidden>Panel</VisuallyHidden>
        </SheetTitle>
        {children}
        <SheetClose className="absolute right-4 top-4 p-1 rounded-sm hover:scale-110 duration-200">
          <X className="h-7 w-7" />
          <span className="sr-only">Cerrar</span>
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = "SheetContent";

// Título del Sheet
const SheetTitle = forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={clsx("text-lg font-semibold", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

// Encabezado del Sheet
const SheetHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("text-lg font-semibold", className)} {...props} />
));
SheetHeader.displayName = "SheetHeader";

// Pie de página del Sheet
const SheetFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("flex flex-col sm:flex-row justify-end space-x-2", className)}
    {...props}
  />
));
SheetFooter.displayName = "SheetFooter";


export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter };