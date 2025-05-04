"use client"
import { MotionWrapper } from "./motion-wrapper"

export const Bounce = (props) => (
  <MotionWrapper animation="bounce" loop {...props} />
)